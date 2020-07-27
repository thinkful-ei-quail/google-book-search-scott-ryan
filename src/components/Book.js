import React from 'react';

export default class Book extends React.Component {
    state={
        expanded: false
    }

    toggleExpansion = () => {
        this.setState({expanded: !this.state.expanded})
    }

    render() {
        return(
        <li onClick={() => this.toggleExpansion()}>
            <div className="book-li-item">
                <div>
                <img src={this.props.book.thumbnail} />
                </div>
                <div>
                    <h2>{this.props.book.title}</h2>
                    {this.props.book.author} <br />
                    {this.props.book.price} <br />
                    {this.props.book.snippet} <br />
                    <p>{this.state.expanded ? this.props.book.description : ''} </p>
                 </div>
                
            </div>
        </li>
        )
    }
}