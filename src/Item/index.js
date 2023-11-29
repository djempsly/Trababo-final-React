import React from "react";
import './Item.css'

function Item(props){
    return(
        <li className="item">
            <span
            onClick={props.onComplete}
            >V</span>

            <p> {props.nombre} </p>

            <span
            onClick={props.onDelete}
            >X</span>

        </li>
    );
}

export {Item}