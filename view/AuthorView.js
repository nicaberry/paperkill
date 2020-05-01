"use strict";

import {AuthorModel} from "../model/AuthorModel";
 
export class AuthorView {
    constructor(urlROOT, controler) {
        this.ROOT = urlROOT;
        this.controler = controler;
    }
 /**
  * @param {AuthorModel} model 
  * @returns {HTMLElement}
  */  
    render(model, content) {
        let wrap = document.createElement("div");
        wrap.classList.add("wrap");

        let author = document.createElement("h1");
        author.innerHTML = model.name;

        let bornDied = document.createElement("h3");
        bornDied.innerHTML = model.years.born + " - " + model.years.died;

        let img = document.createElement("img");
        img.src = this.ROOT + model.picture.url;

        let description = document.createElement("div");
        description.innerHTML = model.description;

        let booksWrap = document.createElement("div");
        (model.books).forEach( item => {
            let linkBook = document.createElement("a");
            linkBook.id = item.id;
            linkBook.onclick = e => {
                e.preventDefault();

                let myEvent = new CustomEvent("navigate", {"detail": {"type": "book", "id": item.id}});
                document.dispatchEvent(myEvent);
            }

            let bookTitle = document.createElement("div");
            bookTitle.innerHTML = item.title;

            let img = document.createElement("img");
            img.src = this.ROOT + item.thumbnail;
                
            linkBook.append(img);
            booksWrap.append(linkBook);
            booksWrap.append(bookTitle);
        })

        wrap.append(author);
        wrap.append(bornDied);
        wrap.append(img);
        wrap.append(description);
        wrap.append(booksWrap);

        content.innerHTML = "";
        content.append(wrap);
    }
}

