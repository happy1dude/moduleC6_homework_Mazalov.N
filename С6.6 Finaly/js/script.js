const btnRequest = document.querySelector('.js-btn-request');
const btnLocation = document.querySelector('.js-btn-location');
const output = document.getElementById("output");

// Эхо-чат
const wsUri = "wss://echo.websocket.org/";

function writeToScreen(message) {
  let pre = document.createElement("div");
  pre.classList.add('from-me');
  pre.innerHTML = message;
  output.appendChild(pre);
}

function writeToScreenFromThem(message) {
    let pre = document.createElement("div");
    pre.classList.add('from-them');
    pre.innerHTML = message;
    output.appendChild(pre);
  }

let websocket;
websocket = new WebSocket(wsUri);
websocket.onopen = function(evt) {
  console.log("CONNECTED");
};
websocket.onmessage = function(evt) {
    writeToScreenFromThem(`<p class="from-them-txt">${evt.data}</p>`);
};
websocket.onerror = function(evt) {
  writeToScreen(`<p class="from-them-txt">${evt.data}</p>`);
};


// Функция, выводящая текст об ошибке
const error = () => {
    function errorMess(message) {
        let pre = document.createElement("div");
        pre.classList.add('from-me');
        pre.innerHTML = message;
        output.appendChild(pre);
      }
    const errTxt = 'Невозможно получить ваше местоположение!'
    
    return errorMess(errTxt);
}

// Функция, срабатывающая при успешном получении геолокации
const success = (position) => {

    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    function geoLink(message) {
        let pre = document.createElement("div");
        pre.classList.add('from-me');
        pre.innerHTML = message;
        output.appendChild(pre);
      }
    let textValue = `<a class="map-link" target="_blank" href = 'https://www.openstreetmap.org/#map=18/${latitude}/${longitude}'>Твоя гео-позиция</a>`
    
    return geoLink(textValue);
}


btnRequest.addEventListener('click', () => {
    const inpt = document.querySelector('.js-inpt').value;
    writeToScreen(`<p class="from-me-txt">${inpt}</p>`);
    websocket.send(inpt);    
})

btnLocation.addEventListener('click', () =>{

    if (!navigator.geolocation) {
        status.textContent = 'Geolocation не поддерживается вашим браузером';
  } else {
        status.textContent = 'Определение местоположения…';
        navigator.geolocation.getCurrentPosition(success, error);
  }
})