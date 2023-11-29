import React from "react";
import { Tittle } from '../Tittle';
import { Search } from '../ListItem/Search';
import { ListItem } from '../ListItem';
import { Item } from '../Item';
import { Button } from '../Button';

function AppUI({
      
    deleted,
    completed, 
    searchArticle, 
    completeArticle, 
    totalArticle, 
    searchValue, 
    setSearchValue, 
}){

    
    return(
        <>
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

    <Button /></>

    );
}

export {AppUI}