const randomQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const quote = await response.json();
    populateInUI(quote);
}

const reload = document.querySelector('#reload');
reload.addEventListener('click', () => {
    randomQuote();
})

const populateInUI = (quote) => {
    console.log(quote);
    const quoteDiv = document.querySelector('#quote');
    const authorDiv = document.querySelector('#author');
    const footer = document.querySelector('.card-footer');
    
    quoteDiv.textContent = quote.content;
    authorDiv.textContent = " - "+quote.author;
    quote.tags.forEach(tag => {
        footer.textContent = '';
        const tagDiv = document.createElement('div');
        tagDiv.classList.add("badge");
        tagDiv.classList.add("badge-pill");
        tagDiv.classList.add("badge-warning");
        tagDiv.textContent = tag;
        footer.append(tagDiv);
    })
}

randomQuote();

