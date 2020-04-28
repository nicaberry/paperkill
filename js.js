"use strict";
const ROOT = "https://paperkill.nicaberry.com";
const API_BOOK_LIST = ROOT + "/api/v1/book-list";
const API_BOOK = ROOT + "/api/v1/book/";
const API_BOOK_AUTHOR = ROOT + "/api/v1/author/";
const bookList = document.querySelector("#bookList");

let promise = fetch(API_BOOK_LIST)
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(json => {
        json.items.forEach(item => {
            let linkBook = document.createElement("a");
            linkBook.href = API_BOOK + item.id;
            linkBook.onclick = e => {
                e.preventDefault();
                history.pushState({}, item.title, item.id);
                let promise = fetch(API_BOOK + item.id)
                    .then(response => response.json())
                    .then(json => {
                        console.log(json)
                        let linkAuthor = document.createElement("a");
                        linkAuthor.href = API_BOOK_AUTHOR + json.authors[0].id;
                        linkAuthor.onclick = e => {
                            e.preventDefault();
                            let promise = fetch(API_BOOK_AUTHOR + json.authors[0].id)
                                .then(response => response.json())
                                .then(json => {
                                    let wrap = document.createElement("div");
                                    wrap.classList.add("wrap");
        
                                    let author = document.createElement("h1");
                                    let bornDied = document.createElement("h3");
                                    let img = document.createElement("img");
                                    let description = document.createElement("div");
                                    let booksWrap = document.createElement("div");
        
                                    author.innerHTML = json.name;
                                    console.log(json);
                                    bornDied.innerHTML = json.years.born + " - " + json.years.died;
                                    img.src = ROOT + json.picture.url;
                                    description.innerHTML = json.description;
                                    (json.books).forEach( item => {
                                        let bookTitle = document.createElement("div");
                                        let img = document.createElement("img");
                                        
                                        bookTitle.innerHTML = item.title;
                                        img.src = ROOT + item.thumbnail;

                                        booksWrap.append(img);
                                        booksWrap.append(bookTitle);
                                    })
        
                                    wrap.append(author);
                                    wrap.append(bornDied);
                                    wrap.append(img);
                                    wrap.append(description);
                                    wrap.append(booksWrap);
        
                                    bookList.innerHTML = "";
                                    bookList.append(wrap);
                                })
                        }

                        let wrap = document.createElement("div");
                        wrap.classList.add("wrap");

                        let author = document.createElement("h2");
                        let title = document.createElement("h1");
                        let img = document.createElement("img");
                        let description = document.createElement("div");

                        author.innerHTML = json.authors[0].name;
                        title.innerHTML = json.title;
                        img.src = ROOT + json.cover.url;
                        description.innerHTML = json.description;

                        linkAuthor.append(author);

                        wrap.append(linkAuthor);
                        wrap.append(title);
                        wrap.append(img);
                        wrap.append(description);

                        bookList.innerHTML = "";
                        bookList.append(wrap);
                    })
            }

            let wrap = document.createElement("div");
            wrap.classList.add("wrap");

            let author = document.createElement("h2");
            let title = document.createElement("h1");
            let img = document.createElement("img");
            let description = document.createElement("div");

            author.innerHTML = item.authorLine;
            title.innerHTML = item.title;
            img.src = ROOT + item.cover.thumbnail;
            description.innerHTML = item.description;

            linkBook.append(img);

            wrap.append(author);
            wrap.append(title);
            wrap.append(linkBook);
            wrap.append(description);

            bookList.append(wrap);
        })
    });



