function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequireb36d;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequireb36d=o),o.register("fCOdq",(function(t,n){e(t.exports,"getDownloadURL",(()=>o("jceyq").getDownloadURL)),e(t.exports,"getStorage",(()=>o("jceyq").getStorage)),e(t.exports,"listAll",(()=>o("jceyq").listAll)),e(t.exports,"ref",(()=>o("jceyq").ref)),e(t.exports,"uploadBytes",(()=>o("jceyq").uploadBytes)),o("jceyq")})),o.register("jceyq",(function(t,n){e(t.exports,"uploadBytes",(()=>xe)),e(t.exports,"listAll",(()=>Ue)),e(t.exports,"getDownloadURL",(()=>Ie)),e(t.exports,"ref",(()=>Ne)),e(t.exports,"getStorage",(()=>Ce));var r=o("7xvHX"),s=o("gMVVg"),i=o("eryG9");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="firebasestorage.googleapis.com",u="storageBucket";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c extends s.FirebaseError{constructor(e,t,n=0){super(f(e),`Firebase Storage: ${t} (${f(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,c.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return f(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var l,h,d,p;function f(e){return"storage/"+e}function _(){return new c(l.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function g(){return new c(l.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function m(){return new c(l.CANCELED,"User canceled the upload/download.")}function w(){return new c(l.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function b(e){return new c(l.INVALID_ARGUMENT,e)}function R(){return new c(l.APP_DELETED,"The Firebase app was deleted.")}function T(e,t){return new c(l.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function E(e){throw new c(l.INTERNAL_ERROR,"Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(h=l||(l={})).UNKNOWN="unknown",h.OBJECT_NOT_FOUND="object-not-found",h.BUCKET_NOT_FOUND="bucket-not-found",h.PROJECT_NOT_FOUND="project-not-found",h.QUOTA_EXCEEDED="quota-exceeded",h.UNAUTHENTICATED="unauthenticated",h.UNAUTHORIZED="unauthorized",h.UNAUTHORIZED_APP="unauthorized-app",h.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",h.INVALID_CHECKSUM="invalid-checksum",h.CANCELED="canceled",h.INVALID_EVENT_NAME="invalid-event-name",h.INVALID_URL="invalid-url",h.INVALID_DEFAULT_BUCKET="invalid-default-bucket",h.NO_DEFAULT_BUCKET="no-default-bucket",h.CANNOT_SLICE_BLOB="cannot-slice-blob",h.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",h.NO_DOWNLOAD_URL="no-download-url",h.INVALID_ARGUMENT="invalid-argument",h.INVALID_ARGUMENT_COUNT="invalid-argument-count",h.APP_DELETED="app-deleted",h.INVALID_ROOT_OPERATION="invalid-root-operation",h.INVALID_FORMAT="invalid-format",h.INTERNAL_ERROR="internal-error",h.UNSUPPORTED_ENVIRONMENT="unsupported-environment";class y{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=y.makeFromUrl(e,t)}catch(t){return new y(e,"")}if(""===n.path)return n;throw r=e,new c(l.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.");var r}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const o=new RegExp("^gs://"+r+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}const i=t.replace(/[.]/g,"\\."),u=[{regex:o,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${i}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${t===a?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let t=0;t<u.length;t++){const r=u[t],o=r.regex.exec(e);if(o){const e=o[r.indices.bucket];let t=o[r.indices.path];t||(t=""),n=new y(e,t),r.postModify(n);break}}if(null==n)throw function(e){return new c(l.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return n}}class k{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e){return"string"==typeof e||e instanceof String}function A(e){return v()&&e instanceof Blob}function v(){return"undefined"!=typeof Blob&&!(0,s.isNode)()}function x(e,t,n,r){if(r<t)throw b(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw b(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function I(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(e,t){const n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),o=-1!==t.indexOf(e);return n||r||o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(p=d||(d={}))[p.NO_ERROR=0]="NO_ERROR",p[p.NETWORK_ERROR=1]="NETWORK_ERROR",p[p.ABORT=2]="ABORT";class C{constructor(e,t,n,r,o,s,i,a,u,c,l,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=i,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{const n=this.resolve_,r=this.reject_,o=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(o,o.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==o){const e=_();e.serverResponse=o.getErrorText(),this.errorCallback_?r(this.errorCallback_(o,e)):r(e)}else if(t.canceled){r(this.appDelete_?R():m())}else{r(g())}};this.canceled_?e(0,new D(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,o=null,s=null,i=!1,a=0;function u(){return 2===a}let c=!1;function l(...e){c||(c=!0,t.apply(null,e))}function h(t){o=setTimeout((()=>{o=null,e(p,u())}),t)}function d(){s&&clearTimeout(s)}function p(e,...t){if(c)return void d();if(e)return d(),void l.call(null,e,...t);if(u()||i)return d(),void l.call(null,e,...t);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),h(n)}let f=!1;function _(e){f||(f=!0,d(),c||(null!==o?(e||(a=2),clearTimeout(o),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{i=!0,_(!0)}),n),_}(((e,t)=>{if(t)return void e(!1,new D(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===d.NO_ERROR,o=n.getStatus();if(!t||N(o,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===d.ABORT;return void e(!1,new D(!1,null,t))}const s=-1!==this.successCodes_.indexOf(o);e(!0,new D(s,n))}))}),e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class D{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function P(...e){const t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(v())return new Blob(e);throw new c(l.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){if("undefined"==typeof atob)throw t="base-64",new c(l.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);var t;return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class B{constructor(e,t){this.data=e,this.contentType=t||null}}function M(e,t){switch(e){case S.RAW:return new B(F(t));case S.BASE64:case S.BASE64URL:return new B(q(e,t));case S.DATA_URL:return new B(function(e){const t=new V(e);return t.base64?q(S.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw T(S.DATA_URL,"Malformed data URL.")}return F(t)}(t.rest)}(t),new V(t).contentType)}throw _()}function F(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function q(e,t){switch(e){case S.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw T(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case S.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw T(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=L(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw T(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class V{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw T(S.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;var r,o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */null!=n&&(this.base64=(o=";base64",!!((r=n).length>=o.length)&&r.substring(r.length-o.length)===o),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}class j{constructor(e,t){let n=0,r="";A(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(A(this.data_)){const s=this.data_,i=(r=e,o=t,(n=s).webkitSlice?n.webkitSlice(r,o):n.mozSlice?n.mozSlice(r,o):n.slice?n.slice(r,o):null);return null===i?null:new j(i)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new j(n,!0)}var n,r,o}static getBlob(...e){if(v()){const t=e.map((e=>e instanceof j?e.data_:e));return new j(P.apply(null,t))}{const t=e.map((e=>O(e)?M(S.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let o=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[o++]=e[t]})),new j(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){let t;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e,t){return t}class W{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||z}}let K=null;function X(){if(K)return K;const e=[];e.push(new W("bucket")),e.push(new W("generation")),e.push(new W("metageneration")),e.push(new W("name","fullPath",!0));const t=new W("name");t.xform=function(e,t){return function(e){return!O(e)||e.length<2?e:H(e)}(t)},e.push(t);const n=new W("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new W("timeCreated")),e.push(new W("updated")),e.push(new W("md5Hash",null,!0)),e.push(new W("cacheControl",null,!0)),e.push(new W("contentDisposition",null,!0)),e.push(new W("contentEncoding",null,!0)),e.push(new W("contentLanguage",null,!0)),e.push(new W("contentType",null,!0)),e.push(new W("metadata","customMetadata",!0)),K=e,K}function G(e,t,n){const r={type:"file"},o=n.length;for(let e=0;e<o;e++){const o=n[e];r[o.local]=o.xform(r,t[o.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,o=new y(n,r);return t._makeStorageReference(o)}})}(r,e),r}function Z(e,t,n){const r=$(t);if(null===r)return null;return G(e,r,n)}function J(e,t){const n={},r=t.length;for(let o=0;o<r;o++){const r=t[o];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y="prefixes",Q="items";function ee(e,t,n){const r=$(n);if(null===r)return null;return function(e,t,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Y])for(const o of n[Y]){const n=o.replace(/\/$/,""),s=e._makeStorageReference(new y(t,n));r.prefixes.push(s)}if(n[Q])for(const o of n[Q]){const n=e._makeStorageReference(new y(t,o.name));r.items.push(n)}return r}(e,t,r)}class te{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e){if(!e)throw _()}function re(e,t){return function(n,r){const o=Z(e,r,t);return ne(null!==o),o}}function oe(e,t){return function(n,r){const o=Z(e,r,t);return ne(null!==o),function(e,t,n,r){const o=$(t);if(null===o)return null;if(!O(o.downloadTokens))return null;const s=o.downloadTokens;if(0===s.length)return null;const i=encodeURIComponent;return s.split(",").map((t=>{const o=e.bucket,s=e.fullPath;return U("/b/"+i(o)+"/o/"+i(s),n,r)+I({alt:"media",token:t})}))[0]}(o,r,e.host,e._protocol)}}function se(e){return function(t,n){let r;var o,s;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new c(l.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new c(l.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(s=e.bucket,r=new c(l.QUOTA_EXCEEDED,"Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(o=e.path,r=new c(l.UNAUTHORIZED,"User does not have permission to access '"+o+"'.")):r=n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}}function ie(e){const t=se(e);return function(n,r){let o=t(n,r);var s;return 404===n.getStatus()&&(s=e.path,o=new c(l.OBJECT_NOT_FOUND,"Object '"+s+"' does not exist.")),o.serverResponse=r.serverResponse,o}}function ae(e,t,n,r,o){const s={};t.isRoot?s.prefix="":s.prefix=t.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),o&&(s.maxResults=o);const i=U(t.bucketOnlyServerUrl(),e.host,e._protocol),a=e.maxOperationRetryTime,u=new te(i,"GET",function(e,t){return function(n,r){const o=ee(e,t,r);return ne(null!==o),o}}(e,t.bucket),a);return u.urlParams=s,u.errorHandler=se(t),u}function ue(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}function ce(e,t,n,r,o){const s=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();i["Content-Type"]="multipart/related; boundary="+a;const u=ue(t,r,o),c="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+J(u,n)+"\r\n--"+a+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",l="\r\n--"+a+"--",h=j.getBlob(c,r,l);if(null===h)throw w();const d={name:u.fullPath},p=U(s,e.host,e._protocol),f=e.maxUploadRetryTime,_=new te(p,"POST",re(e,n),f);return _.urlParams=d,_.headers=i,_.body=h.uploadData(),_.errorHandler=se(t),_}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let le=null;class he{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=d.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=d.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=d.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw E("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw E("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw E("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw E("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw E("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class de extends he{initXhr(){this.xhr_.responseType="text"}}function pe(){return le?le():new de}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe{constructor(e,t){this._service=e,this._location=t instanceof y?t:y.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new fe(e,t)}get root(){const e=new y(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return H(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new y(this._location.bucket,e);return new fe(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new c(l.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function _e(e,t,n){e._throwIfRoot("uploadBytes");const r=ce(e.storage,e._location,X(),new j(t,!0),n);return e.storage.makeRequestWithTokens(r,pe).then((t=>({metadata:t,ref:e})))}function ge(e){const t={prefixes:[],items:[]};return me(e,t).then((()=>t))}async function me(e,t,n){const r={pageToken:n},o=await we(e,r);t.prefixes.push(...o.prefixes),t.items.push(...o.items),null!=o.nextPageToken&&await me(e,t,o.nextPageToken)}function we(e,t){null!=t&&"number"==typeof t.maxResults&&x("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=ae(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,pe)}function be(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=U(t.fullServerUrl(),e.host,e._protocol),o=e.maxOperationRetryTime,s=new te(r,"GET",oe(e,n),o);return s.errorHandler=ie(t),s}(e.storage,e._location,X());return e.storage.makeRequestWithTokens(t,pe).then((e=>{if(null===e)throw new c(l.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e}))}function Re(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new y(e._location.bucket,n);return new fe(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e,t){if(e instanceof ke){const n=e;if(null==n._bucket)throw new c(l.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+u+"' property when initializing the app?");const r=new fe(n,n._bucket);return null!=t?Te(r,t):r}return void 0!==t?Re(e,t):e}function Ee(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof ke)return new fe(e,t);throw b("To use ref(service, url), the first argument must be a Storage instance.")}return Te(e,t)}function ye(e,t){const n=null==t?void 0:t[u];return null==n?null:y.makeFromBucketSpec(n,e)}class ke{constructor(e,t,n,r,o){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?y.makeFromBucketSpec(r,this._host):ye(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=y.makeFromBucketSpec(this._url,e):this._bucket=ye(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){x("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){x("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new fe(this,e)}_makeRequest(e,t,n,r,o=!0){if(this._deleted)return new k(R());{const s=function(e,t,n,r,o,s,i=!0){const a=I(e.urlParams),u=e.url+a,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,s),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,r),new C(u,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,this._appId,n,r,t,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const Oe="@firebase/storage",Ae="0.11.2",ve="storage";function xe(e,t,n){return _e(e=(0,s.getModularInstance)(e),t,n)}function Ue(e){return ge(e=(0,s.getModularInstance)(e))}function Ie(e){return be(e=(0,s.getModularInstance)(e))}function Ne(e,t){return Ee(e=(0,s.getModularInstance)(e),t)}function Ce(e=(0,r.getApp)(),t){e=(0,s.getModularInstance)(e);const n=(0,r._getProvider)(e,ve).getImmediate({identifier:t}),o=(0,s.getDefaultEmulatorHostnameAndPort)("storage");return o&&function(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:o}=r;o&&(e._overrideAuthToken="string"==typeof o?o:(0,s.createMockUserToken)(o,e.app.options.projectId))}(e,t,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,...o),n}function De(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new ke(n,o,s,t,r.SDK_VERSION)}(0,r._registerComponent)(new(0,i.Component)(ve,De,"PUBLIC").setMultipleInstances(!0)),(0,r.registerVersion)(Oe,Ae,""),(0,r.registerVersion)(Oe,Ae,"esm2017")}));
//# sourceMappingURL=signUp.26ef93c9.js.map
