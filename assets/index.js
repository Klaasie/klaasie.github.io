function darkModeToggle() {
    console.log('hi');

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.querySelector('html').classList.remove('dark')
        localStorage.theme = 'light'
    } else {
        document.querySelector('html').classList.add('dark')
        localStorage.theme = 'dark'
    }
}

document.getElementById('darkModeToggle').addEventListener('click', darkModeToggle);