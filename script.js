const bookInventory = {
    books: [],
    addBook: function (bookName, authorName, bookPrice, bookQty) {
        const book = {
            bookName: bookName,
            authorName: authorName,
            bookPrice: bookPrice,
            bookQty: bookQty
        }
        this.books.push(book);
        // console.log(this.books);
        this.showDisplay()


    },

    showDisplay: function () {
        const show = document.getElementById('show');
        show.innerHTML = "";
        this.books.forEach(book => {
            divElement = document.createElement('div');
            divElement.className = "table"
            divElement.innerHTML = `<table class="table mt-4">
          
          <tbody>
            <tr>
              <th>${book.bookName}</th>
              <td>${book.authorName}</td>
              <td>${book.bookPrice}</td>
              <td>${book.bookQty}</td>
            </tr>
          </tbody>
        </table>`;
            show.appendChild(divElement);
        });
    },

    updateBook: function (bookName, bookQtyUpd) {

        let bookIndex = this.books.findIndex(book => book.bookName === bookName);
        if (bookIndex !== -1) {
            this.books[bookIndex].bookQty = bookQtyUpd;
            // console.log(`Quantity of ${bookName} updated to ${bookQtyUpd}`);
            this.showDisplay()



            // let book = this.books.find(book => book.bookName === bookNameUpd);
            // if (book) {
            //     this.books.bookQty = bookQtyUpd;


            // // bookName = bookName.toLowerCase();
            // if(this.books.includes(bookNameUpd)){
            //    objIndex = this.books.findIndex(name => name.bookNameUpd === bookName);
            //    this.books[objIndex].bookQty = bookQtyUpd;
            // console.log(objIndex)

        }
        else {
            alert("Book not found");
        }

    }

}

document.getElementById('add_books').addEventListener('click', function (e) {
    e.preventDefault();
    const bookName = document.getElementById('inputTitle').value;
    const authorName = document.getElementById('inputAuthor').value;
    const bookPrice = document.getElementById('inputPrice').value;
    const bookQty = document.getElementById('inputQty').value;
    bookInventory.addBook(bookName, authorName, bookPrice, bookQty);
});

document.getElementById('updQty').addEventListener('click', function (e) {
    e.preventDefault();
    const bookName = document.getElementById('inputTitleUpd').value;
    const bookQtyUpd = document.getElementById('inputQtyUpd').value;
    bookInventory.updateBook(bookName, bookQtyUpd);

});

