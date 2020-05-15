"use strict";

import {BookListModel} from "../model/BookListModel";
import {Card} from "../component/card/Card";

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
            elementHTML.append(Card(this.ROOT, item));
        })
        
        content.innerHTML = "";
        content.append(elementHTML);
    }

    renderMain(main) {
        let linkMain = document.createElement("button");
        linkMain.innerHTML = "Главная страница";
        linkMain.onclick = e => {
            e.preventDefault();
            let myEvent = new CustomEvent("navigate", {"detail": {"type": "main", "id": ""}});
            document.dispatchEvent(myEvent);
        }
        main.innerHTML = "";
        main.append(linkMain);
    }
}