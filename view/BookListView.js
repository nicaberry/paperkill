"use strict";

import {BookListModel} from "../model/BookListModel";

export class BookListView {
    constructor(urlROOT, controler) {
        this.ROOT = urlROOT;
        this.controler = controler;
    }
    /**
     * 
     * @param {BookListModel} model 
     */
    render(model, content) {
        let elementHTML = document.createElement("div");
        model.items.forEach(item => {
            let wrap = document.createElement("div");
            wrap.classList.add("wrap");

            let author = document.createElement("h2");
            author.innerHTML = item.authorLine;

            let title = document.createElement("h1");
            title.innerHTML = item.title;
            
            let img = document.createElement("img");
            img.src = this.ROOT + item.thumbnail;

            let description = document.createElement("div");
            description.innerHTML = item.description;

            let linkBook = document.createElement("a");
            linkBook.id = item.id;
            linkBook.onclick = e => {
                e.preventDefault();
                this.controler.getBookPage(item.id);
            }

            linkBook.append(img);
            wrap.append(author);
            wrap.append(title);
            wrap.append(linkBook);
            wrap.append(description);

            elementHTML.append(wrap);
        })
        content.append(elementHTML);
    }
}