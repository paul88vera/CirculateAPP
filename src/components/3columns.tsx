import { useUser } from "@clerk/nextjs";
import SuggestionCard from "./suggestionCard";
import { api } from "~/utils/api";
import Landing from "./landing";

const TripleColumns = () => {
  // Receiving All Restaurants as {data}
  const { data } = api.restaurants.getAll.useQuery();
  // Current Authorization State
  const { isLoaded, isSignedIn } = useUser();

  // filtering button style
  const btnStyle =
    "rounded-full bg-black p-2 text-white hover:bg-white hover:text-black";

  // Filtered by Type of Foods
  //***TODO: This portion is not working correctly. Need to fix ASAP***
  const filterType = (type: string) => {
    data?.filter((item) => {
      return item.type === type;
    });
    console.log(type);
  };

  // Show Landing if not Logged In or Return Map() once Logged In
  if (!isLoaded || !isSignedIn) {
    return <Landing />;
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
          {/* This is the filtering portion of the page */}
          <div className="flex justify-center gap-2 py-4">
            <button
              onClick={() => {
                data;
              }}
              className={btnStyle}
            >
              All
            </button>
            <button
              className={btnStyle}
              onClick={() => {
                filterType("american");
              }}
            >
              American
            </button>
            <button
              className={btnStyle}
              onClick={() => {
                filterType("mexican");
              }}
            >
              Mexican
            </button>
            <button
              className={btnStyle}
              onClick={() => {
                filterType("italian");
              }}
            >
              Italian
            </button>
            <button
              className={btnStyle}
              onClick={() => {
                filterType("indian");
              }}
            >
              Indian
            </button>
            <button
              className={btnStyle}
              onClick={() => {
                filterType("asian");
              }}
            >
              Asian
            </button>
            <button
              className={btnStyle}
              onClick={() => {
                filterType("BBQ");
              }}
            >
              BBQ
            </button>
          </div>
          {/* mapping the data to cards for readability */}
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
