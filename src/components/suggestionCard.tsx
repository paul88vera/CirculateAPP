type SuggestionProps = {
    title: string
    description?: string
    image?: string
    type?: string
    city?: string
}

const SuggestionCard = (props: SuggestionProps) => {
    return (
        <>
            <div title={props.title} className="shadow-lg transform rounded-xl bg-gray-300 hover:bg-green-400 hover:scale-105 transform-gpu transition ease-in-out duration-300 hover:cursor-pointer relative flex justify-between flex-col">
                <div className="px-6 py-4 h-72 sm:h-40 md:h-48 flex flex-row max-sm:flex-wrap">
                    <div className="w-full md:w-1/2 my-auto h-32 md:h-full" >
                        <img className="w-full h-full object-cover rounded-xl drop-shadow-lg" src={props.image} alt="Sunset in the mountains" />
                    </div>
                    <div className="w-full ml-4 md:w-1/2 my-auto">
                        <div className="font-bold text-xl mb-2 flex flex-col">{props.title}</div>
                        <p className="text-gray-700 max-h-24 text-ellipsis overflow-hidden">
                            {props.description}
                        </p>
                    </div>
                </div>
                <div className="px-6 pt-4 pb-2 bg-white rounded-b-xl">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:bg-green-400">#{props.type}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:bg-green-400">#{props.city}</span>
                </div>
            </div>
        </>
    )
}

export default SuggestionCard;