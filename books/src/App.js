import { useState } from 'react';
import BookCreate from './components/BookCreate';
import Booklist from './components/Booklist';

function App(){
    const[books, setBooks] = useState([]);

    const editBookById = (id, newTitle) =>{
        const updatedBooks = books.map((book) => {
            if (book.id === id){
                return {...book, title: newTitle};
            } else {
                return book;
            }
        });

        setBooks(updatedBooks);
    };
    //this is an even handler
    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };

        

    const createBook = (title) => {
        const updatedBooks = [
            ...books, 
            {
                id:Math.round(Math.random() * 9999),
                title,
            }
        ];
        setBooks(updatedBooks);
         
    };

    return <div className="app">
        <h1>Reading List</h1>
        <Booklist onEdit={editBookById} books={books} onDelete = {deleteBookById} />
        <BookCreate onCreate = {createBook}/>
    </div>
}

export default App;