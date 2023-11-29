import React from 'react';
import { Tittle } from '../Tittle';
import { Search } from '../ListItem/Search';
import { ListItem } from '../ListItem';
import { Item } from '../Item';
import { Button } from '../Button';

const Products = [
  {nombre: "Laptop", disponible: true},
  {nombre: "Televisor", disponible: false},
  {nombre: "Bike", disponible: false}
]

function App() {

  const [article, setArticle] = React.useState(Products)
  const [searchArticle, setSearchArticle] = React.useState('')

  const completeArticle = article.filter((nombre) => 
  nombre.disponible= true).length

  const totalArticle = article.length


  return (
    <div className="App">
      <Tittle 
      completeArticle = {completeArticle}
      total = {totalArticle}
      />

      <Search />

      <ListItem>
        {Products.map((nomb)=>
         <Item 
         key = {nomb.nombre}
         nombre = {nomb.nombre}
         disponible = {nomb.disponible}
         
         />

        )}
        
      </ListItem>

      <Button />

    </div>
  );
}

export default App;
