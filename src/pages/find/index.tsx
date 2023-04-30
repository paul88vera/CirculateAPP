import { useUser } from "@clerk/nextjs";
import Searched from "~/components/searched";
import { api } from "~/utils/api";

export default function Find() {
  const { data } = api.restaurants.getAll.useQuery();

  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded || !isSignedIn) {
    return (
      <div className="h-full bg-green-900 text-center text-3xl font-bold text-white">
        You need to be logged in to search
      </div>
    );
  }
  return (
    <div className="h-300 place-self-centertext-white flex w-full flex-col justify-center">
      <form className="no-wrap h-300 flex w-full flex-row justify-center place-self-center bg-green-900 py-20 text-white">
        <input
          type="text"
          placeholder="Search for your city"
          className="max-h-50 rounded border-0 py-1 px-2 text-black outline-0"
        />
      </form>
      {data?.map((r) => (
        <Searched
          key={r.id}
          title={r.name}
          type={r.type}
          city={r.address.city}
          rating={r.rating}
        />
      ))}
      ;
    </div>
  );
}
