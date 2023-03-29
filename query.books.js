var queryResults = document.getElementsByClassName('query-results')[0]
const searchButton = document.getElementById('search')
const searchInput = document.querySelectorAll('.search-input')[0]

searchButton.addEventListener('click', () => {
    console.log(searchInput.value)


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b932b44309msh2d6c79484e8d040p131feajsn4708171cdf2b',
            'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
    };
    
    fetch(`https://book-finder1.p.rapidapi.com/api/search?title=${searchInput.value}&book_type=Fiction&results_per_page=25&page=1`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
    
            for(let i = 0; i < response.results.length ; i++){
    
    
                
                let queryContainer = document.createElement('div')
                queryContainer.classList.add('queryContainer')
    
                //Creating a book cover image container and content from API response
                let bookCoverContainer = document.createElement('div')
                bookCoverContainer.classList.add('bookCoverContainer')
                bookCoverContainer.innerHTML = `<img src=${response.results[i].published_works[0].cover_art_url} alt="Book Cover">`
                queryContainer.append(bookCoverContainer)
    
                //Displaying the title of the book from API response
                let bookTitleContainer = document.createElement('div')
                bookTitleContainer.classList.add('bookTitleContainer')
                bookTitleContainer.innerHTML = `<p>${response.results[i].title}</p>`
                queryContainer.append(bookTitleContainer)
    
                //Display book type
                let bookTypeContainer = document.createElement('div')
                bookTypeContainer.classList.add('bookTypeContainer')
                bookTypeContainer.innerHTML = `<p>${response.results[i].categories[0]}</p>`
                queryContainer.append(bookTypeContainer)
    
                //Displaying author and year of publication
                let authorAndYearContainer = document.createElement('div')
                authorAndYearContainer.classList.add('authorAndYearContainer')
                authorAndYearContainer.innerHTML = `<div class="author-and-year">
                                                        <p>${response.results[i].authors[0]}</p>
                                                        <p>${response.results[i].copyright}</p>
                                                    </div>`
                queryContainer.append(authorAndYearContainer)
    
                queryResults.append(queryContainer)

    
            }
    
        })
        .catch(err => console.error(err));
    


})