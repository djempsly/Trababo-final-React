import React from "react";

function useLocalStorage(nameItem, initialValue){
  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(()=>{
    setTimeout(() => {
      try {
        const ItemStorage = localStorage.getItem(nameItem)
        let parseItem ;
      
       if (!ItemStorage) {
        localStorage.setItem(nameItem, JSON.stringify(initialValue))
        parseItem = initialValue
        
       } else {
         parseItem = JSON.parse(ItemStorage)
         setItem(parseItem)
         setLoading(false)
       }
      
     } catch (error) {
      setLoading(false)
      setError(true)
        
      }}, 3000);

  }, [nameItem, initialValue])

  const saveItem = (newItem) =>{
    localStorage.setItem(nameItem, JSON.stringify(newItem))
    setItem(newItem)
  }
  
  return {
    item, saveItem, error, loading
  }
  
  }

  export {useLocalStorage}

//   const Products = [
//   {nombre: "Laptop", disponible: false},
//   {nombre: "Televisor", disponible: false},
//   {nombre: "Bike", disponible: false}
// ]

// localStorage.setItem('Lhams', JSON.stringify(Products))