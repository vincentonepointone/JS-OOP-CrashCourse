//Constructor ES5 

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

}

//getSummury

Book.prototype.getSummury = function() {
    return `The name of the book is ${this.title}
    and it was writen by ${this.author} in ()=> ${this.year}
    `
}

function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

//Inherit Prototype

Magazine.prototype = Object.create(Book.prototype);


// Instantiate Magazine Object

const mag1 = new Magazine('Magazine one', 'dr sturges', '1010', 'feb');

//The Magazine getSummury method had the contructor name of Book this changes that constructor to Magazine
// Magazine.prototype.constructor = Magazine;


console.log(mag1);