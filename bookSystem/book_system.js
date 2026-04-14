const booksDiv = document.getElementById('books')
const booksystemForm = document.getElementById('booksystemForm')




function bookSystem() {
    let books = []

    function editBook(index) {
        console.log('editing...')
        document.getElementById("bookName").value= books[index].name
        document.getElementById('authorName').value = books[index].author
        document.getElementById('bookDescription').value = books[index].description
        document.getElementById('pagesNumber').value = books[index].nopages

        books.splice(index, 1)



    }

    function deleteBook(index) {
        console.log('deleting...')

        books.splice(index, 1)
        let bookItemHtml = books.map(({ name, author, description, nopages }, index) =>
            `<tr><td>${name}</td><td>${author}</td><td>${description}</td><td>${nopages}</td><td><button onclick="editBook(${index})">Edit</button></td><td><button onclick="deleteBook(${index})">Delete</button></td></tr>`
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


    function addBook(book) {
        //push to books list
        books.push(book)
        //construct the book line in table
        let bookItemHtml = books.map(({ name, author, description, nopages }, index) =>
            `<tr><td>${name}</td><td>${author}</td><td>${description}</td><td>${nopages}</td><td><button onclick="editBook(${index})">Edit</button></td><td><button onclick="deleteBook(${index})">Delete</button></td></tr>`
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




    }




    return {
        addBook, editBook, deleteBook
    }
}

const { addBook, editBook, deleteBook } = bookSystem()

booksystemForm.addEventListener('submit', (e) => {
    e.preventDefault()
    formData = Object.fromEntries(new FormData(booksystemForm))
    console.log(formData)
    addBook(formData)

})