"use strict";
import {BookClient} from "./client/BookClient";
import {AuthorView} from "./view/AuthorView";
import {BookView} from "./view/BookView";
import {BookListView} from "./view/BookListView";
import {Router} from "./router";

const ROOT = "https://paperkill.nicaberry.com";
const API_BOOK_LIST = "/api/v1/book-list";
const API_BOOK = "/api/v1/book/";
const API_BOOK_AUTHOR =  "/api/v1/author/";
const content = document.querySelector("#content");
const main = document.querySelector("#main");

const client = new BookClient(ROOT);

export class Controler {
    constructor(client, urlROOT, main, content) {
        this.client = client;
        this.ROOT = urlROOT;
        this.main = main;
        this.content = content;
    }
    loadPage(page, id) {
        if (page === "main") {
            this.getBookListPage();
        }

        if (page === "book") {
            this.getBookPage(id);
        }

        if (page === "author") {
            this.getAuthorPage(id);
        }
    }

    getBookListPage() {
        this.client.getBookListPromise()
            .then(bookListModel => {
                new BookListView(this.ROOT, this).render(bookListModel, this.main, this.content);
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


let controler = new Controler(client, ROOT, main, content);
let router = new Router(controler);
router.init();
