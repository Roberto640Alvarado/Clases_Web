import Card from './Card';
import { useContext } from 'react';
import { StoreContext } from '../utils/store';

const Container = () => {
    const {
        allTeams: [teams, ],
        current: [currentTeam, ]
    } = useContext(StoreContext);

    return(
        <div className="px-8 my-4 flex flex-wrap items-center justify-center">
            {
                teams[currentTeam].map((it, index) => <Card key={index} name={it} />)
            }
        </div>
    )
}

export default Container;