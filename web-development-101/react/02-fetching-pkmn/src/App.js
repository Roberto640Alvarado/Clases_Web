import Container from "./components/Container";
import Search from "./components/Search";
import { useState, useRef } from "react";

const App = () => {
  const [ selectedTeam, setSelectedTeam ] = useState(1);
  const [ teams, setTeams ] = useState([]);
  const [ pkmn, setPkmn ] = useState({});

  function addPkmn(pkmnToAdd) {
    if(pkmn.length === 6) {
      alert('No puedes tener mas de 6 pkmn en el equipo')
      return;
    }
    
    var team = {
      id: selectedTeam,
      pkmn: [...pkmn.pkmn, pkmnToAdd]
    }

    setPkmn(team.pkmn);
  }

  function deletePkmn(name) {
    setPkmn(pkmn.filter(p => p !== name))
  }

  function handleChange() {
    
  }

  return(
    <div>
      <div className="font-bold text-white w-full text-center mt-6">
        <p>Equipo actual</p> 
        <div className="space-x-4 p-2">
          <span
            onClick={() => selectedTeam > 1 && setSelectedTeam(selectedTeam - 1)}
            className="bg-red-500 rounded-lg px-2 py-1 hover:bg-red-900 select-none cursor-pointer">-</span>
            <strong>{selectedTeam}</strong>
          <span
            onClick={() => setSelectedTeam(selectedTeam + 1)}
            className="bg-green-500 rounded-lg px-2 py-1 hover:bg-green-900 select-none cursor-pointer">+</span>
        </div>
      </div>
      <Search addPkmnToTeam={addPkmn} />
      <Container pkmn={pkmn.pkmn} deletePkmn={deletePkmn} />
    </div>
  )
}

export default App;