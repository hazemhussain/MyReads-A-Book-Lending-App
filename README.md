# My Read projet

# react installation
- yesing npm install  install react 
# clean the code 
- create new folder for our components 
- create screen folder for home screen and search screen 
- minimize our app.js code and use our components to show ui 
# creating our shelves 
- we call the api from the BOOKAPI by using componentDidMount 
- create state for our books's data 
- in home screen this state will be used as props 
- show our book's shelves on our BookShelf comonent
_ map through every shelf and change the shelf to the required shelf
# change and update shelves
- by creating function to update shelf using Api Udate
- in Booklist Component use onChange function to move book to another shelf
# search screen component
- create state for coming data from Api 
- make new state as query this will be our value of search
- using the Api search method to receive data
- adjust our query value to show the data on screen 
- the screen component shouild Show BookShelf Component
- dealing with empty search or wrong input 
# controle the search shelf and send books To main shelves
- the search screen shelves should match the main page 
- transfere from search screen to main page by changing shelf to currentl Reading ,read or Want to Read
