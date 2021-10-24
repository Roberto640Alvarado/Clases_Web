import { createContext, useState } from 'react';

export const StoreContext = createContext(null)

const TeamContext = ({ children }) => {
    const [currentTeam, setCurrentTeam] = useState(0);
    const [teams, setTeams] = useState([[]]);

    const store = {
        allTeams: [teams, setTeams],
        current: [currentTeam, setCurrentTeam]
    }

    return (
        <StoreContext.Provider value={store}>
            { children }
        </StoreContext.Provider>
    )
}

export default TeamContext;