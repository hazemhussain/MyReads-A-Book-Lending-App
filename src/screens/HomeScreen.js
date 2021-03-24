import React, { Component } from 'react';
import BookShelf from '../components/BookShelf';
import ButtonSearch from '../components/ButtonSearch'

class HomeScreen extends Component {
    render() {
        const {books} = this.props
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf title={"Currently Reading"}
                books={books.filter(book=>(book.shelf==="currentlyReading"))}
                updateShelf={this.props.updateShelf}
                />

                <BookShelf title={"Want To Read"}
                 books={books.filter(book=>(book.shelf==="wantToRead"))}
                 updateShelf={this.props.updateShelf}
                />

                <BookShelf title={"Read"}
                 books={books.filter(book=>(book.shelf==="read"))}
                 updateShelf={this.props.updateShelf}
                />
            </div>
             <ButtonSearch/>
          </div>
        );
    }
}

export default HomeScreen;