const input = document.getElementById('input')
const output = document.getElementById('output')
function capital() {
    // console.log(input.value)
    output.innerHTML = ''
    let paragraph = document.createElement('p')
    paragraph.innerHTML = input.value
    paragraph.classList.add('capital')
    output.appendChild(paragraph)

    if (input.value == '') {
        output.innerHTML = ''
        let paragraph = document.createElement('p')
        paragraph.innerHTML = 'plz enter the prompt in input field🤜👊'
        paragraph.classList.add('capital')
        output.appendChild(paragraph)
        output.style.color = 'red'
    }

}
function lower() {
    output.innerHTML = ''
    let paragraph = document.createElement('p')
    paragraph.innerHTML = input.value
    output.appendChild(paragraph)
    paragraph.classList.add('lower')
    if (input.value == '') {
        output.innerHTML = ''
        let paragraph = document.createElement('p')
        paragraph.innerHTML = 'plz enter the prompt in input field🤜👊'
        paragraph.classList.add('capital')
        output.appendChild(paragraph)
        output.style.color = 'red'
    }



}
function first() {
    output.innerHTML = ''
    let paragraph = document.createElement('p')
    paragraph.innerHTML = input.value
    paragraph.classList.add('first')
    output.appendChild(paragraph)
    if (input.value == '') {
        output.innerHTML = ''
        let paragraph = document.createElement('p')
        paragraph.innerHTML = 'plz enter the prompt in input field🤜👊'
        paragraph.classList.add('capital')
        output.appendChild(paragraph)
        output.style.color = 'red'
    }


}
function bolder() {
    output.innerHTML = ''
    let paragraph = document.createElement('p')
    paragraph.innerHTML = input.value
    output.appendChild(paragraph)
    paragraph.classList.add('bolder')
    if (input.value == '') {
        output.innerHTML = ''
        let paragraph = document.createElement('p')
        paragraph.innerHTML = 'plz enter the prompt in input field🤜👊'
        paragraph.classList.add('capital')
        output.appendChild(paragraph)
        output.style.color = 'red'
    }



}
function italic() {
    output.innerHTML = ''
    let paragraph = document.createElement('p')
    paragraph.innerHTML = input.value
    paragraph.classList.add('italic')
    output.appendChild(paragraph)

    if (input.value == '') {
        output.innerHTML = ''
        let paragraph = document.createElement('p')
        paragraph.innerHTML = 'plz enter the prompt in input field🤜👊'
        paragraph.classList.add('capital')
        output.appendChild(paragraph)
        output.style.color = 'red'
    }


}
function underline() {
    output.innerHTML = ''
    let paragraph = document.createElement('p')
    paragraph.innerHTML = input.value
    output.appendChild(paragraph)
    paragraph.classList.add('underline')
    if (input.value == '') {
        output.innerHTML = ''
        let paragraph = document.createElement('p')
        paragraph.innerHTML = 'plz enter the prompt in input field🤜👊'
        paragraph.classList.add('capital')
        output.appendChild(paragraph)
        output.style.color = 'red'
    }



}
