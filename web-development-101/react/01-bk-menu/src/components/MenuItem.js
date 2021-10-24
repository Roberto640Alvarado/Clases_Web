import React, { useState } from 'react';

const MenuItem = ({ name, price }) => {
    const [ isSelected, setIsSelected ] = useState(false);

    return (
        <div className={`${ !isSelected ? "bg-red-600" : "bg-yellow-600"} rounded-lg shadow-lg my-4 w-4/5 md:w-1/3 lg:w-1/4`}>
            <div className="h-40 flex items-center justify-center bg-gray-200 rounded-t-lg text-center">
                IMAGEN <br/> { isSelected && "ITEM SELECCIONADO" }
            </div>
            <div className="flex flex-col justify-center items-center space-y-2 py-2 text-white">
                <h1 className="font-bold text-lg">{ name }</h1>
                <h1 className="font-semibold text-sm">$ { price }</h1>
                <button 
                onClick={() => setIsSelected(!isSelected)}
                className="bg-green-700 shadow-lg px-3 py-2 rounded-full">
                    { !isSelected ? "Agregar al carrito" : "Quitar del carrito" }
                </button>
            </div>
        </div>
    )
}

export default MenuItem;