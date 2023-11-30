import React from "react";
import './Button.css'
import { Context } from "../Context";

function Button(){
   const {setOpenModal} = React.useContext(Context)

    return(
        <button
        onClick={() => setOpenModal(state=>!state)}
        > + </button>
    );
}

export { Button}
