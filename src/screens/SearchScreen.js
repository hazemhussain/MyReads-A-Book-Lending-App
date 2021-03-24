import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import * as BooksApi from '../BooksAPI'
import BookShelf from '../components/BookShelf';



class SearchScreen extends Component {
  state={
    searchingBooks:[],
    query:""
  }

  updatQury=()=>{
    this.setState(state=>({
      query:state.query.trime()
    }))
  }
  handleSearch=(e)=>{
    if(this.state.query==="" || this.state.query==="undefined"){
      this.setState({searchingBooks:[]})
    }
    const query = e.target.value
    BooksApi.search(query).then(results=>{
      if(!results ||results.error){
        this.setState({searchingBooks:[]})
      }else{
        this.setState({searchingBooks:results})
        console.log(results)
      }
    })
  };

      
    render() {
       this.state.searchingBooks.forEach((result)=>{
          this.props.books.forEach((book)=>{
         if (book.id === result.id) {
             result.shelf = book.shelf;
            }else if(!result.shelf){
               result.shelf="none"
            }
          })
       })
        return (
            <div className="search-books">
            <div className="search-books-bar">
             <Link to="/"> 
                <button className="close-search">Close</button>
             </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"  onChange={this.handleSearch}/>

              </div>
            </div>
            <div className="search-books-results">
              <BookShelf books={this.state.searchingBooks} updateShelf={this.props.updateShelf}/>
            </div>
          </div>
        );
    }
}

export default SearchScreen;

