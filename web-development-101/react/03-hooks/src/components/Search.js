import { useRef, useContext } from "react";
import { StoreContext } from "../utils/store";

const Search = () => {
    const pkmnName = useRef(null);
    
    const {
        allTeams: [teams, setTeams],
        current: [currentTeam, ]
    } = useContext(StoreContext);

    function onSubmit(e) {
        e.preventDefault();

        if(teams[currentTeam].length === 6) {
            alert('No es posible agregar mas pkmn a este equipo');
            return;
        }

        let teamUpdated = teams.map((it, index) => {
            if (index === currentTeam)
                return [...it, pkmnName.current.value.toLowerCase()]
            else
                return it
        })

        setTeams(teamUpdated);
    }
    
    return (
        <form className="w-full flex flex-col justify-center items-center px-8 space-y-3 my-2" action="" onSubmit={onSubmit}>
            <input className="rounded-full px-3 py-1 w-3/4 text-center" type="text" ref={pkmnName} placeholder="Escribe algo..." />
            <button className="text-white border-2 border-white rounded-full w-1/2 bg-blue-600 py-1 text-sm font-bold
                shadow-lg">
                Agregar PKMN
            </button>
        </form>
    )
}

export default Search;