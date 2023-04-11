import { useUser } from "@clerk/nextjs";
import SuggestionCard from "./suggestionCard";
import Landing from "./landing";
import { api } from "~/utils/api";

const TripleColumns = () => {
  const { data } = api.restaurants.getAll.useQuery();

  const { user, isLoaded, isSignedIn } = useUser();
  if (!isLoaded || !isSignedIn) {
    return <Landing />;
  }

  return (
    <>
      <section className="max-w-screen relative flex flex-col bg-green-900 px-10 pb-16">
        <div className="pt-8 text-center text-3xl uppercase tracking-widest text-white md:text-4xl lg:text-5xl xl:text-6xl">
          Welcome back {user.firstName}!
        </div>
        <div className="tracking-tightest whitespace-nowrap pb-8 text-center text-3xl font-bold uppercase text-white md:text-4xl md:tracking-wide lg:text-5xl xl:text-6xl">
          Nearby <span className="animate-pulse">❤️'s</span>
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
      <Landing />
    </>
  );
};

export default TripleColumns;
