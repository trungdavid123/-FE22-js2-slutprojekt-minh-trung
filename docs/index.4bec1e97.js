var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},n={},o=e.parcelRequireb36d;null==o&&((o=function(e){if(e in l)return l[e].exports;if(e in n){var o=n[e];delete n[e];var t={id:e,exports:{}};return l[e]=t,o.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,l){n[e]=l},e.parcelRequireb36d=o);var t=o("6AR8M");const i=document.querySelector(".message"),r=e=>{i.innerHTML="";const l=`<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n    <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>\n    </symbol>\n    <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">\n      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>\n    </symbol>\n    <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">\n      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>\n    </symbol>\n  </svg><div class="alert alert-warning d-flex align-items-center mt-5" role="alert">\n    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>\n    <div>\n     ${e}      \n    </div>\n  </div>`;i.innerHTML+=l};var a=o("ilpIi");const s=document.getElementById("submit-btn"),d=document.getElementById("email-input"),c=document.getElementById("password-input"),m=document.querySelector(".gg-btn"),g=(0,t.getAuth)(),u=new(0,t.GoogleAuthProvider),h=(0,a.getFirestore)(),p=localStorage.getItem("user");s?.addEventListener("click",(()=>{const e=d.value,l=c.value;(0,t.signInWithEmailAndPassword)(g,e,l).then((e=>{console.log("User logged in: ",e);const l=e.user;localStorage.setItem("user",JSON.stringify(l)),window.location.href="./pages/home/home.html"})).catch((()=>{r("Please enter a valid email or password")}))})),m.addEventListener("click",(()=>{(0,t.signInWithPopup)(g,u).then((async e=>{const l=e.user,n=document.querySelector(".shadow"),o=document.querySelector(".spinner-border"),t=(0,a.collection)(h,"users"),i=(0,a.doc)(t,l.uid);(0,a.setDoc)(i,{email:l.email,displayName:l.displayName,photoURL:l.photoURL,isSuggested:"trungdavid969@gmail.com"===l.email}),n.style.display="block",o.style.display="block",localStorage.setItem("user",JSON.stringify(l)),console.log("User logged in: ",l),setTimeout((()=>{n.style.display="none",o.style.display="none",window.location.href="./pages/home/home.html"}),2e3)})).catch((()=>{r("Something went wrong")}))})),p&&(window.location.href="./pages/home/home.html");
//# sourceMappingURL=index.4bec1e97.js.map
