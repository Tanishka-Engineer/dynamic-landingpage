import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import Logo1 from "../assets/img/Logo (6).png";
import Logo2 from "../assets/img/Logo (2).png";
import Logo3 from "../assets/img/Logo (3).png";
import Logo4 from "../assets/img/Logo (4).png";
import Logo5 from "../assets/img/Logo (5).png";
import Logo6 from "../assets/img/Logo (1).png";
import Logo7 from "../assets/img/Logo (2).png";
import { fetchAllClient } from "../api/server";

function Client() {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState("");

  //integration of all api's
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetchAllClient();
      if (!response.success) {
        throw new Error(response.message || "No data found");
      }
      // console.log("response", response.clients);
      setClient(response.clients);
    } catch (error) {
      toast.error(error.message || "Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="client-section text-center py-12 px-4">
      <h2 className="text-3xl font-bold font-roboto">Our Clients</h2>
      <p className="text-sm py-3">
        We have been working with some Fortune 500+ clients
      </p>

      {/* Responsive flex/grid */}
      {loading ? (
        "Loading..."
      ) : (
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-20 mt-8">
          {client.map((logo, index) => (
            <img
              key={logo._id || index}
              src={logo.logoURLs}
              alt={logo.clientName || `Client ${index + 1}`}
              className="h-6 sm:h-8 md:h-10 object-contain"
            />
          ))}
        </div>
      )}
    </div>
  );

  // //sim return
  // return (
  //   <div className="client-section text-center py-12 px-4">
  //     <h2 className="text-3xl font-bold font-roboto">Our Clients</h2>
  //     <p className="text-sm py-3">
  //       We have been working with some Fortune 500+ clients
  //     </p>

  //     {/* Responsive flex/grid */}
  //     {loading ? (
  //       "Loading..."
  //     ) : (
  //       <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-20 mt-8">
  //         {logos.map((logo, index) => (
  //           <img
  //             key={index}
  //             src={logo}
  //             alt={`Client ${index + 1}`}
  //             className="h-6 sm:h-8 md:h-10 object-contain"
  //           />
  //         ))}
  //       </div>
  //     )}
  //   </div>
  // );
}

export default Client;
