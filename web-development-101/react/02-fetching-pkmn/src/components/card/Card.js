import { useEffect, useState } from "react";
import { types } from "../../constants/types";

import CardEmpty from "./CardEmpty";

const Card = ({ name, deletePkmn }) => {
    const [pkmn, setPkmn] = useState()
    
    function getHexFromType(type) {
        return types[type];
    }

    function onDelete() {
        deletePkmn(pkmn.name)
        setTimeout(() => alert(`Eliminado ${pkmn.name}`), 100)
    }

    // Ejecuta al montar el componente
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => res.json())
        .then(rawPkmn => {
            var parsedPkmn = {
                name: rawPkmn.name,
                sprite: rawPkmn.sprites.front_default,
                types: rawPkmn.types,
                num: rawPkmn.order
            }

            setPkmn(parsedPkmn)
        })
    }, [name])

    return(
        <div className="">
            {
                !pkmn ? 
                    <CardEmpty />
                    :
                    <div className="bg-white rounded-xl shadow-lg px-2 py-3 relative my-2 md:my-6">
                        <h2 className="absolute bg-red-400 text-white font-bold text-sm p-1 rounded-full top-0 right-0">{ pkmn.num }</h2>
                        <img className="" src={ pkmn.sprite } alt="" />
                        <div className="space-y-3">
                            <div className="text-xs space-x-2">
                                {
                                    pkmn.types.map((it) => 
                                        <span className="px-2 py-1 border-2 border-gray-600 rounded-full font-medium text-white" style={{backgroundColor: getHexFromType(it.type.name)}}>
                                            {it.type.name}
                                        </span>
                                    )
                                }
                            </div>
                            <h1 className="text-sm font-bold">{ pkmn.name }</h1>
                        </div>
                        <div className="my-2">
                            <div className="pokeball"></div>
                        </div>
                        <button
                        onClick={onDelete}
                        className="my-1 text-white text-sm font-bold w-full text-center bg-red-400 px-2 py-1 rounded-full shadow-lg hover:bg-red-700">
                            Eliminar
                        </button>
                    </div>
            }
        </div>
    )
}

export default Card;
