import { getAuth, signOut, User as UserAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, onSnapshot, updateDoc, doc } from 'firebase/firestore';

export interface Post {
    displayName: string | undefined;
    photoURL: string;
    title: string;
    id: string,
    createdBy: string,
    msg: string,
    name: string,
    love: number,
    isLoved: UserAuth[] | User[] | [],
    createdAt: string
}

export interface User {
    email: string,
    id: string,
    isSuggested: boolean,
    name: string
    photoURL: string | null,
    displayName?: string,
    uid?: string,
}

export interface ParcedUser {
    displayName: string;
    email: string;
    id: string;
    isSuggested: boolean;
    photoURL: string
}

const db = getFirestore();
const auth = getAuth();
const colRef = collection(db, 'posts');
const modal = document.getElementById('modal');
const avatar = document.querySelector('.avatar') as HTMLImageElement;
const userName = document.querySelector('.user-name') as HTMLElement;
const signOutBtn = document.querySelector('.sign-out') as HTMLButtonElement;
const user = localStorage.getItem('user');
const accountList = document.querySelector('.account-list');
const parsedUser = user ? JSON.parse(user) : null;
const allAccounts = document.querySelector('.all-accounts');
const container = document.querySelector('.posts-container') as HTMLElement;
const userInfoContainer = document.querySelector('.user-navbar') as HTMLElement;

let postId = "";
const usersRef = collection(db, 'users');

if (!user) window.location.href = '/';

if (user) {
    userName.innerHTML = parsedUser.name || parsedUser.displayName || parsedUser.email.split("@")[0];
    avatar.src = parsedUser.photoURL ? parsedUser.photoURL : "https://www.w3schools.com/howto/img_avatar.png";
}

// Show or hide modal
if (modal) {
    modal.addEventListener('show.bs.modal', () => {
        const submitBtn = document.querySelector('.btn-create-post') as HTMLButtonElement;
        submitBtn.addEventListener('click', () => {
            addItem();
        });
    })
}



function addItem() {
    const titleModal = document.getElementById('title-modal') as HTMLInputElement;
    const msg = document.getElementById('message-text') as HTMLInputElement;
    const closeBtn = document.querySelector('.btn-close') as HTMLElement;
    let users = localStorage.getItem('userList');
    let userList = JSON.parse(users ?? '[]');
    let isMyId = userList.filter((user: UserAuth) => user.email === parsedUser.email);

    if (titleModal.value && msg.value) {
        addDoc(colRef, {
            title: titleModal.value,
            msg: msg.value,
            createdBy: isMyId.length > 0 ? isMyId[0].id : null,
            name: parsedUser.displayName || parsedUser.email.split("@")[0],
            love: 0,
            isLoved: [],
            photoURL: parsedUser.photoURL || "https://www.w3schools.com/howto/img_avatar.png",
            createdAt: new Date().toISOString()
        })
        closeBtn.click();
    }
    titleModal.value = '';
    msg.value = '';
}

onSnapshot(colRef, (snapshot) => {

    let posts: Post[] = [];

    snapshot.docs.forEach((doc) => {
        posts.push({
            ...doc.data() as Post, id: doc.id
        });
    })

    showPosts(posts)

    const loveBtns = document.querySelectorAll('.love-btn');

    loveBtns.forEach((loveBtn, idx) => {
        loveBtn.addEventListener('click', (e: Event) => {
            const id = posts[idx].id;
            let loveQuantity = posts[idx].love;
            let isLovedBy = posts[idx].isLoved;
            const isMatched = isLovedBy?.some((lovedBy) => lovedBy.uid === parsedUser.uid)
            postId = id;
            const postRef = doc(db, "posts", id);

            if (isMatched) {
                let newIsLovedBy = (isLovedBy as User[]).filter((lovedBy) => lovedBy.uid !== parsedUser.uid)
                updateDoc(postRef, {
                    love: loveQuantity - 1,
                    isLoved: newIsLovedBy
                })

            } else {
                console.log('No matched')
                updateDoc(postRef, {
                    love: loveQuantity + 1,
                    isLoved: [...isLovedBy as User[], parsedUser]
                })
            }
        })
    })
})


const showPosts = (posts: Post[]) => {
    container.innerHTML = "";

    let newPosts: Post[] = posts.sort((a, b) => {
        const aDate = a.createdAt ? new Date(a.createdAt) : new Date(0);
        const bDate = b.createdAt ? new Date(b.createdAt) : new Date(0);
        return bDate.getTime() - aDate.getTime();
    });

    newPosts.map((post) => {
        const element = ` <div class="card w-100 mb-3"> <div class="card-body"><a href="../profile/profile.html?id=${post.createdBy}" class="d-flex align-items-center gap-2 mb-3">
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

function showSuggestedAccounts() {
    onSnapshot(usersRef, (snapshot) => {
        let users: User[] = [];
        snapshot.docs.forEach((doc) => {
            users.push({
                ...doc.data() as User, id: doc.id
            });
        })

        users.map((user: User) => {
            if (user.isSuggested) {
                let el = `
                    <li class="list-group-item">
                        <a href="../profile/profile.html?id=${user.id}" class="d-flex align-items-center gap-2">
                            <img class="avatar" style="width: 30px; height: 30px;"
                                src=${user.photoURL} alt="user">
                            <p class="user-name">${user.displayName?.split(' ').slice(0, 2).join(' ')}</p>
                            <i class="bi bi-flag-fill icon-flag"></i>
                        </a>
                </li>
                 `;
                accountList!.innerHTML += el;
            }
        })
    })
}

function showAllAccounts() {
    onSnapshot(usersRef, (snapshot) => {
        let users: User[] = [];

        snapshot.docs.forEach((doc) => {
            let data = doc.data() as User;

            users.push({
                ...data, id: doc.id
            });
        })

        localStorage.setItem('userList', JSON.stringify(users));

        console.log(users);

        users.map((user: User) => {
            let el = `
                    <li class="list-group-item">
                        <a href="../profile/profile.html?id=${user.id}" class="d-flex align-items-center gap-2">
                            <img class="avatar" style="width: 30px; height: 30px;"
                                src=${user.photoURL || 'https://www.w3schools.com/howto/img_avatar.png'} alt="user">
                            <p class="user-name">${user.displayName?.split(' ').slice(0, 2).join(' ') || user.email.split('@')[0]}</p>
                        </a>
                </li>
                 `;
            allAccounts!.innerHTML += el;
        }
        )
    })
}

userInfoContainer.addEventListener('click', (e) => {
    let users = localStorage.getItem('userList');
    let userList = JSON.parse(users ?? '[]');
    let isMyId = userList.filter((user: ParcedUser) => user.email === parsedUser.email);

    window.location.href = `../profile/profile.html?id=${isMyId[0].id}`;
})

signOutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
        window.location.href = '../../index.html';
        localStorage.removeItem('user');
    }).catch((error) => {
        console.log(error.message);
    })
})

showSuggestedAccounts()
showAllAccounts()


