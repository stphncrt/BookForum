import { library } from '../data.js';
import { createBookTypes, createTypeContainer } from '../view/bookTypeView.js';
import { createBookCard } from '../view/bookCardView.js';

const types = ['sci-fyi', 'roman', 'history', 'entertainment', 'sociology'];

export const initMainPage = (userInterface) => {
    const pageContainer = document.createElement('div');
    pageContainer.className = 'page-container';
    userInterface.appendChild(pageContainer);
    const typesContainer = createTypeContainer();
    types.map(type => {
        const typeElement = createBookTypes(type);
        typesContainer.appendChild(typeElement)
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