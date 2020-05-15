"use strict";

export function Author(ROOT, data) {
    let author = document.createElement("div");
    author.classList.add("author");

    let name = document.createElement("p");
    name.innerHTML = data.name;
    name.classList.add("author__name");

    let bornDied = document.createElement("p");
    bornDied.innerHTML = data.years.born + " - " + data.years.died;
    bornDied.classList.add("author__bornDied");

    let img = document.createElement("img");
    img.src = ROOT + data.picture.url;
    img.classList.add("author__img");

    let description = document.createElement("div");
    description.innerHTML = data.description;
    description.classList.add("author__description");

    let booksAuthor = document.createElement("div");
    booksAuthor.classList.add("author__booksAuthor");
    (data.books).forEach( item => {
        let linkBook = document.createElement("a");
        linkBook.id = item.id;
        linkBook.onclick = e => {
            e.preventDefault();

            let myEvent = new CustomEvent("navigate", {"detail": {"type": "book", "id": item.id}});
            document.dispatchEvent(myEvent);
        }

        let bookTitle = document.createElement("div");
        bookTitle.innerHTML = item.title;
        bookTitle.classList.add("author__bookTitle");

        let imgBook = document.createElement("img");
        imgBook.src = ROOT + item.thumbnail;
        imgBook.classList.add("author__imgBook");
            
        linkBook.append(imgBook);
        booksAuthor.append(linkBook);
        booksAuthor.append(bookTitle);
    })

    author.append(name);
    author.append(bornDied);
    author.append(img);
    author.append(description);
    author.append(booksAuthor);

    return author;
}