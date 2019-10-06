const loc = typeof document != "undefined" ? document.location : null;
export const base = loc == null ? "/" : loc.protocol + "//" + loc.hostname + ":3000/";