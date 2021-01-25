import React, { useState, useEffect } from "react";
import CastBar from "./CastBar";

export default function AsyncCast({ url }) {
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    async function getCasts() {
      try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        const { cast } = data;

        if (cast) {
          const newCasts = cast
            .filter((item) => {
              if (item && item.profile_path != null) {
                return true;
              }
              return false;
            })
            .map((item) => {
              const { id, name, profile_path, known_for_department } = item;
              return {
                id: id,
                name: name,
                image: `https://image.tmdb.org/t/p/w220_and_h330_bestv2${profile_path}`,
                department: known_for_department,
              };
            });
          setCasts(newCasts);
        } else {
          setCasts([]);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getCasts();
  }, [url]);

  const isCast = casts.length > 0;
  return (
    <div className="">
      {isCast ? (
        <div>
          <CastBar cast={casts}></CastBar>
        </div>
      ) : (
        <div style={{ color: "white" }}>
          <h3 className="section-title">Cast</h3>
          No We don't have enough data to show the cast of this movie
        </div>
      )}
    </div>
  );
}
