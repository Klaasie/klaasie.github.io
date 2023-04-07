require('fslightbox')

import { Gradient } from './gradient.js'


const gradient = new Gradient()
gradient.initGradient('#gradient-canvas')

function darkModeToggle() {
    if (localStorage.theme === 'dark') {
        gradient.initGradient('#gradient-canvas')
        document.querySelector('html').classList.remove('dark')
        localStorage.theme = 'light'
    } else {
        gradient.initGradient('#gradient-canvas')
        document.querySelector('html').classList.add('dark')
        localStorage.theme = 'dark'
    }
}

document.getElementById('darkModeToggle').addEventListener('click', darkModeToggle);
