"use strict";

export class Router {
    constructor(controler) {
        this.controler = controler;
        this.statePage = null;
        this.stateID = null;
    }
    init() {
        this.statePage = "main";
        this.stateID = "";
        this.chekNavigate();
    }

    chekNavigate() {
        let self = this;

        window.onpopstate = event => {
            if (event.state === null) {
                self.setStateAndIdOfHash();
                self.controler.loadPage(self.statePage, self.stateID);
            } else {
                self.controler.loadPage(event.state.page, event.state.id);
            }
        };
      
        window.onload = event => {
            self.setStateAndIdOfHash();
            self.controler.loadPage(self.statePage, self.stateID);
        };

        document.addEventListener("navigate", event => {
            this.statePage = event.detail.type;
            this.stateID = event.detail.id;
            this.controler.loadPage(this.statePage, this.stateID);
            this.setHistoryState(this.statePage, this.stateID);
        });
    } 

    setHistoryState(name, id) {
        history.pushState({"page": name, "id": id}, "", "#" + name + "/" + id);
    }

    setStateAndIdOfHash() {
        let hash = decodeURIComponent(window.location.hash.substr(1));
        let arrHash = hash.split("/");
        this.statePage = arrHash[0];
        this.stateID = arrHash[1];
    }
}


