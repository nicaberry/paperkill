"use strict";
import {BookClient} from "./client/BookClient";
import {AuthorView} from "./view/AuthorView";
import {BookView} from "./view/BookView";
import {BookListView} from "./view/BookListView";

const ROOT = "https://paperkill.nicaberry.com";
const API_BOOK_LIST = "/api/v1/book-list";
const API_BOOK = "/api/v1/book/";
const API_BOOK_AUTHOR =  "/api/v1/author/";
const content = document.querySelector("#content");

const client = new BookClient(ROOT);

class Controler {
    constructor(client, urlROOT, content) {
        this.client = client;
        this.ROOT = urlROOT;
        this.content = content;
    }

    getBookListPage() {
        this.client.getBookListPromise()
            .then(bookListModel => {
                new BookListView(this.ROOT, this).render(bookListModel, this.content);
            })
    }

    getBookPage(id) {
        this.client.getBookPromise(id)
            .then(bookModel => {
                new BookView(this.ROOT, this).render(bookModel, this.content);
            })
    }

    getAuthorPage(id) {
        this.client.getAuthorPromise(id)
            .then(authorModel => {
                new AuthorView(this.ROOT, this).render(authorModel, this.content);
            })
    }
}

let controler = new Controler(client, ROOT, content);
controler.getBookListPage();


