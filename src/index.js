class Book {
    constructor(title){
    this.title = title;
    }
    getTitle(){
    return this.title;
    }
}

const book = new Book('Majalah Bobo');
document.write(book.getTitle());