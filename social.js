"use strict"

const toggle = document.getElementById(`cb2`)
let isDarkMode = false

toggle.onclick = () => {
    if (document.body.classList.contains(`dark_theme`)) {
        document.body.classList.remove(`dark_theme`)
      } else {
        document.body.classList.add(`dark_theme`)
    }
}