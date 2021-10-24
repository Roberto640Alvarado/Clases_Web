import Card from "./card/Card";

const Container = ({ pkmn, deletePkmn }) => {
    return (
        <div className="w-full flex flex-wrap justify-center items-start space-x-2 px-4 md:space-x-6">
            {
                pkmn && pkmn.map((it) => <Card name={it} deletePkmn={deletePkmn} />)
            }
        </div>
    )
}

export default Container;