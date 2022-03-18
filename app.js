// ES5 Version

// Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI(){}

UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X </a></td>`;
    list.appendChild(row);

    
}
//Show Alert
UI.prototype.showAlert = function(message, className){
    // Create Div
    const div = document.createElement('div');
    // Add Classes
    div.className = `alert ${className}`;
    // Add test
    div.appendChild(document.createTextNode(message));
    div.style.fontSize = '3rem';
    div.style.textAlign = 'center';
    // Get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');

    container.insertBefore(div, form);

    // Timeout After 3 Seconds
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 2500);

}
// Clear Fields

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}


// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
         isbn = document.getElementById('isbn').value

         // Instantiating a book
    const book = new Book(title, author, isbn);

    //Instantiate UI
    const ui = new UI();
    //Validate
    if(title === '' || author === '' || isbn ===''){
        // Error Alert
        ui.showAlert('Please fill in all fields', 'error');
    } else{
        // Add Book to list
    ui.addBookToList(book);
    // Clear fields
    ui.clearFields();
    }

    
    

    e.preventDefault();
});