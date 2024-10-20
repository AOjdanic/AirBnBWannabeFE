type Listing = {
  name: string;
};

export async function ListingList() {
  const fetchListings: () => Promise<Listing[]> = async () => {
    const res = await fetch(
      "http://127.0.0.1:8000/api/v1/listings?sort=-maximum_nights,last_scraped&page=1&limit=50&fields=name",
    );

    const listings = await res.json();

    return listings.data.listings;
  };

  const listings = await fetchListings();

  return (
    <div className="flex flex-col h-screen">
      {listings?.map((listing) => (
        <div className="flex flex-1" key={listing.name}>
          {listing.name}
        </div>
      ))}
    </div>
  );
}
