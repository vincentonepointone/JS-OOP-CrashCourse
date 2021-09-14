//Object pf Protos

const bookProtos = {
    getSummar: function() {
        return `The name of the book is ${this.title}
        and it was writen by ${this.year}
        `
    },

    getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`
    }
}

//Crate Object 
const book1 = new Ob