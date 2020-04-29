"use strict";

import {AuthorModel} from "../model/AuthorModel"
import {BookModel} from "../model/BookModel"
import {BookListModel} from "../model/BookListModel"


const API_BOOK_LIST = "/api/v1/book-list";
const API_BOOK = "/api/v1/book/";
const API_BOOK_AUTHOR =  "/api/v1/author/";

export class BookClient {
    constructor(urlServer) {
        this.urlServer = urlServer;
    }

    getBookListPromise() {
        return fetch(this.urlServer + API_BOOK_LIST)
            .then(response => response.json())
            .then(json => new BookListModel(json))
    }

    getBookPromise(id) {
        return fetch(this.urlServer + API_BOOK + id)
            .then(response => response.json())
            .then(json => new BookModel(json))
    }

    getAuthorPromise(id) {
        return fetch(this.urlServer + API_BOOK_AUTHOR + id)
            .then(response => response.json())
            .then(json => new AuthorModel(json))
    }
}