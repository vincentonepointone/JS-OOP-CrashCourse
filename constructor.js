//Constructor ES5 

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummury = () => {
        return `The name of the book is ${this.title}
        and it was writen by ${this.year}
        `
    }
}

//Instantiate an Object 
const bookWithcontructor = new Book('Angular book', 'Hennry Ford', '2020');  //Every time you instatiate an object the funtion runs

console.log(bookWithcontructor.year)
console.log(bookWithcontructor.getSummury())