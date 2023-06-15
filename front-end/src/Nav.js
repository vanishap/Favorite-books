import React, {useContext} from 'react'
import { BookContext } from './BookContext'

const Nav = () => {
  const [books, setBooks] = useContext(BookContext);
  return (
    <div className='nav-bar'>
      <ul>
        <li><h3>Books Album</h3></li>
        <li><h3>No. of books:{books.length} </h3></li>
      </ul>
    </div>
  )
}

export default Nav
