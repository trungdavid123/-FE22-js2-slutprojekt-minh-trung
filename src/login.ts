import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { showMsg } from "./utils/showMsg";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";

const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;
const emailInput = document.getElementById("email-input") as HTMLInputElement;
const passwordInput = document.getElementById("password-input") as HTMLInputElement;
const ggBtn = document.querySelector(".gg-btn") as HTMLButtonElement;
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore();
const user = localStorage.getItem('user');

if (user) window.location.href = './pages/home/home.html';


submitBtn?.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("User logged in: ", cred);
      const user = cred.user;

      localStorage.setItem('user', JSON.stringify(user));
      window.location.href = './pages/home/home.html'
    })
    .catch(() => {
      showMsg('Please enter a valid email or password')
    })
});

ggBtn.addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const user = result.user;
      const blurBg = document.querySelector('.shadow') as HTMLElement;
      const spinner = document.querySelector('.spinner-border') as HTMLElement;
      const usersRef = collection(db, "users");
      const userDocRef = doc(usersRef, user.uid);

      setDoc(userDocRef, {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        isSuggested: user.email === 'trungdavid969@gmail.com' ? true : false
      })

      blurBg.style.display = 'block';
      spinner.style.display = 'block';

      localStorage.setItem('user', JSON.stringify(user));
      console.log("User logged in: ", user);


      setTimeout(() => {
        blurBg.style.display = 'none';
        spinner.style.display = 'none';
        window.location.href = './pages/home/home.html'
      }, 2000)

    }).catch(() => {
      showMsg('Something went wrong');
    })
});


