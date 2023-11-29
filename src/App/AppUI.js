import React from "react";
import { Tittle } from '../Tittle';
import { Search } from '../ListItem/Search';
import { ListItem } from '../ListItem';
import { Item } from '../Item';
import { Button } from '../Button';
import { Context } from "../Context";

function AppUI(){

    const {
      
        deleted,
        completed, 
        searchArticle, 
        
    } = React.useContext(Context)
    
    return(
        <>
        <Tittle />

    <Search  />

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