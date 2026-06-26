const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', handleClick)
})

window.addEventListener('popstate', () => {
    fetchPage(window.location.pathname)
})

function handleClick(event){
    event.preventDefault()
    fetchPage(event.target.href)
}

async function fetchPage(url) {
    const pageResponse = await fetch(url)
    const pageDados = await pageResponse.text()

    replaceContent(pageDados)
    window.history.pushState(null, null, url)
}

function replaceContent(newText){
    const newHTML = document.createElement('div')
    newHTML.innerHTML = newText

    const oldContent = document.querySelector('main')
    const newContent = newHTML.querySelector('main')

    oldContent.innerHTML = newContent.innerHTML
    document.title = newHTML.querySelector('title').innerText
}