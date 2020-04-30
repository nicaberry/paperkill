"use strict";

import {BookModel} from "../model/BookModel";

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
        let wrap = document.createElement("div");
        wrap.classList.add("wrap");

        model.authors.forEach(author => {
            let linkAuthor = document.createElement("a");
            linkAuthor.id = author.id;
            linkAuthor.onclick = e => {
                e.preventDefault();
                this.controler.getAuthorPage(author.id);
            } 

            let authorName = document.createElement("h2");
            authorName.innerHTML = author.name;

            linkAuthor.append(authorName);
            wrap.append(linkAuthor);
        })

        let title = document.createElement("h1");
        title.innerHTML = model.title;

        let img = document.createElement("img");
        img.src = this.ROOT + model.url;

        let description = document.createElement("div");
        description.innerHTML = model.description;

        wrap.append(title);
        wrap.append(img);
        wrap.append(description);

        content.innerHTML = "";
        content.append(wrap);
    }
}