const toggleSidebar = () => document.body.classList.toggle("open");

const root = document.documentElement;
const toggle = document.querySelector(".c-toggle");

toggle.addEventListener("click", function () {
  if (toggle.classList.contains("active")) {
    toggle.classList.remove("active");
    toggle.querySelector(".c-toggle__icon").innerHTML =
      '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
    toggle.querySelector(".c-toggle__wordmark").innerHTML = "Aydınlık";
    root.style.setProperty("--icons", `invert(100)`);
    root.style.setProperty("--role", `var(--role-white)`);
    root.style.setProperty("--font-color", `var(--font-white)`);
    root.style.setProperty("--sidebar", `var(--sidebar-white)`);
    root.style.setProperty("--background", `var(--background-white)`);


  } else {
    toggle.classList.add("active");
    toggle.querySelector(".c-toggle__icon").innerHTML =
      '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
    toggle.querySelector(".c-toggle__wordmark").innerHTML = "Karanlık";
    root.style.setProperty("--icons", `invert(0)`);
    root.style.setProperty("--role", `var(--role-dark)`);
    root.style.setProperty("--font-color", `var(--font-dark)`);
    root.style.setProperty("--sidebar", `var(--sidebar-dark)`);
    root.style.setProperty("--background", `var(--background-dark)`);
  }
});