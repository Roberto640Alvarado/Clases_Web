import { types } from "../constants/types";
const { default: useFetch } = require("../hooks/useFetch")

const EmptyCard = () => (
    <div className="my-4 mx-2 w-44 bg-white h-52 rounded-lg shadow-xl space-y-3 flex flex-col items-center relative py-2">
        <div className="bg-gray-300 w-40 h-24 rounded-lg" />
        <div className="space-y-2">
            <div className="w-28 h-4 bg-gray-300 rounded-lg"/>
            <div className="w-10 h-4 bg-gray-300 mx-auto rounded-lg"/>
        </div>
        <div className="absolute bottom-2 space-x-1 flex">
            <div className="w-10 h-4 bg-gray-300 rounded-lg"/>
            <div className="w-10 h-4 bg-gray-300 rounded-lg"/>
            <div className="w-10 h-4 bg-gray-300 rounded-lg"/>
        </div>
    </div>
)

const Card = ({ name }) => {
    function capitalizer(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let request = useFetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (request.status === 'loading')
        return <EmptyCard />

    return (
        <div 
            className="my-4 mx-2 w-44 bg-opacity-40 h-52 rounded-lg shadow-xl space-y-3 flex flex-col items-center relative py-2 text-white text-center"
            style={{ backgroundColor: types[request.data.types[0].type.name] }}
        >
            <img className="h-24 rounded-lg" src={request.data.sprites.front_default} alt={ request.data.name }/>
            <div className="space-y-2">
                <p className="rounded-lg font-bold">{ capitalizer(request.data.name) }</p>
                <p className="text-sm font-bold mx-auto rounded-lg">{ request.data.id }</p>
            </div>
            <div className="absolute bottom-2 space-x-1 flex">
                {
                    request.data.types.map((it, index) => 
                        <p key={index} className="text-xs px-2 py-1 bg-gray-600 rounded-full">{ capitalizer(it.type.name) }</p>
                    )
                }
            </div>
        </div>
    )
}

export default Card;