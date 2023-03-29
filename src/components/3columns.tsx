import { SignedIn, SignedOut, useUser } from '@clerk/nextjs'
import SuggestionCard from './suggestionCard';
import {api} from '~/utils/api'

const TripleColumns = () => {
    const {data} = api.restaurants.getAll.useQuery();

    const { user, isLoaded, isSignedIn } = useUser()
    if(!isLoaded || !isSignedIn){
        return null;
    }

    return(
        <>
            <section className="bg-zinc-800 pb-16 max-w-screen px-10 relative flex flex-col">
                <div className="text-center text-white font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-8 uppercase">Nearby ❤️️ Favorites</div>
                <div className='grid gap-6 lg:grid-cols-2 xl:grid-cols-3'>
                    {data?.map((r) => (
                        <SuggestionCard key={r.id} title={r.name} description={r.description} image={r.image} type={r.type} city={r.address.city} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default TripleColumns