import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, guestCount } = router.query;
  //capitalize first letter of each word and make all other letters lowercase
  const formatString = (str) =>
    str
      .toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
  //render "Guests" if guestCount is plural, "Guest" if guestCount is singlular
  const formatGuest = guestCount > 1 ? "Guests" : "Guest";
  //format date range
  const formatStartDate = format(new Date(startDate), "MMMM dd, yyyy");
  const formatEndDate = format(new Date(endDate), "MMMM dd, yyyy");
  const range = `${formatStartDate} - ${formatEndDate}`;

  return (
    <div>
      <Header placeholder={`${formatString(location)} | ${range} | ${guestCount} ${formatGuest}`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            {" "}
            300+ Stays from {range} for {guestCount} {formatGuest}{" "}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {formatString(location)}</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="filter-btn"> Cancellation Flexibility </p>
            <p className="filter-btn"> Type of Place </p>
            <p className="filter-btn"> Price </p>
            <p className="filter-btn"> Rooms and Beds </p>
            <p className="filter-btn"> More filters </p>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://api.npoint.io/1171ef336cbd0d0736b4").then((res) =>
    res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
