var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequireb36d;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,o){t[e]=o},e.parcelRequireb36d=n);var r=n("ffXIN"),s=n("5qXVr"),l=n("2hFRm");let a="";const c=(0,r.getFirestore)(),i=(0,r.collection)(c,"posts"),d=new URLSearchParams(location.search),h=localStorage.getItem("user"),u=document.querySelector(".avatar"),m=document.querySelector(".user-name"),p=h?JSON.parse(h):null,g=document.querySelector(".sign-out"),f=document.querySelector(".info h3"),v=document.querySelector(".avatar-profile img"),w=document.querySelector(".img-content"),y=document.querySelector(".posts-container"),L=document.querySelector(".link"),b=document.querySelector(".profile-main"),S=document.querySelector(".user-navbar"),x=(0,l.getStorage)(),E=(0,s.getAuth)();h||(window.location.href="../../index.html"),h&&(m.innerHTML=p.name||p.displayName||p.email.split("@")[0],u.src=p.photoURL?p.photoURL:"https://www.w3schools.com/howto/img_avatar.png"),L.innerHTML='\n    <a href="../home/home.html" class="navbar-brand link">Y.C</a>\n',(0,r.onSnapshot)(i,(e=>{let o=[];if(e.docs.forEach((e=>{for(const t of d.values())t===e.data().createdBy&&(console.log(e),o.push({...e.data(),id:e.id}))})),0===o.length)return y.innerHTML="<h3 style='border: 1px solid; padding: 1rem; border-radius: 10px'>The user has not made any posts yet</h3>";q(o);document.querySelectorAll(".love-btn").forEach(((e,t)=>{e.addEventListener("click",(e=>{const n=o[t].id;let s=o[t].love,l=o[t].isLoved;const i=l?.some((e=>e.uid===p.uid));console.log(l),a=n;const d=(0,r.doc)(c,"posts",n);i?(console.log("Matched"),(0,r.updateDoc)(d,{love:s-1,isLoved:l.filter((e=>e.uid!==p.uid))})):(console.log("No matched"),(0,r.updateDoc)(d,{love:s+1,isLoved:[...l,p]}))}))}))}));(()=>{for(const e of d.values()){const o=(0,r.doc)(c,"users",e);(0,r.getDoc)(o).then((t=>{const n=t.data();if(p.uid===e||p.email===n?.email){const t=document.createElement("div"),n=document.createElement("span");t.appendChild(n),t.classList.add("delete-btn"),n.innerText="Delete my account",b.append(t),t.addEventListener("click",(()=>{const t=E.currentUser;if(t){const n=t.providerData;n.length>0&&n.forEach((n=>{if("google.com"===n.providerId){const n=new(0,s.GoogleAuthProvider);(0,s.signInWithPopup)(E,n).then((n=>{const l=s.GoogleAuthProvider.credentialFromResult(n);l&&(0,s.reauthenticateWithCredential)(t,l).then((()=>{(0,s.deleteUser)(t).then((()=>{D(e),(0,r.deleteDoc)(o).then((()=>{localStorage.removeItem("user"),window.location.href="../../index.html"}))}))})).catch((e=>{console.log(e)}))})).then((()=>{console.log("Successfully signed in with Google")})).catch((e=>{console.error(e)}))}else if("password"===n.providerId){const n=prompt("Enter your email:"),l=prompt("Enter your password:");if(t&&n&&l){const a=s.EmailAuthProvider.credential(n,l);(0,s.reauthenticateWithCredential)(t,a).then((()=>{(0,s.deleteUser)(t).then((()=>{D(e),(0,r.deleteDoc)(o).then((()=>{localStorage.removeItem("user"),window.location.href="../../index.html"}))}))})).catch((e=>{console.log(e)}))}}}))}}))}f.innerText=n?.displayName||n?.email.split("@")[0],v.src=n?.photoURL?n.photoURL:"https://www.w3schools.com/howto/img_avatar.png"}))}})();const q=e=>{y.innerHTML="",e.map((e=>{const o=` <div class="card w-100 mb-3"> <div class="card-body"><a href="#" class="d-flex align-items-center gap-2 mb-3">\n        <img class="avatar" style="width: 30px; height: 30px;"\n            src="${e.photoURL?e.photoURL:"https://www.w3schools.com/howto/img_avatar.png"}" alt="user">\n        <p class="user-name">${e.name||e.displayName}</p>\n        </a>\n        <h5 class="card-title">${e.title}</h5>\n        <p class="card-text">${e.msg}</p>\n            <div class="d-flex align-items-center gap-2">\n               <i class="love-btn bi bi-heart${e.isLoved?.some((e=>e.uid===p.uid))?"-fill":""}"></i> ${e.love}\n            </div>\n        </div></div>`;y.innerHTML+=o}))},D=async e=>{const o=(0,r.writeBatch)(c),t=(0,r.query)((0,r.collection)(c,"posts"),(0,r.where)("createdBy","==",e)),n=await(0,r.getDocs)(t);n.forEach((e=>{o.delete(e.ref),console.log(e.ref)})),await o.commit(),console.log(`Deleted ${n.size} posts created by user with id ${e}`)};g.addEventListener("click",(()=>{(0,s.signOut)(E).then((()=>{localStorage.removeItem("user"),window.location.href="../../index.html"})).catch((e=>{console.log(e.message)}))})),S.addEventListener("click",(e=>{window.location.href=`../profile/profile.html?id=${p.uid}`})),function(){for(const e of d.values()){const o=(0,r.doc)(c,"users",e);(0,r.getDoc)(o).then((o=>{const t=o.data();console.log(e);const n=(0,l.ref)(x,`/users/${t.id}/images`);(0,l.listAll)(n).then((e=>{if(0===e.items.length)return w.innerHTML="<p>No images found</p>";e.items.forEach((e=>{(0,l.getDownloadURL)(e).then((e=>{const o=document.createElement("img");o.classList.add("img-box"),o.src=e,w?.append(o)})).catch((e=>{console.log(e.message)}))}))})).catch((e=>{console.log(e.message)}))}))}}();