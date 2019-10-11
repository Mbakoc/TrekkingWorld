export class Blog {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    author: string;

    constructor (id: string, title: string, content: string, imageUrl: string, author: string){

        this.id = id;
        this.title = title;
        this.content = content;
        this.imageUrl = imageUrl;
        this.author = author;
    }
    
}