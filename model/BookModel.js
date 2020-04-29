"use strit";

export class BookModel {
    constructor(json) {
        this.id = json.id;
        this.title = json.title;
        this.url = json.cover.url;
        this.authorLine = json.authorLine;
        this.authors = json.authors.map(author => new BookAuthor(author));
        this.description = json.description;
    }
}

class BookAuthor {
    constructor(author) {
        this.id = author.id;
        this.name = author.name;
    }
}