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
const questions = [
    {
        question:'What does 10*2 equal to?',
        options: ['30', '20', '45'],
        correctAnswer: '20'
    }
    {
        question:'What does 70+30 equal to?',
        options: ['80', '15', '100'],
        correctAnswer: '100'
    }
    {
        question:'What does (400/20)+30 equal to?',
        options: ['10', '32', '50'],
        correctAnswer: '50'
    }
]
