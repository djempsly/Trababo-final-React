import React from "react";
import { Context } from "../Context";
import './Tittle.css'

function Tittle(){
    const { completeArticle, 
            totalArticle
        } = React.useContext(Context)

    return(
        <h1 className="titulo">
            Elegiste <span>{completeArticle}</span> de <span>{totalArticle}</span>  articulos
        </h1>
    );
}

export { Tittle}