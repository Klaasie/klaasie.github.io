document.getElementById("darkModeToggle").addEventListener("click",(function(){"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.querySelector("html").classList.remove("dark"),localStorage.theme="light"):(document.querySelector("html").classList.add("dark"),localStorage.theme="dark")}));