// vite-shim.js
if (!globalThis.crypto) {
  globalThis.crypto = require('crypto').webcrypto;
}
