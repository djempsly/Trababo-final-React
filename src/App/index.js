import React from 'react';
import { useLocalStorage } from './UseLocalStorage';
import { AppUI } from './AppUI';




function App() {


  const [article, setArticle] = useLocalStorage('Lhams', [])
  const [searchValue, setSearchValue] = React.useState('')

  const completeArticle = article.filter((nomb) => 
  nomb.disponible).length
  const totalArticle = article.length

  const searchArticle = article.filter((nomb)=>{
    const Text = nomb.nombre.toLocaleLowerCase();
    const Value = searchValue.toLocaleLowerCase()
    return Text.includes(Value)
  }) 

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



  return (
    <div className="App">
     <AppUI
     
     deleted = {deleted}
     completed = {completed}
     searchArticle = {searchArticle}
     completeArticle = {completeArticle}
     totalArticle = {totalArticle}
     searchValue = {searchValue} 
     setSearchValue = {setSearchValue}
     
     />

    </div>
  );
}

export default App;
