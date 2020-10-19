const btn = document.querySelector('.j-btn-request');

btn.addEventListener('click', () => {
    const heightScreen1 = window.screen.height
    const widthScreen1 = window.screen.width

    const widthScreen2 = document.documentElement.clientWidth
    const heightScreen2 = document.documentElement.clientHeight

    const widthScreen3 = window.innerWidth
    const heightScreen3 = window.innerHeight

    alert(`Твой размер экрана: ${widthScreen1} x ${heightScreen1}\nТвой размер экрана 2: ${widthScreen2} x ${heightScreen2}\nТвой размер экрана 3: ${widthScreen3} x ${heightScreen3}`)
});