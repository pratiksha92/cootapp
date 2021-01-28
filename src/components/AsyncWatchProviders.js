import React, { useState, useEffect } from "react";

export default function AsyncWatchProviders({ id, region, media_type }) {
  const [streamprovider, setStreamprovider] = useState([]);
  const [rentprovider, setRentprovider] = useState([]);
  const [buyprovider, setBuyprovider] = useState([]);

  useEffect(() => {
    async function getStreamproviders() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${media_type}/${id}/watch/providers?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );
        const data = await response.json();
        const { flatrate, rent, buy } = data.results[`${region}`];

        if (flatrate) {
          const newFlatrate = flatrate.map((item) => {
            const { logo_path, provider_id } = item;
            return {
              logo_Path: `https://image.tmdb.org//t/p/original/${logo_path}`,
              flatrateId: `flatrate${provider_id}`,
            };
          });
          setStreamprovider(newFlatrate);
        } else {
          setStreamprovider([]);
        }

        if (rent) {
          const newrent = rent.map((item) => {
            const { logo_path, provider_id } = item;
            return {
              logo_Path: `https://image.tmdb.org//t/p/original/${logo_path}`,
              rentId: `rent${provider_id}`,
            };
          });
          setRentprovider(newrent);
        } else {
          setRentprovider([]);
        }

        if (buy) {
          const newBuy = buy.map((item) => {
            const { logo_path, provider_id } = item;
            return {
              logo_Path: `https://image.tmdb.org//t/p/original/${logo_path}`,
              buyId: `buy${provider_id}`,
            };
          });
          setBuyprovider(newBuy);
        } else {
          setBuyprovider([]);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getStreamproviders();
  }, [id, region, media_type]);

  const isStreamprovider = streamprovider.length > 0;
  const isRentprovider = rentprovider.length > 0;
  const isBuyprovider = buyprovider.length > 0;
  return (
    <div className="wprovider-section">
      {isStreamprovider ? <h3 className="">Now streaming on</h3> : <div></div>}
      {isStreamprovider ? (
        streamprovider.map((item) => {
          return (
            <div className="wprovider-content" key={item.flatrateId}>
              <img
                alt="logo"
                className="provider-logo"
                src={item.logo_Path}
                width="50"
                height="50"
              ></img>
            </div>
          );
        })
      ) : (
        <div> </div>
      )}
      {isRentprovider ? (
        <h3 className="wprovider-title">Rent on</h3>
      ) : (
        <div></div>
      )}
      {isRentprovider ? (
        rentprovider.map((item) => {
          return (
            <div className="wprovider-content" key={item.rentId}>
              <img
                alt="logo"
                className="provider-logo"
                src={item.logo_Path}
                width="50"
                height="50"
              ></img>
            </div>
          );
        })
      ) : (
        <div> </div>
      )}
      {isBuyprovider ? (
        <h3 className="wprovider-title">Buy on</h3>
      ) : (
        <div></div>
      )}
      {isBuyprovider ? (
        buyprovider.map((item) => {
          return (
            <div className="wprovider-content" key={item.buyId}>
              <img
                alt="logo"
                className="provider-logo"
                src={item.logo_Path}
                width="50"
                height="50"
              ></img>
            </div>
          );
        })
      ) : (
        <div> </div>
      )}
    </div>
  );
}
