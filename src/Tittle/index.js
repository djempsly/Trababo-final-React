import React from "react";

function Tittle(props){
    return(
        <h1 className="titulo">
            Elegiste {props.completeArticle} de {props. total} articulos
        </h1>
    );
}

export { Tittle}