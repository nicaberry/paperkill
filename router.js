"use strict";

export class Router {
    constructor(controler) {
        this.controler = controler;
    }
    init() {
        this.controler.loadPage("main");
        this.chekNavigate();
    }

    chekNavigate() {
        let self = this;
        
        window.onload = event => {
            self.controler.loadPage(history.state.page, history.state.id);
        };

        window.onpopstate = event => {
            self.controler.loadPage(event.state.page, event.state.id);
        };
      
        document.addEventListener("navigate", event => {
    
            if (event.detail.type === "main") {
                this.controler.loadPage("main");
                history.pushState({"page": "main"}, "", "main");
            }
            if (event.detail.type === "book") {
                this.controler.loadPage("book", event.detail.id);
                history.pushState({"page": "book", "id": event.detail.id}, "", "book");
            }
            if (event.detail.type === "author") {
                this.controler.loadPage("author", event.detail.id);
                history.pushState({"page": "author", "id": event.detail.id}, "", "author");
            }
        })
    }
}


