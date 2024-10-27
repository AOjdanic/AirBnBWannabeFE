"use client";

import { useEffect, useState } from "react";
import { Api } from "@/services/api";

type Listing = {
  name: string;
  listing_url: string;
  property_type: string;
};

export function ListingList() {
  const [listings, setListings] = useState<Listing[] | []>([]);

  useEffect(() => {
    const fetchListings: () => Promise<void> = async () => {
      const res = await Api.get(
        "/listings?sort=-maximum_nights,last_scraped&page=1&limit=50&fields=name,property_type,listing_url",
      );

      setListings(res.data.data.listings);
    };
    fetchListings();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {listings?.map((listing) => (
        <div className="flex flex-1" key={listing.name}>
          <p>{listing.name}</p>
          <p>{listing.property_type}</p>
        </div>
      ))}
    </div>
  );
}
