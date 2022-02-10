export const createBookCard = (title, author, image) => {
    const cardContainer = document.createElement('div');
    cardContainer.innerHTML = String.raw `
  <h3>${title}</h3>
  <img class='book-image' src="${image}"/>
  <h4>${author}</h4>
`
    return cardContainer;
}