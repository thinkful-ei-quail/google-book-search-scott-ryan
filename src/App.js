import React from 'react';

import SearchBox from './components/SearchBox';
import BookList from './components/BookList';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  handleSetState = (newBook) => {
    console.log('setting state', newBook);
    this.setState( { books: newBook })
  }

  componentDidMount() {
    console.log('mounted');
  }

  render(){
    return (
      <div className="App">
        <h1>Google Books</h1>
        <SearchBox handleSetState={this.handleSetState}/>
        <BookList books={this.state.books}/>
      </div>
      
    )
  }
}