"use strict";

export function Book(ROOT, data) {
    let book = document.createElement("div");
    book.classList.add("book");

    data.authors.forEach(author => {
        let linkAuthor = document.createElement("a");
        linkAuthor.id = author.id;
        linkAuthor.onclick = e => {
            e.preventDefault();

            let myEvent = new CustomEvent("navigate", {"detail": {"type": "author", "id": author.id}});
            document.dispatchEvent(myEvent);
        } 

        let authorName = document.createElement("p");
        authorName.innerHTML = author.name;
        authorName.classList.add("book__authorName");

        linkAuthor.append(authorName);
        book.append(linkAuthor);
    })

    let title = document.createElement("p");
    title.innerHTML = data.title;
    title.classList.add("book__title");

    let img = document.createElement("img");
    img.src = ROOT + data.url;
    img.classList.add("book__img");

    let description = document.createElement("div");
    description.innerHTML = data.description;
    description.classList.add("book__description");

    book.append(title);
    book.append(img);
    book.append(description);

    return book;
}