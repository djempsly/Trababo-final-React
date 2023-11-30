import React from "react";
import { Tittle } from '../Tittle';
import { Search } from '../Search';
import { ListItem } from '../ListItem';
import { Item } from '../Item';
import { Button } from '../Button';
import { Context } from "../Context";
import { Modal } from "../Modal";

function AppUI(){

    const {
        deleted,
        completed, 
        searchArticle, 
        openModal
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

    <Button />
        {openModal && (
            <Modal>
                <p>Hola muchacho como estás</p>
            </Modal>
        )
        }
    </>
    );
}

export {AppUI}