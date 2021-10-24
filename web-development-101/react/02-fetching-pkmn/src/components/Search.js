import { useRef } from 'react'

const Search = ({ addPkmnToTeam }) => {
    const pkmnName = useRef(null);

    function onClickHandler() {
        if(pkmnName.current.value === "") {
            alert('Llenar los campos primero!')
            return;
        }
        
        addPkmnToTeam(pkmnName.current.value);
    }

    return (
        <div className="w-full px-4 flex flex-col justify-center items-center space-y-2 my-4 md:space-y-6 md:my-8">
            <input ref={pkmnName} className="px-2 py-1 rounded-full md:w-96 md:text-center" type="text" placeholder="Pkmn name" />
            <button
                onClick={onClickHandler}
                className="shadow-sm bg-blue-500 rounded-full px-2 py-1 text-sm font-bold text-white md:text-base md:px-4 md:py-2"
            >
                Add to team
            </button>
        </div>
    )
}

export default Search;