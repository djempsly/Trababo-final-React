import React from "react";
import './Item.css'
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

function Item(props){
    return(
        <li className="item">
    
            <AiOutlineCheck className="complete icon completed-icon"
            onClick={props.onComplete}
            />
            <p> {props.nombre} </p>

           <AiOutlineClose className="delete icon deleted-icon"
           onClick={props.onDelete}
           />

        </li>
    );
}

export {Item}