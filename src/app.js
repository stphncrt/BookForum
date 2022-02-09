import { router } from './router.js';
console.log('loadApp worked')

const loadApp = () => {

    router('mainPage');
}

window.addEventListener('load', loadApp);