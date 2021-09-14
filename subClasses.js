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

// Magazine Subclass

class Magazine extends Book() {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// Instantiate Magazine

const mag1 = new Magazine('Mag one', 'You', '6969', 'jully')

console.log(mag1);