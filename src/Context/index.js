import React from "react";
import { useLocalStorage } from "./UseLocalStorage";
const Context = React.createContext ()

function ItemProvider({children}){
   
    
  const {item:article, 
       saveItem:setArticle, 
        error, 
        loading} = useLocalStorage('Lhams', [])

  const [searchValue, setSearchValue] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false)

  const completeArticle = article.filter((nomb) => 
  nomb.disponible).length
  const totalArticle = article.length

  const searchArticle = article.filter((nomb)=>{
    const Text = nomb.nombre.toLocaleLowerCase();
    const Value = searchValue.toLocaleLowerCase()
    return Text.includes(Value)
  }) 

  const addItem = (nombre) =>{
    const newArticle = [...article]
    newArticle.push({
         nombre,
        disponible:false
    })
  
    setArticle(newArticle)
  }

  const completed = (nombre) =>{
    const newArticle = [...article]
    const findIndex = newArticle.findIndex(
      nomb => nomb.nombre === nombre)
    newArticle[findIndex].disponible = true;
    setArticle(newArticle)
  }

  const deleted = (nombre) =>{
    const newArticle = [...article]
    const findIndex = newArticle.findIndex(
      nomb => nomb.nombre === nombre)
    newArticle.splice(findIndex, 1)
    setArticle(newArticle)
  }


    return(

        <Context.Provider value={{
            deleted,
            completed, 
            searchArticle, 
            completeArticle, 
            totalArticle, 
            searchValue, 
            setSearchValue,
            openModal, 
            setOpenModal,
            addItem,
            error,
            loading
        }} > 
            {children}
        </Context.Provider>

    );
}

export {Context, ItemProvider}



