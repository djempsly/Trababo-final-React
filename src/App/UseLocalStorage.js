import React from "react";

function useLocalStorage(nameItem, initialValue){

    const ItemStorage = localStorage.getItem(nameItem)
    let parseItem ;
  
   if (!ItemStorage) {
    localStorage.setItem(nameItem, JSON.stringify(initialValue))
    parseItem = initialValue
    
   } else {
     parseItem = JSON.parse(ItemStorage)
   }
   const [item, setItem] = React.useState(parseItem)
  
   const saveItem = (newItem) =>{
    localStorage.setItem(nameItem, JSON.stringify(newItem))
    setItem(newItem)
  }
  
  return [item, saveItem]
  
  }

  export {useLocalStorage}

  // const Products = [
//   {nombre: "Laptop", disponible: false},
//   {nombre: "Televisor", disponible: false},
//   {nombre: "Bike", disponible: false}
// ]

// localStorage.setItem('Lhams', JSON.stringify(Products))