import { library } from '../data.js';
import { createBookTypes, createTypeContainer } from '../view/bookTypeView.js';
import { createBookCard } from '../view/bookCardView.js';

const types = [];
library.map(book => {
    if (!types.includes(book.type)) { types.push(book.type) }
})

export const initMainPage = (userInterface) => {
    const pageContainer = document.createElement('div');
    pageContainer.className = 'page-container';
    userInterface.appendChild(pageContainer);
    const typesContainer = createTypeContainer();
    types.map(type => {
        const typeElement = createBookTypes(type);
        typeElement.addEventListener('click', getFilterer);
        typesContainer.appendChild(typeElement);
    });
    pageContainer.appendChild(typesContainer);
    //books container creation
    const bookContainerElement = document.createElement('div');
    bookContainerElement.className = 'book-container';
    library.map(book => {
        const bookCardElement = createBookCard(book.title, book.author, book.image);
        bookContainerElement.appendChild(bookCardElement);
    })
    pageContainer.appendChild(bookContainerElement);

}
const filterBook = (books, filter) => {
    let filteredBooks = [];
    filter ? filteredBooks = books.filter(book => book.type === filter) : books;
    console.log(filteredBooks)
    return filteredBooks;

}
const getFilterer = (e) => {
    let filterer = e.target.innerHTML;
    filterBook(library, filterer);
    console.log(filterer)
}