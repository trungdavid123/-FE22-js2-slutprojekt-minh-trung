import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { showMsg } from '../../utils/showMsg';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

type MyFile = {
    name: string;
    lastModified: number;
    lastModifiedDate?: Date;
    webkitRelativePath: string;
    size: number;
    type: string;
  }

const auth = getAuth();
const storage = getStorage();
const emailInput = document.getElementById('email') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const rePasswordInput = document.getElementById('re-password') as HTMLInputElement;
const imgInput = document.querySelector('.img-input') as HTMLInputElement;
const placeholderImages = document.querySelectorAll('.placeholder-img') as NodeListOf<HTMLImageElement>;
const submit = document.querySelector('.submit');
let fileList: MyFile[] = [];
const db = getFirestore();


submit?.addEventListener('click', () => {
    const email = emailInput?.value;
    const password = passwordInput?.value;
    const rePassword = rePasswordInput?.value;

    if (!email || !password) {
        return showMsg('Please enter a valid email or password');
    }

    if (password !== rePassword) return showMsg('Passwords do not match');

    if (!imgInput.files?.length) {
        return showMsg('Please select 3 images');
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log(cred);
            const user = cred.user;
            const usersRef = collection(db, 'users');

            localStorage.setItem('user', JSON.stringify(user));
            addDoc(usersRef, {
                id: user.uid,
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                isSuggsted: user.email === 'trungdavid969@gmail.com' ? true : false
            })

            uploadFiles(user.uid);
        })
        .catch((err) => {
            showMsg(err.message)
        })

})


imgInput.addEventListener('change', (e: Event) => {
    const target = e.target as HTMLInputElement;

    if (!target.files?.length || fileList.length === 3) {
        return;
    }
    const file = target.files;
    for (var i = 0; i < file.length; i++) {
        fileList.push(file[i]);
        let placeholderImage: HTMLImageElement = placeholderImages[fileList.length - 1];
        placeholderImage.src = URL.createObjectURL(file[i]);
    }
})


const uploadFiles = (id: string) => {
    fileList.forEach((file: any) => {
        const imageRef = ref(storage, `users/${id}/images/${file.name}`)
        uploadBytes(imageRef, file).then(() => {
            window.location.href = `../home/home.html`;
        })
    })
}



