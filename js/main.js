const body = document.body;
const button = document.getElementById("theme");
const icon = button.querySelector("i");
const metaTheme = document.querySelector('meta[name="theme-color"]');

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

const savedTheme = localStorage.getItem("theme");

const setTheme = (theme) => {

    const light = theme === "light";

    body.classList.toggle("light", light);

    icon.className = light
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon";

    if (metaTheme) {
        metaTheme.setAttribute(
            "content",
            light ? "#ffffff" : "#0f172a"
        );
    }

    localStorage.setItem("theme", theme);

};

if (savedTheme) {

    setTheme(savedTheme);

} else {

    setTheme(systemTheme.matches ? "dark" : "light");

}

button.addEventListener("click", () => {

    const nextTheme = body.classList.contains("light")
        ? "dark"
        : "light";

    setTheme(nextTheme);

});

systemTheme.addEventListener("change", e => {

    if (!localStorage.getItem("theme")) {

        setTheme(e.matches ? "dark" : "light");

    }

});