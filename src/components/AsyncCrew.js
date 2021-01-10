import React, { useState, useEffect } from "react";

export default function AsyncCrew({ url }) {
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    async function getCrew() {
      try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        const { crew } = data;

        if (crew) {
          const newCrew = crew
            .filter((item) => {
              if (
                item &&
                (item.job === "Director" ||
                  item.job === "Writer" ||
                  item.job === "Screenplay" ||
                  item.job === "Story")
              ) {
                return true;
              }
              return false;
            })
            .map((item) => {
              const { job, name } = item;
              return {
                name: name,
                job: job,
              };
            });
          setCrew(newCrew);
        } else {
          setCrew([]);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getCrew();
  }, [url]);
  return (
    <div className="">
      {crew.map((item) => {
        return (
          <div className="crewheader">
            <div className="crewcontent">
              <h3 className="crewname">{item.name}</h3>
              <p className="crewjob">{item.job}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
