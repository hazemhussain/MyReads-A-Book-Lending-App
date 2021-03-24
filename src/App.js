import React from 'react'
// import * as BooksAPI from './BooksAPI'
import * as BooksApi from './BooksAPI'
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';



class BooksApp extends React.Component {
  state={
    booksList:[],
  }
  componentDidMount(){
      BooksApi.getAll().then(booksList=>{
       this.setState(()=>({
         booksList
       }))
       console.log(booksList)
      })
  }
//change shelf
  updateShelf =(book,shelf)=>{
   BooksApi.update(book,shelf).then(data=>{
     console.log(data)
     book.shelf=shelf
     this.setState((prev)=>({
       booksList:prev.booksList.filter(c=>c.id!==book.id).concat([book])
     }))
   })
  };

  render() {
    return (
      <div className="app">
       <Switch>
         <Route exact path="/" render={()=>(
           <HomeScreen books={this.state.booksList}
           updateShelf={this.updateShelf}
           />
         )
         }/>

         <Route  path="/search-book" render={()=>(
           <SearchScreen
           books={this.state.booksList}
           updateShelf={this.updateShelf}
           />
         )}/>
       </Switch>
      </div>
    )
  }
}

export default BooksApp

