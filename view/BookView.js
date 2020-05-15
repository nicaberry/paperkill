"use strict";

import {BookModel} from "../model/BookModel";
import {Book} from "../component/book/Book";

export class BookView {
    constructor(urlROOT, controler) {
        this.ROOT = urlROOT;
        this.controler = controler;
    }
    /**
     * 
     * @param {BookModel} model 
     */
    render(model, content) {
        content.innerHTML = "";
        content.append(Book(this.ROOT, model));
    }
}