//Book object constructor:
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

  

// UI object constructor:
function UI(){}


//Add book to List feature of UI:
    UI.prototype.addBookToList = function(book){
     const list  = document.getElementById('book-list');
    //create tr element:
        const row = document.createElement('tr');
    //then Insert cols:
        row.innerHTML = `
        <td> ${book.title} </td>
        <td> ${book.author} </td>
        <td> ${book.isbn} </td>
        <td><a href="#" class="delete">X<a></td>
        `;
        list.appendChild(row);
    }
    
//Functions:
    //show Alert:
        UI.prototype.showAlert = function(message, className){
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
        UI.prototype.deleteBook = function(target){
            if(target.className === 'delete') {
                target.parentElement.parentElement.remove();
            }
        }
    //clearFields:
    UI.prototype.clearFields = function(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
//Eventlistener for add a book:
document.getElementById('book-form').addEventListener('submit' , function(e){
//Get values from UI :
const title =  document.getElementById('title').value,
      author = document.getElementById('author').value,
      isbn = document.getElementById('isbn').value;
 
// instantiate book:
const book = new Book(title , author, isbn);

//Instantiate UI:
const ui = new UI();
      // validate?
     if(title === '' || author === '' || isbn === ''){
         //show Alert!!
         ui.showAlert('please fill in all fields', 'error');
     } else{
    //adding book to list:
    ui.addBookToList(book);

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
//then show the message:
    ui.showAlert('Book removed' , 'success');

    e.preventDefault();

})