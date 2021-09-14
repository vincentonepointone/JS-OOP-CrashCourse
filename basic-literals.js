//Most expressions in JavaScript are objects with the exeption of Primitaves like variables

//Object
//create.properies;   = This is a object property
//create.method;      = This is a object method

//Literals eg. string number undefined etc.
//const name = "123"  = This is a primitave
//console.log(typeof name) //logs string

//Althoug Literals can have properties and methods and can even be declared as an object

//const place = new String();   //Esetialy creates a literal object 
//console.log(typeof place);    //logs Object



//You have dom objects like the window object

// console.log(window);

//heas the alert object 

// window.alert("hello");

// console.log(navigator.appVersion)


//Basic Object Literal

const book1 = {
    title: 'Book one',
    author: 'John Doe',
    year: '1013',
    getSummary: function() {
        return `The name of the book is ${this.title}
        and it was writen by ${this.year}
        `
    }
}

console.log(book1.getSummary());


console.log(Object.values(book1));
console.log(Object.keys(book1));