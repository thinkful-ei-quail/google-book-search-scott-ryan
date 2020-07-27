import React from 'react';



export default class FilterInputs extends React.Component {
    render() {
        return(
            <div>
                <label>Print Type</label>
                <select
                    onChange={(e) => this.props.printTypeChange(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
                <label>Book Type</label>
                <select
                    onChange={(e) => this.props.bookTypeChange(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="partial">Partial</option>
                    <option value="full">Full</option>
                    <option value="free-ebooks">Free Ebooks</option>
                    <option value="paid-ebooks">Paid Ebooks</option>
                    <option value="ebooks">Ebooks</option>
                </select>
            </div>
        )
    }
} 
