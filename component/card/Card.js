"use strict";

export function Card(ROOT, data) {
    let card = document.createElement("div");
    card.classList.add("card");

    let author = document.createElement("p");
    author.innerHTML = data.authorLine;
    author.classList.add("card__author");

    let title = document.createElement("p");
    title.innerHTML = data.title;
    title.classList.add("card__title");

    let img = document.createElement("img");
    img.src = ROOT + data.thumbnail;
    img.classList.add("card__img");

    let description = document.createElement("div");
    description.innerHTML = data.description;
    description.classList.add("card__description");

    let linkBook = document.createElement("a");
    linkBook.id = data.id;
    linkBook.onclick = e => {
        e.preventDefault();

        let myEvent = new CustomEvent("navigate", { "detail": { "type": "book", "id": data.id } });
        document.dispatchEvent(myEvent);
    }

    linkBook.append(img);
    card.append(author);
    card.append(title);
    card.append(linkBook);
    card.append(description);

    return card;

}