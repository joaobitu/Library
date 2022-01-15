let myLibrary = [];

const addBook = document.querySelector('.add-book');
const popUp = document.querySelector('#pop-up');
const closeButton = document.querySelector('#close-button');
const includeButton = document.querySelector('#add-book-button');
const container = document.querySelector('.container');

const modLib = () => {
    container.innerHTML = '';
    container.className = 'container';

    for (let i = 0; i < myLibrary.length; i++) {
        if (!myLibrary[i]) continue;

        const mainDiv = document.createElement('div');
        const secondaryDiv = document.createElement('div');
        const closeButton = document.createElement('button')
        const labelZ = document.createElement('label');
        const read = document.createElement('input');
        mainDiv.id = i;
        closeButton.id = i;
        labelZ.textContent = "Read"
        read.type = "checkbox";
        closeButton.textContent = "Delete";
        closeButton.style.cssText = "justify-self: center; align-self: center; text-align: center;"
        mainDiv.style.border = "2px solid black";

        const titleText = document.createElement('p');
        const authorText = document.createElement('p');
        const yearText = document.createElement('p');

        titleText.textContent = "Title: " + myLibrary[i].title;
        authorText.textContent = "Author: " + myLibrary[i].author;
        yearText.textContent = "Year: " + myLibrary[i].year;

        container.appendChild(mainDiv);
        mainDiv.appendChild(titleText);
        mainDiv.appendChild(authorText);
        mainDiv.appendChild(yearText);
        mainDiv.appendChild(secondaryDiv);
        secondaryDiv.appendChild(labelZ);
        secondaryDiv.appendChild(read);
        
        mainDiv.appendChild(closeButton);

        read.addEventListener('click', ()=>{
           
            if (myLibrary[i].read == false){
            myLibrary[i].read = true; 
            
        }   else {
            myLibrary[i].read = false;
        }            
        });
        closeButton.addEventListener('click', (e) =>{
            myLibrary[i] = null;
            mainDiv.remove()
        })
    }
}

function Book(title, author, year, index) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.index = index;
    this.read = false;
}


function addToLibrary() {
   
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const year = document.querySelector('#year').value;

    
    let book = new Book(title, author, year, myLibrary.length);
    myLibrary.push(book);
 


    
    
    modLib()
}


addBook.addEventListener('click', () => {
    popUp.style.display = "block";
}); 

closeButton.addEventListener('click', () => {
    popUp.style.display = "none";
})

includeButton.addEventListener('click', () => {
   addToLibrary();
});