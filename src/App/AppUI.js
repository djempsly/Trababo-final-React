import React from "react";
import { Tittle } from '../Tittle';
import { Search } from '../Search';
import { ListItem } from '../ListItem';
import { Item } from '../Item';
import { Button } from '../Button';
import { Context } from "../Context";
import { Modal } from "../Modal";
import { AddItem } from "../AddItem";
import { Cargando } from "../Cargando";
import { Error } from "../Error";
import { CreaItem } from "../CreaItem";

function AppUI(){

    const {
        deleted,
        completed, 
        searchArticle, 
        openModal,
        error,
        loading
    } = React.useContext(Context)
    
    return(
        <>
        <Tittle />

    <Search  />

    <ListItem>
        {loading && <Cargando />}
        {error && <Error />}
        {(!loading && searchArticle.length === 0) 
        && <CreaItem/>}

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
        {openModal && 
        (    <Modal>
                < AddItem/>
            </Modal>
        )
        }
    </>
    );
}

export {AppUI}