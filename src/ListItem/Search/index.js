import React from "react";
import { Context } from "../../Context";

function Search(){
const {searchValue, setSearchValue} = React.useContext(Context)

    return(
        <input className="input-search"
        placeholder="Busca tu Artículos"
        value={searchValue}
        onChange={(event) =>setSearchValue(event.target.value)}
        
        />
    );
}

export { Search }