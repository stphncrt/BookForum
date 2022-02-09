import { initMainPage } from './pages/mainPage.js';

export const router = (page) => {
    const userInterfaceElement = document.getElementById('user-interface');
    userInterfaceElement.innerHTML = '';
    switch (page) {
        case "mainPage":
            initMainPage(userInterfaceElement);
            break;
    }
}