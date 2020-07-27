import React from 'react';
import Book from './Book';

export default class BookList extends React.Component {
    render() {
        return(
           <div>
               <ul>
                  {this.props.books.map((book, index) => <Book key={index} book={book} />)}
               </ul>
           </div>
        )
    }
}