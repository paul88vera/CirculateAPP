import { useUser } from "@clerk/nextjs";
import SuggestionCard from "./suggestionCard";
import { api } from "~/utils/api";
import Landing from "./landing";
import { useState } from "react";

const TripleColumns = () => {
  // Used for Filter State
  const [filter, setFilter] = useState("");
  // Receiving All Restaurants as {data}
  const { data } = api.restaurants.getAll.useQuery();
  // Current Authorization State
  const { isLoaded, isSignedIn } = useUser();

  // Show Landing if not Logged In or Return Map() once Logged In
  if (!isLoaded || !isSignedIn) {
    return <Landing />;
  } else {
    return (
      <>
        <section className="max-w-screen relative flex flex-col px-10 pb-16 text-green-900">
          <div className="pt-8 text-center text-3xl uppercase tracking-widest md:text-4xl lg:text-5xl xl:text-6xl">
            Welcome to our growing database of restaurants and cuisines!
          </div>
          <div className="tracking-tightest whitespace-nowrap pb-8 text-center text-2xl font-bold uppercase md:text-4xl md:tracking-wide lg:text-5xl xl:text-6xl">
            Find Food in San Antonio, Texas
          </div>
          {/* This is the filtering portion of the page */}
          <div className="flex justify-center gap-2 py-4 text-center">
            <label htmlFor="Filter">
              Search Name or Type:{" "}
              <input
                type="text"
                onChange={(event) => {
                  setFilter(event.target.value);
                }}
                className="bg-zinc-200 p-2 text-black"
              />
            </label>
          </div>
          {/* mapping the data to cards for readability. Along with filtering by restaurant name and type of food capability */}
          <div className="grid gap-6 pb-2 lg:grid-cols-2 xl:grid-cols-3">
            {data
              ?.filter((val) => {
                if (filter == "") {
                  return val;
                } else if (
                  val.type.toLowerCase().includes(filter.toLowerCase())
                ) {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(filter.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((r) => (
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
