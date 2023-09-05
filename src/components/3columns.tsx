import { useUser } from "@clerk/nextjs";
import SuggestionCard from "./suggestionCard";
import { api } from "~/utils/api";
import Landing from "./landing";

const TripleColumns = () => {
  const { data } = api.restaurants.getAll.useQuery();

  const { user, isLoaded, isSignedIn } = useUser();
  if (!isLoaded || !isSignedIn) {
    return <Landing />;
  }
  if (!user) {
    return "You need to be signed in to use this website.";
  } else {
    return (
      <>
        <section className="max-w-screen relative flex flex-col bg-green-900 px-10 pb-16">
          <div className="pt-8 text-center text-3xl uppercase tracking-widest text-white md:text-4xl lg:text-5xl xl:text-6xl">
            Welcome!
          </div>
          <div className="tracking-tightest whitespace-nowrap pb-8 text-center text-2xl font-bold uppercase text-white md:text-4xl md:tracking-wide lg:text-5xl xl:text-6xl">
            Find Food Near Your Location
          </div>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {data?.map((r) => (
              <SuggestionCard
                key={r.id}
                title={r.name}
                description={r.description}
                image={r.image}
                type={r.type}
                city={r.address.city}
                website={r.website}
                tel={r.tel}
                map={r.map}
                imgAlt={r.imgAlt}
                rating={r.rating}
              />
            ))}
          </div>
        </section>
      </>
    );
  }
};

export default TripleColumns;
