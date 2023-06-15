import React from 'react'


const Book = ({book}) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <h4>{book.author}</h4>
      <h4>{book.id}</h4>
    </div>
  )
}

export default Book
