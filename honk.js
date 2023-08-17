const textthing = document.querySelector(".chat-wysiwyg-input__editor div span span span")
const theBTN = document.querySelector(".ScCoreButton-sc-ocjdkq-0.ScCoreButtonPrimary-sc-ocjdkq-1.ibtYyW.wgheP")

function simulateKeyPress(key) {
    const event = new KeyboardEvent('keydown', { key });
    textthing.dispatchEvent(event);
  }

const printHonk = () => {
    const random = Math.floor(Math.random() * 1000)
    const randomarr = random.toString().split('')
    textthing.focus()
    randomarr.forEach(key => {
        simulateKeyPress(key)
    })
}

printHonk()