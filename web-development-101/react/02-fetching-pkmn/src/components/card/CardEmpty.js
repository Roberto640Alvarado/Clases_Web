const CardEmpty = () => (
    <div className="animate-pulse">
        <div className="bg-white rounded-xl shadow-lg px-2 py-3 relative my-2 md:my-6">
            <div 
                className=
                    "absolute bg-red-400 text-white font-bold text-sm p-1 rounded-full top-0 right-0 h-6 w-6"
            />
            <div className="w-20 h-20 bg-gray-400 rounded-lg m-1 mb-1" alt="" />
            <div className="space-y-2">
                <div className="">
                    <div className="bg-gray-400 w-12 h-7 rounded-full font-medium text-white" />
                </div>
                <div className="bg-gray-400 h-5 w-20 rounded-full"/>
            </div>
            <div className="my-2">
                <div className="pokeball"></div>
            </div>
        </div>
    </div>
)

export default CardEmpty;