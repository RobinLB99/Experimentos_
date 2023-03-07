const body = document.querySelector('.content');
const checkbox = document.querySelector('#switch')
const sol = document.querySelector('#sol')
const luna = document.querySelector('#luna')

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      sol.style.display = 'none'
      luna.style.display = 'block'
      body.setAttribute("style", "background-color: #000; color: #fff; transition-duration: 1s;")

    } else {
      sol.style.display = 'block'
      luna.style.display = 'none'
      body.setAttribute("style", "background-color: #fff; color: #000; transition-duration: 1s;")
    }
  })