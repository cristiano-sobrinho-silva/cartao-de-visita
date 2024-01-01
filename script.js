function toggleMode() {

    const html = document.documentElement
    
    html.classList.toggle('light')
    
    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light-2.png')
        img.setAttribute('alt', 'uma foto com óculos')
    } else {
        img.setAttribute('src', './assets/avatar-2.png')
        img.setAttribute('alt', 'Uma foto sem óculos')
    }

}