import AddBook from '../src/AddBook';
import './App.css';
import { BookProvider } from './BookContext';
import BooksList from './BooksList';
import Nav from './Nav';

function App() {
  return (
    <>
    <BookProvider >
    <Nav />
     <div className="App">
      <BooksList />
      <AddBook />
    </div>
    </BookProvider>

    </>
   
  );
}

export default App;
