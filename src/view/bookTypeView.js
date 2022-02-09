import { TYPE_CONTAINER } from '../constant.js'

export const createTypeContainer = () => {
    const typeContainerElement = document.createElement('div');
    typeContainerElement.setAttribute('class', TYPE_CONTAINER)
    return typeContainerElement;
};

export const createBookTypes = (type) => {
    const typeElement = document.createElement('h4');
    // typeElement.setAttribute('class', TYPE_CLASS);
    typeElement.innerHTML = type;
    typeElement.className = 'book-type';
    return typeElement;
}