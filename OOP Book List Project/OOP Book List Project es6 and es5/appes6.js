class Book{
    constructor (title , author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }
}


class UI{
    addBookToList(book){
        const list  = document.getElementById('book-list');
        //create tr element:
            const row = document.createElement('tr');
        //then Insert cols:
            row.innerHTML = `
            <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X<a></td>
            `;
            list.appendChild(row);
        }
        //Functions:
    //show Alert:
   showAlert(message, className){
        //creating div for this Alert and adding class for it:
            const div = document.createElement('div');
            div.className = `alert ${className}`;
        //adding text to that:
            div.appendChild(document.createTextNode(message));
        //Getting parent: we want to insert div before form:
        const  container = document.querySelector('.container');
        const form = document.getElementById('book-form');
            container.insertBefore(div, form);
    
    
        //Timeout after 3 sec:
            setTimeout(function(){
                document.querySelector('.alert').remove();
            }, 3000);
            }
        //Delete Book:
            deleteBook(target){
                if(target.className === 'delete') {
                    target.parentElement.parentElement.remove();
                }
            }
        //clearFields:
      clearFields(){
            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('isbn').value = '';
    }
}


//Local Storage class:
class Store {
static getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
        books =[];
    }else{
        books = JSON.parse(localStorage.getItem('books'));
  
    }
    
    return books;
}


static displayBooks(){
    const books = Store.getBooks();
    books.forEach(function(book){
        

        const ui  = new UI;
        //add book to UI:
        ui.addBookToList(book);
        
    });
}

static addBook(book) {
    
    const books = Store.getBooks();
    
    books.push(book);
    
    localStorage.setItem('books' , JSON.stringify(books));
}
   
static removeBook(isbn){

    const books = Store.getBooks();
    books.forEach(function(book, index){
        if(book.isbn === isbn){
            books.splice(index, 1);
        }
    });
    localStorage.setItem('books' , JSON.stringify(books));
}

}
//DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

//Eventlistener for add a book:
document.getElementById('book-form').addEventListener('submit' , function(e){
    //Get values from UI :
    const title =  document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value
     
    // instantiate book:
    const book = new Book(title , author, isbn);
    
    //Instantiate UI:
    const ui = new UI();
    console.log(ui);
          // validate?
         if(title === '' || author === '' || isbn === ''){
             //show Alert!!
             ui.showAlert('please fill in all fields', 'error');
         } else{
        //adding book to list:
        ui.addBookToList(book);
        //Add to LS
        Store.addBook(book);
        //show success Alert:
            ui.showAlert('Book Added!!' , 'success');

            
        //Clear filds after adding:
            ui.clearFields();
            
         }
    
         
    
    e.preventDefault();
    });
    
    
    //Event listener for delete a book:
    
    document.getElementById('book-list').addEventListener('click' , function(e){
     // Instantiate UI
         const ui = new UI(); 
    //Delete book:
         ui.deleteBook(e.target);
         
    //Remove from LS:
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    //then show the message: 
        ui.showAlert('Book Removed!!' , 'success');
    
        e.preventDefault();
        
    });
    