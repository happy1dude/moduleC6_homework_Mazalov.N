const btn = document.querySelector('.j-btn-test');  // Кнока

function icon() {
    const oldArrow = document.querySelector('.j-old-arrow') // Стрелка без заливки
    oldArrow.remove(); // Удаляю див с ней

    const newArrow = `
    <div class="btn_icon j-old-arrow">
    
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.879-2.828a.5.5 0 1 1 .707.707L6.732 9.975H9.5a.5.5 0 1 1 0 1H5.525a.5.5 0 0 1-.5-.5V6.5a.5.5 0 1 1 1 0v2.768l4.096-4.096z"/>
        </svg>
    
    </div>
    ` // Див со стрелкой залитой 

    const jNewArr = document.querySelector('.j-new-arrow'); // Родительский див, в которм лежит oldArrow

    return jNewArr.innerHTML = newArrow ? jNewArr.innerHTML = newArrow : jNewArr.innerHTML = oldArrowIn; // Пытался реализовать простым оператором

};


btn.addEventListener('click', () => {
    icon();
});