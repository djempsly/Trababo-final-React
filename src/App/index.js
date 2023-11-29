import React from 'react';
import { Tittle } from '../Tittle';
import { Search } from '../ListItem/Search';
import { ListItem } from '../ListItem';
import { Item } from '../Item';
import { Button } from '../Button';

// const Products = [
//   {nombre: "Laptop", disponible: false},
//   {nombre: "Televisor", disponible: false},
//   {nombre: "Bike", disponible: false}
// ]

// localStorage.setItem('Lhams', JSON.stringify(Products))

function App() {

  const ArticleStorage = localStorage.getItem('Lhams')
  let parseArticle ;

 if (!ArticleStorage) {
  localStorage.setItem('Lhams', JSON.stringify([]))
  parseArticle = []
  
 } else {
   parseArticle = JSON.parse(ArticleStorage)
 }


  const [article, setArticle] = React.useState(parseArticle)
  const [searchValue, setSearchValue] = React.useState('')

  const completeArticle = article.filter((nomb) => 
  nomb.disponible).length
  const totalArticle = article.length

  const searchArticle = article.filter((nomb)=>{
    const Text = nomb.nombre.toLocaleLowerCase();
    const Value = searchValue.toLocaleLowerCase()
    return Text.includes(Value)
  }) 

  const saveItem = (newItem) =>{
    localStorage.setItem('Lhams', JSON.stringify(newItem))
    setArticle(newItem)
  }

  const completed = (nombre) =>{
    const newArticle = [...article]
    const findIndex = newArticle.findIndex(
      nomb => nomb.nombre === nombre)
    newArticle[findIndex].disponible = true;
    saveItem(newArticle)
  }

  const deleted = (nombre) =>{
    const newArticle = [...article]
    const findIndex = newArticle.findIndex(
      nomb => nomb.nombre === nombre)
    newArticle.splice(findIndex, 1)
    saveItem(newArticle)
  }



  return (
    <div className="App">
      <Tittle 
      completeArticle = {completeArticle}
      total = {totalArticle}
      />

      <Search 
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      
      />

      <ListItem>
        {searchArticle.map((nomb)=>
         <Item 
         key = {nomb.nombre}
         nombre = {nomb.nombre}
         disponible = {nomb.disponible}
         onComplete = {() => completed(nomb.nombre)}
         onDelete = {()=> deleted (nomb.nombre)}
         
         />

        )}
        
      </ListItem>

      <Button />

    </div>
  );
}

export default App;
