import strings from "./strings";

function localStorageHasItem(item) {
    return Object.prototype.hasOwnProperty.call(localStorage, item);
}

export function initSettings() {
    if (localStorageHasItem("data-theme"))
        setTheme(localStorage.getItem("data-theme"));

    if (localStorageHasItem("data-language"))
        setLanguage(localStorage.getItem("data-language"));
}

export function setTheme(theme) {
    localStorage.setItem("data-theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
}

export function setLanguage(language) {
    localStorage.setItem("data-language", language);
    strings.setLanguage(language);
}
