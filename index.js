var abrirCookies = document.getElementById("popupCookies"),
    abrirSesion = document.getElementById("popupSesion"),
    overlay = document.getElementById("overlay"),
    cookies = document.getElementById("popup1"),
    overlay2 = document.getElementById("overlay2"),
    cerrarCookies = document.getElementById("cerrarPopupCookies"),
    cerrarSesion = document.getElementById("cerrarPopupSesion");

abrirCookies.addEventListener("click", () => {
    overlay.classList.add("active");
});

cerrarCookies.addEventListener("click", () => {
    overlay.classList.remove("active");
});

abrirSesion.addEventListener("click", () => {
    overlay2.classList.add("active");
});

cerrarSesion.addEventListener("click", () => {
    overlay2.classList.remove("active");
});
