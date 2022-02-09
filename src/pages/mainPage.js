import { createBookTypes, createTypeContainer } from '../view/bookTypeView.js';

const types = ['sci-fyi', 'roman', 'history', 'entertainment', 'sociology'];

export const initMainPage = (userInterface) => {
    const pageContainer = document.createElement('div');
    pageContainer.innerHTML = 'Main Pages initiated';
    userInterface.appendChild(pageContainer);
    const typesContainer = createTypeContainer();
    types.map(type => {
        const typeElement = createBookTypes(type);
        typesContainer.appendChild(typeElement)
    });
    pageContainer.appendChild(typesContainer);


}