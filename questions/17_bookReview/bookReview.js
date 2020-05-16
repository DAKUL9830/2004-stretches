class BookReview {
constructor(title,author){
    this.title=title;
    this.author=author
    this.notes=[];
    this.rating=0
}
addNotes(page,note){
    if(this.notes[page]){
        this.notes[page]=this.notes[page]+' '+note;
    }else{
        this.notes[page]=note;
    }
   
    }


addRating(num){
    if(num<0||num>5){
        throw new Error
    }else{
        this.rating=num;
    }



}


}
module.exports = { BookReview };
