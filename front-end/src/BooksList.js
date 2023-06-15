import React, {useContext} from 'react';
import Book from './Book';
import { BookContext } from './BookContext';

const BooksList = () => {
    const [books,setBooks] = useContext(BookContext);
  return (
    <div>
      <h1>List of books: </h1>
      <h2>{books.map(book=>{
        return <>
            <Book book= {book} key={book._id}/>
        </>
      })}</h2>       
    </div>
  )
}

export default BooksList
