const booksDiv = document.getElementById('books')
const booksystemForm = document.getElementById('booksystemForm')

function bookSystem() {
    let books = []

    function addBook(book) {
        //push to books list
        books.push(book)
        //construct the book line in table
        let bookItemHtml = books.map((index,{ name, author, description, nopages }) =>
            `<tr><td>${name}</td><td>${author}</td><td>${description}</td><td>${nopages}</td><td><button onclick=${editBook(index)}>Edit</button></td><td><button ionclick=${deleteBook(index)}>Delete</button></td></tr>`
        ).join('')


        //add to div id=books

        booksDiv.innerHTML =
            `<table>
        <thead>
        <th>name</th><th>author</th><th>description</th><th>nopages</th><th></th><th></th>
        </thead>
        <tbody>${bookItemHtml}</tbody>
        </table>`

        //reset form
        booksystemForm.reset()

      function editBook(index){

      }

       function deleteBook(index){

        books.splice(index,1)
        let bookItemHtml = books.map(({ name, author, description, nopages }) =>
            `<tr><td>${name}</td><td>${author}</td><td>${description}</td><td>${nopages}</td><td><button onclick=${editBook(index)}>Edit</button></td><td><button ionclick=${deleteBook(index)}>Delete</button></td></tr>`
        ).join('')


        //add to div id=books

        booksDiv.innerHTML =
            `<table>
        <thead>
        <th>name</th><th>author</th><th>description</th><th>nopages</th><th></th><th></th>
        </thead>
        <tbody>${bookItemHtml}</tbody>
        </table>`

        
      }


    }

    return addBook
}

const addBook = bookSystem()

booksystemForm.addEventListener('submit', (e) => {
    e.preventDefault()
    formData = Object.fromEntries(new FormData(booksystemForm)) 
    console.log(formData)
    addBook(formData)

})