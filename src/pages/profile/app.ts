import { collection, deleteDoc, doc, getDoc, getDocs, getFirestore, onSnapshot, query, updateDoc, where, writeBatch } from "firebase/firestore";
import { Post, User } from "../home/app";
import { EmailAuthProvider, GoogleAuthProvider, getAuth, reauthenticateWithCredential, signOut, signInWithPopup, deleteUser } from "firebase/auth";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";


let postId = "";
const db = getFirestore();
const colRef = collection(db, 'posts');
const idParams = new URLSearchParams(location.search);
const user = localStorage.getItem('user');
const avatar = document.querySelector('.avatar') as HTMLImageElement;
const userName = document.querySelector('.user-name') as HTMLElement;
const parsedUser = user ? JSON.parse(user) : null;
const signOutBtn = document.querySelector('.sign-out') as HTMLButtonElement;
const nameProfile = document.querySelector('.info h3') as HTMLElement;
const avatarProfile = document.querySelector('.avatar-profile img') as HTMLImageElement;
const imgContainer = document.querySelector('.img-content');
const container = document.querySelector('.posts-container') as HTMLElement;
const homeLink = document.querySelector('.link') as HTMLAnchorElement;
const deleteContainer = document.querySelector('.profile-main') as HTMLElement;
const userInfoContainer = document.querySelector('.user-navbar') as HTMLElement;
const storage = getStorage();
const auth = getAuth();

if (!user) window.location.href = '/';

if (user) {
    userName.innerHTML = parsedUser.name || parsedUser.displayName || parsedUser.email.split("@")[0];
    avatar.src = parsedUser.photoURL ? parsedUser.photoURL : "https://www.w3schools.com/howto/img_avatar.png";
}

homeLink.innerHTML = `
    <a href="../home/home.html" class="navbar-brand link">Y.C</a>
`

onSnapshot(colRef, (snapshot) => {
    let posts: Post[] = [];

    snapshot.docs.forEach((doc) => {
        for (const value of idParams.values()) {
            if (value === doc.data().createdBy) {
                console.log(doc)
                posts.push({
                    ...doc.data() as Post, id: doc.id
                });
            }
        }
    })

    if (posts.length === 0) return container!.innerHTML = "<h3 style='border: 1px solid; padding: 1rem; border-radius: 10px'>The user has not made any posts yet</h3>";


    showPosts(posts);

    const loveBtns = document.querySelectorAll('.love-btn');

    loveBtns.forEach((loveBtn, idx) => {
        loveBtn.addEventListener('click', (e: Event) => {
            const id = posts[idx].id;
            let loveQuantity = posts[idx].love;
            let isLovedBy = posts[idx].isLoved;
            const isMatched = isLovedBy?.some((lovedBy) => lovedBy.uid === parsedUser.uid)

            console.log(isLovedBy)

            postId = id;
            const postRef = doc(db, "posts", id);

            if (isMatched) {
                console.log('Matched')
                updateDoc(postRef, {
                    love: loveQuantity - 1,
                    isLoved: (isLovedBy as User[]).filter((lovedBy) => lovedBy.uid !== parsedUser.uid)
                })

            } else {
                console.log('No matched')
                updateDoc(postRef, {
                    love: loveQuantity + 1,
                    isLoved: [...isLovedBy, parsedUser]
                })
            }
        })
    })
})

