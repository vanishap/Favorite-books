import React, {useContext, useState} from 'react'
import { BookContext } from './BookContext';

const AddBook = () => {
    const [title, setTitle] = useState();
    const [author, setAuthor]= useState();
    const [status, setStatus] = useState({});
    const [books, setBooks] = useContext(BookContext);
     
    const submitHandler = async (e)=>{
        e.preventDefault();
        const result = await fetch('http://localhost:3001/add-book', {
          method:"POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({title, author})
        });
        const s= await result.json()
        setStatus(s);
        setBooks(prevbooks => [...prevbooks, {title,author} ])
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text'
        name='title'
        onChange={(e) => setTitle(e.target.value)}/>
        <input type='text'
        name='author'
        onChange={(e) => setAuthor(e.target.value)}/>
        <button type= 'submit'>Add</button>
        <p>{status.message}</p>
      </form>
    </div>
  )
}

export default AddBook
