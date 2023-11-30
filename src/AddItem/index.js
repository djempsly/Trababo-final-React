import React from "react";
import { Context } from "../Context";

function AddItem(){
    const [addText, setAddText] = React.useState('')
    const {addItem,setOpenModal} = React.useContext(Context)

    const onSumit=(event) =>{
        event.preventDefault()
            addItem(addText)
        setOpenModal(false)
    }

    const onCancel = ()=>{
        setOpenModal (false)
    }

    const onChange = (event) =>{
        setAddText(event.target.value)

    }

    return(
        <form onSubmit={onSumit}>
            <label> Agrega tu Articulo</label>
            <textarea 
            placeholder="Escribe tu artículo"
            value={addText}
            onChange={onChange}
            />
            <div>
                <button
                type="button"
                onClick={onCancel}
                >
                    Cancelar
                </button>
                <button>
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {AddItem}
