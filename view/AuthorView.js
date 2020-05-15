"use strict";

import {AuthorModel} from "../model/AuthorModel";
import {Author} from "../component/author/Author";
 
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
        content.innerHTML = "";
        content.append(Author(this.ROOT, model));
    }
}

