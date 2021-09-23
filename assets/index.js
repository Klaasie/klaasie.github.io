function darkModeToggle() {
    if (localStorage.theme === 'dark') {
        document.querySelector('html').classList.remove('dark')
        localStorage.theme = 'light'
    } else {
        document.querySelector('html').classList.add('dark')
        localStorage.theme = 'dark'
    }
}

document.getElementById('darkModeToggle').addEventListener('click', darkModeToggle);