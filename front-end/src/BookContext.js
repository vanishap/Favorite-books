import React, {useState, useEffect, createContext} from 'react'

export const BookContext = createContext();

export const BookProvider= (props)=>{
    const [books, setBooks] = useState([]);
 useEffect(()=>{
    fetch('http://localhost:3001/get-all-books')
    .then(res=>res.json())
    .then(dbbooks=> setBooks(dbbooks))
 },[])

    return (
        <BookContext.Provider value={[books, setBooks]}>
            {props.children}
        </BookContext.Provider>
    )
}