const showProfile = () => {
    for (const value of idParams.values()) {
        const userRef = doc(db, "users", value);

        getDoc(userRef).then((docSnapshot) => {
            const user = docSnapshot.data();
            if (parsedUser.uid === value || parsedUser.email === user?.email) {
                const btn = document.createElement('div');
                const span = document.createElement('span');
                btn.appendChild(span);
                btn.classList.add('delete-btn');
                span.innerText = 'Delete my account';
                deleteContainer.append(btn)

                btn.addEventListener('click', () => {
                    const user = auth.currentUser;
                    if (user) {
                        const providerData = user.providerData;
                        if (providerData.length > 0) {
                            providerData.forEach((userInfo) => {
                                if (userInfo.providerId === 'google.com') {
                                    const provider = new GoogleAuthProvider();
                                    signInWithPopup(auth, provider)
                                        .then((result) => {
                                            const credential = GoogleAuthProvider.credentialFromResult(result);
                                            if (credential) {
                                                reauthenticateWithCredential(user, credential).then(() => {
                                                    deleteUser(user).then(() => {
                                                        clearPostsAfterDelete(value)
                                                        deleteDoc(userRef).then(() => {
                                                            window.location.href = '/'
                                                            localStorage.removeItem('user');
                                                            console.log('User deleted');
                                                        });

                                                    })
                                                }).catch((error) => {
                                                    console.log(error)
                                                });
                                            }
                                        })
                                        .then(() => {
                                            console.log('Successfully signed in with Google');
                                        })
                                        .catch((error) => {
                                            console.error(error);
                                        });
                                } else if (userInfo.providerId === 'password') {

                                    const email = prompt('Enter your email:');
                                    const password = prompt('Enter your password:');

                                    if (user && email && password) {
                                        const credential = EmailAuthProvider.credential(email, password);

                                        reauthenticateWithCredential(user, credential).then(() => {
                                            deleteUser(user).then(() => {
                                                clearPostsAfterDelete(value); 
                                                deleteDoc(userRef).then(() => {
                                                    window.location.href = '/'
                                                    localStorage.removeItem('user');
                                                    console.log('User deleted');
                                                });
                                            })
                                        }).catch((error) => {
                                            console.log(error)
                                        });
                                    }
                                }
                            });
                        }
                    }

                })
            }

            nameProfile.innerText = user?.displayName || user?.email.split("@")[0];
            avatarProfile.src = user?.photoURL ? user.photoURL : "https://www.w3schools.com/howto/img_avatar.png"
        })
    }
}

showProfile()

const showPosts = (posts: Post[]) => {
    container.innerHTML = "";

    posts.map((post) => {
        const element = ` <div class="card w-100 mb-3"> <div class="card-body"><a href="#" class="d-flex align-items-center gap-2 mb-3">
        <img class="avatar" style="width: 30px; height: 30px;"
            src="${post.photoURL ? post.photoURL : "https://www.w3schools.com/howto/img_avatar.png"}" alt="user">
        <p class="user-name">${post.name || post.displayName}</p>
        </a>
        <h5 class="card-title">${post.title}</h5>
        <p class="card-text">${post.msg}</p>
            <div class="d-flex align-items-center gap-2">
               <i class="love-btn bi bi-heart${post.isLoved?.some((lovedBy) => lovedBy.uid === parsedUser.uid) ? "-fill" : ''}"></i> ${post.love}
            </div>
        </div></div>`;


        container.innerHTML += element;
    })
}

const clearPostsAfterDelete = async (id: string) => {
    const batch = writeBatch(db);
    const postsQuery = query(
        collection(db, "posts"),
        where("createdBy", "==", id)
    );
    const postsQuerySnapshot = await getDocs(postsQuery);

    postsQuerySnapshot.forEach((doc) => {
        batch.delete(doc.ref);
        console.log(doc.ref)
    });

    await batch.commit();
    console.log(`Deleted ${postsQuerySnapshot.size} posts created by user with id ${id}`);
}

signOutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
        window.location.href = '/';
        localStorage.removeItem('user');
    }).catch((error) => {
        console.log(error.message);
    })
})



function displayImages() {
    for (const value of idParams.values()) {

        const userRef = doc(db, "users", value);

        getDoc(userRef).then((docSnapshot) => {
            const user = docSnapshot.data();
            console.log(value)
            const storageRef = ref(storage, `/users/${user!.id}/images`)

            listAll(storageRef)
                .then((res) => {
                    if (res.items.length === 0) return imgContainer!.innerHTML = "<p>No images found</p>";
                    res.items.forEach((itemRef) => {
                        getDownloadURL(itemRef)
                            .then((url) => {
                                const imgBox = document.createElement('img');
                                imgBox.classList.add('img-box');
                                imgBox.src = url;

                                imgContainer?.append(imgBox);
                            })
                            .catch((error) => {
                                console.log(error.message);
                            })

                    });
                }).catch((error) => {
                    console.log(error.message);
                });

        })
    }
}

userInfoContainer.addEventListener('click', (e) => {
    window.location.href = `../profile/profile.html?id=${parsedUser.uid}`;
})


displayImages();