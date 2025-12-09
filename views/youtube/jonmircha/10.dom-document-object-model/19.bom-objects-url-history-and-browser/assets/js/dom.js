/**
 * [ENGLISH]
 * ====================
 * [SPANISH]
 */

console.log("<Objeto URL (location)>");
console.log(location);          // For Example. Output: Location {href: "http://127.0.0.1:5500/dom.html#contacto", ancestorOrigin: DOMStringList, origin: "http://127.0.0.1:5500", protocol: "http", host: "127.0.0.1:5500", ...}
console.log(location.origin);   // For Example. Output: http://127.0.0.1:5500
console.log(location.protocol); // For Example. Output: http:
console.log(location.host);     // For Example. Output: 127.0.0.1:5500
console.log(location.hostname); // For Example. Output: 127.0.0.1
console.log(location.port);     // For Example. Output: 5500
console.log(location.href);     // For Example. Output: http://127.0.0.1:5500/dom.html#contacto
console.log(location.hash);     // For Example. Output: #contacto
console.log(location.search);   // For Example. Output: ?nombre=Jon&edad=36
console.log(location.pathname); // For Example. Output: /dom.html
// location.reload();
console.log("<.Objeto URL (location)>");

console.log();

console.log("<Objeto URL (history)>");
console.log(history);            // For Example. Output: History {length: 5, scrollRestoration: "auto", state: null}
console.log(history.length);     // For Example. Output: 5
console.log(history.back(3));    // For Example. Output: undefined
console.log(history.forward(3)); // For Example. Output: undefined
console.log(history.go(3));      // For Example. Output: undefined
console.log("<.Objeto URL (history)>");

console.log();

console.log("<Objeto URL (navigator)>");
console.log(navigator);               // For Example. Output: Navigator {vendorSub: "", productSub: "20030107", vendor: "Google Inc.", maxTouchPoints: 0, hardwareConcurrency: 8, ...}
console.log(navigator.connection);    // For Example. Output: NetworkInformation {onchange: null, effectiveType: "4g", rtt:: 100, downlink: 10, saveData: false}
console.log(navigator.geolocation);   // For Example. Output: Geolocation {}
console.log(navigator.mediaDevices);  // For Example. Output: MediaDevices {ondevicechange: null}
console.log(navigator.mimeTypes);     // For Example. Output: MimmeTypeArray {0: MimeType, 1: MimeType, 2: MimeType, 3: MimeType, 4: MimeType, 5: MimeType, 6: MimeType, 7: MimeType, 8: MimeType, 9: MimeType, 10: MimeType, 11: MimeType, 12: MimeType, 13: MimeType, 14: MimeType, 15: MimeType, 16: MimeType, 17: MimeType, 18: MimeType, 19: MimeType, 20: MimeType, 21: MimeType, 22: MimeType, 23: MimeType, 24: MimeType, 25: MimeType, 26: MimeType, 27: MimeType, 28: MimeType, 29: MimeType, 30: MimeType, 31: MimeType, 32: MimeType, application/msexcel: MimeType, application/mspowerpoint: MimeType, application/msword: MimeType, application/msword-template: MimeType, application/pdf: MimeType, ...}
console.log(navigator.onLine);        // For Example. Output: true
console.log(navigator.serviceWorker); // For Example. Output: ServiceWorkerContainer {controller: null, ready: Promise, oncontrollerchange: null, onmessage: null, onmessageerror: null}
console.log(navigator.storage);       // For Example. Output: StorageManager {}
console.log(navigator.usb);           // For Example. Output: USB {onconnect: null, ondiconnect: null}
console.log(navigator.userAgent);     // For Example. Output: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36
console.log("<.Objeto URL (navigator)>");