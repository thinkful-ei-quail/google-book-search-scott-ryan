import React from 'react';

import SearchInput from './SearchInput';
import FilterInputs from './FilterInputs';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
const API_KEY = 'AIzaSyAcmzhFiL7IEW6JFZeHfNg8S0kCLkEXi0U';
const TEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=flowers+&key=AIzaSyAcmzhFiL7IEW6JFZeHfNg8S0kCLkEXi0U';

export default class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
      }

      searchBook = (searchTerm) => {
          console.log(searchTerm)
          this.setState({
            q: searchTerm
          })
      }

      printTypeChange = (value) => {
        this.setState({
           printType: value 
        })
      }

      bookTypeChange = (value) => {
        this.setState({
            bookType: value 
         })
      }

      ifFiltered () {
        let printType = '';
        let bookType = '';

        if(this.state.printType !== 'all' && this.state.printType){
            printType = this.state.printType
            printType = `&printType=${printType}`
        }  

        if(this.state.bookType !== 'all' && this.state.bookType) {
            bookType = this.state.bookType;
            bookType = `&filter=${bookType}`
        }  
            
        return bookType+printType;
      }
      

      handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${BASE_URL}${this.state.q}${this.ifFiltered()}&key=${API_KEY}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            if(!data.items){
                throw new Error ('no results found');
            }
            console.log(data);
            const newBooks = data.items.map(item => {
             return {
                 title: item.volumeInfo.title,
                 author: item.volumeInfo.authors,
                 price: item.saleInfo.listPrice ? item.saleInfo.listPrice.amount : 'Not available',
                 snippet: item.searchInfo ? item.searchInfo.textSnippet : 'na',
                 description: item.volumeInfo.description,
                 thumbnail: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '#'
             }   
            })
            this.props.handleSetState(newBooks);
        })
        .catch(error => {
            console.log(error.message);
        })

      }

     

    render() {
        return(
            <form
                onSubmit={e=>this.handleSubmit(e)}
            >
                <SearchInput searchBook={this.searchBook} />
                <FilterInputs 
                bookTypeChange={this.bookTypeChange}
                printTypeChange={this.printTypeChange}
                />
            </form>
        )
    }
} 

