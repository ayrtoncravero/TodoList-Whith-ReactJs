class Book{
    constructor(title, author, wasRead){
        this.title = title;
        this.author = author;
        this.wasRead = wasRead;
    }
    getTitle = () => this.title;
    getAuthor = () => this.author;
    getWasRead = () => this.wasRead;
}
export default Book;