import React from "react";
import './Item.css'

function Item(props){
    return(
        <li className="item">
            <span>V</span>
            <p> {props.nombre} </p>
            <span>X</span>

        </li>
    );
}

export {Item}