import React from "react";

function Search({searchValue, setSearchValue}){
    return(
        <input className="input-search"
        placeholder="Busca tu Artículos"
        value={searchValue}
        onChange={(event) =>setSearchValue(event.target.value)}
        
        />
    );
}

export { Search }