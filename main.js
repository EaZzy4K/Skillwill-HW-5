// #1
const button = document.querySelector('#mybtn')
const text = document.querySelector('#mytext')

button.addEventListener("click", () => {
    text.style.display = 'none'
})

// #2
const divEl = document.createElement('div')
divEl.setAttribute('id', 'Card')

const h2 = document.createElement('h2')
const h2Text = document.createTextNode('Gandalf')

const aTag = document.createElement('a')
aTag.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
// aTag.setAttribute('href', '#')
const aText = document.createTextNode('Go to profile')

h2.append(h2Text)
aTag.append(aText)
divEl.append(h2, aTag)
document.body.append(divEl)

// #3
const quest1 = document.create