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

const book3 = new Book('good book', 'calvin haris', 'never'); 
console.log(book3)
book3.getSummury();

//Revise / change Year

Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

console.log(book3);
book3.revise('200000');
console.log(book3)