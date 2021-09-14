class Book {
    constructor(title, author, year) {
        this.title = title;
        this.year = year;
        this.author = author;
    }

    getSummary() {
        return `The name of the book is ${this.title}
        and it was writen by ${this.year}
        `
    }
}

// Instantiate Object

const book1 = new Book('Book one', 'John doe', '1010');

console.log(book1)

