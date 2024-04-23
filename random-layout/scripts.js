// Random Layout
console.log('Welcome to my Random Layout');

let elements = document.querySelectorAll('div');

setInterval(function() {
  for (let element of elements) {
    element.classList.remove('special');
    let randomNumber = Math.floor(Math.random() * 2);
    element.innerHTML = randomNumber;
    if (randomNumber > 0) {
      element.classList.add('special');
    }
  }
}, 500);


















