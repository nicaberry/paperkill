"use strict";

export class BookListModel {
    constructor(json) {
        this.items = json.items.map(item => new Item(item));
    }
}

class Item {
    constructor(item) {
        this.id = item.id;
        this.title = item.title;
        this.url = item.cover.url;
        this.thumbnail = item.cover.thumbnail;
        this.authorLine = item.authorLine;
        this.description = item.description;
    }
}