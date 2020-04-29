"use strict";
import {BookClient} from "./client/BookClient"
const ROOT = "https://paperkill.nicaberry.com";
const API_BOOK_LIST = "/api/v1/book-list";
const API_BOOK = "/api/v1/book/";
const API_BOOK_AUTHOR =  "/api/v1/author/";
const bookList = document.querySelector("#bookList");

const client = new BookClient(ROOT);


let promise = client.getBookListPromise()
    .then(bookListModel => {
        bookListModel.items.forEach(item => {
            let linkBook = document.createElement("a");
            linkBook.href = ROOT + API_BOOK + item.id;
            linkBook.onclick = e => {
                e.preventDefault();
                // history.pushState({}, item.title, item.id);
                let promise = client.getBookPromise(item.id)
                    .then(bookModel => {
                        let wrap = document.createElement("div");
                        wrap.classList.add("wrap");
                        bookModel.authors.forEach(author => {
                            let linkAuthor = document.createElement("a");
                            linkAuthor.href = API_BOOK_AUTHOR + author.id; 
                            linkAuthor.onclick = e => {
                                e.preventDefault();
                                let promise = client.getAuthorPromise(author.id)
                                    .then(authorModel => {
                                        let wrap = document.createElement("div");
                                        wrap.classList.add("wrap");
            
                                        let author = document.createElement("h1");
                                        let bornDied = document.createElement("h3");
                                        let img = document.createElement("img");
                                        let description = document.createElement("div");
                                        let booksWrap = document.createElement("div");
            
                                        author.innerHTML = authorModel.name;
                                        bornDied.innerHTML = authorModel.years.born + " - " + authorModel.years.died;
                                        img.src = ROOT + authorModel.picture.url;
                                        description.innerHTML = authorModel.description;
                                        (authorModel.books).forEach( item => {
                                            let linkBook = document.createElement("a");
                                            linkBook.href = ROOT + API_BOOK + item.id;

                                            linkBook.onclick = e => {
                                                e.preventDefault();
                                                
                                            }
                                            let bookTitle = document.createElement("div");
                                            let img = document.createElement("img");
                                            
                                            bookTitle.innerHTML = item.title;
                                            img.src = ROOT + item.thumbnail;
                                            
                                            linkBook.append(img);
                                            booksWrap.append(linkBook);
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
    
                            let authorName = document.createElement("h2");
                            authorName.innerHTML = author.name;
                            linkAuthor.append(authorName);
                            wrap.append(linkAuthor);
                        })

                        let title = document.createElement("h1");
                        let img = document.createElement("img");
                        let description = document.createElement("div");

                        title.innerHTML = bookModel.title;
                        img.src = ROOT + bookModel.url;
                        description.innerHTML = bookModel.description;

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
            img.src = ROOT + item.thumbnail;
            description.innerHTML = item.description;

            linkBook.append(img);

            wrap.append(author);
            wrap.append(title);
            wrap.append(linkBook);
            wrap.append(description);

            bookList.append(wrap);
        })
    });



