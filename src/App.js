import React from 'react';
import BookTable from './components/BookTable';
import UserImput from './components/UserInput';
import MainHeader from './components/MainHeader';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      booksLibrary: [],
    };
  }

  addNewBookToLibrary = (newBook) => {
    const { booksLibrary } = this.state;
    const newBooksLibrary = [ ...booksLibrary ];
    newBooksLibrary.push(newBook);
    this.setState({ booksLibrary: newBooksLibrary });
  };

  render(){
    return (
      <div className="App">
        <div className="container">
          <MainHeader />
          <div className="row">
            <UserImput onAddNewBook={this.addNewBookToLibrary} />
            <BookTable booksLibrary={this.state.booksLibrary} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
