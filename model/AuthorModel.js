"use strict";

export class AuthorModel {
    constructor(json) {
        this.id = json.id;
        this.name = json.name;
        this.picture = new AuthorPicture(json.picture);
        this.years = new AuthorYears(json.years);
        this.description = json.description;
        this.books = json.books.map(book => new AuthorBooks(book));
    }
}

class AuthorPicture {
    constructor(picture) {
        this.url = picture.url;
    }
}

class AuthorYears {
    constructor(years) {
        this.born = years.born;
        this.died = years.died;
    }
}

class AuthorBooks {
    constructor(book) {
       this.id = book.id;
       this.title = book.title;
       this.thumbnail = book.thumbnail; 
    }
}