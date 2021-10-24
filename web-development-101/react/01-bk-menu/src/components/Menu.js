import React, { useRef, useState } from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
    const [ addedItems, setAddedItems ] = useState([]);
    const nameInput = useRef(null);
    const priceInput = useRef(null);

    function onAddButtonClicked() {
        const { value: name } = nameInput.current;
        const { value: price } = priceInput.current;

        if(name === "" || price === "") {
            alert('Inserta todos los campos');
            return;
        }
        
        setAddedItems([...addedItems, { name, price }]);
    }

    return (
        <div>
            <div className="w-full flex flex-wrap justify-center px-5 py-4 space-x-1">
                <input ref={nameInput} type="text" name="" id="" placeholder="Nombre" className="w-1/3 border border-yellow-500 rounded-full px-4 py-1"/>
                <input ref={priceInput} type="text" name="" id="" placeholder="Precio" className="w-1/3 border border-yellow-500 rounded-full px-4 py-1"/>
                <button 
                onClick={onAddButtonClicked}
                className="rounded-full w-1/2 bg-green-500 mx-auto py-1 text-white font-bold shadow-lg hover:bg-green-900 my-2">Agregar</button>
            </div>
            <div className="w-full flex flex-row flex-wrap justify-center">
                {
                    addedItems && addedItems.map((item, index) => {
                        return <MenuItem key={index} name={item.name} price={item.price} />
                    })
                }
            </div>
        </div>
    )
}

export default Menu;