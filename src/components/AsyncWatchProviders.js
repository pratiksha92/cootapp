import React, { useState, useEffect } from "react";

export default function AsyncWatchProviders({ id }) {
  const [streamprovider, setStreamprovider] = useState([]);
  const [rentprovider, setRentprovider] = useState([]);
  const [buyprovider, setBuyprovider] = useState([]);

  useEffect(() => {
    async function getStreamproviders() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=d5d1c00d59add379b91338c04b5755d7`
        );
        const data = await response.json();
        const { flatrate, rent, buy } = data.results.US;

        if (flatrate) {
          const newFlatrate = flatrate.map((item) => {
            const { logo_path } = item;
            return {
              logo_Path: `https://image.tmdb.org//t/p/original/${logo_path}`,
            };
          });
          setStreamprovider(newFlatrate);
        } else {
          setStreamprovider([]);
        }

        if (rent) {
          const newrent = rent.map((item) => {
            const { logo_path } = item;
            return {
              logo_Path: `https://image.tmdb.org//t/p/original/${logo_path}`,
            };
          });
          setRentprovider(newrent);
        } else {
          setRentprovider([]);
        }

        if (buy) {
          const newBuy = buy.map((item) => {
            const { logo_path } = item;
            return {
              logo_Path: `https://image.tmdb.org//t/p/original/${logo_path}`,
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
  }, [id]);

  const isStreamprovider = streamprovider.length > 0;
  const isRentprovider = rentprovider.length > 0;
  const isBuyprovider = buyprovider.length > 0;
  return (
    <div className="wprovider-section">
      {isStreamprovider ? <h3 className="">Now streaming on</h3> : <div></div>}
      {isStreamprovider ? (
        streamprovider.map((item) => {
          return (
            <div className="wprovider-content">
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
            <div className="wprovider-content">
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
            <div className="wprovider-content">
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
