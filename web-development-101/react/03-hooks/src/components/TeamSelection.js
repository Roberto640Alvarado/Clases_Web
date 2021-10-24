import { useContext } from "react";
import { StoreContext } from "../utils/store";

const TeamBubble = ({ index, active, change }) => {
    return(
        <button
            onClick={() => change(index)} 
            className={`mx-2 w-10 h-10 rounded-full flex justify-center items-center 
            font-bold shadow-xl flex-shrink-0 ${active ? 'bg-green-400' : 'bg-white'}`}
        >
            { index + 1 } 
        </button>
    )
}

const TeamSelection = () => {
    const {
        allTeams: [teams, setTeams],
        current: [currentTeam, setCurrentTeam]
    } = useContext(StoreContext);

    function addTeam() {
        setTeams([...teams, []])
    }

    function changeCurrentTeam(index) {
        setCurrentTeam(index);
    }

    return(
        <div className="px-8 w-screen flex items-center overflow-auto py-4">
            <button onClick={addTeam}
                className="mx-2 w-10 h-10 bg-blue-400 rounded-full flex justify-center items-center font-bold shadow-xl flex-shrink-0"
            >
                +
            </button>
            {
                teams.map((it, index) => <TeamBubble key={index} index={index} active={currentTeam === index} change={changeCurrentTeam} />)
            }
        </div>
    )
}

export default TeamSelection;