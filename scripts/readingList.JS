/* 
Reading List

1. create a list of books
    array of objects
    each object = a book
    each book has a title and an author, and a Boolean of whether you have read it or not
    Title = string, author = string, read = Boolean

    Books = [
        {
            TITLE = string
            AUTHOR = string
            hasRead = boolean
        } 
        {
            TITLE = string
            AUTHOR = string
            hasRead = boolean
        }]
    
        

2. Cycle through the list of books 
Keep track of what books I have read and the ones I havent
    FOR each book show the title and author i.e The Hobbit by J.R.R Tolkien
    FOR
        COUNTER
        CONDITION
        INCREASE COUNTERS VALUE

    FOR 
        COUNTER = 0
        COUNTER = BOOKS.LENGTH
        COUNTER + 1




3. Show whether I have read the book.   
    IF read = true
        then i have read the book
    IF has read = false
    else: I have not read the book

    IF hasRead = true
        'i have read the TITLE by AUTHOR
    IF hasRead = false
    'i havent read the TITLE by AUTHOR

    if(hasRead) {
        console.log(i have read the TITLE by AUTHOR)
     if(!hasRead){ 
        i havent read the TITLE by AUTHOR
    }
   
    }
*/


const books = [
    {
        title: 'The shadows of the wind',
        author: 'Carlos Ruiz Zafón',
        hasRead: true
    }

    {
        title: 'The heavenly man',
        author: 'Brother Yun',
        hasRead: true
    }
]

for (let counter = 0; counter < books.length, counter ++ ) {
    //console.log(books [counter].title, books [counter] .author);

    if (books [counter]. hasRead) {
        console.log()
    }

}



