import React, { useState, useEffect } from "react";
import AsyncMovies from "../components/AsyncMovies";
import "azure-storage/lib/azure-storage";
import { Select } from "antd";
import { Card } from "antd";
const { Meta } = Card;

export default function AsyncCollections() {
  const [netproviders, setNetproviders] = useState([]);
  const [selproviders, setSelproviders] = useState("");

  useEffect(() => {
    async function getNetproviders() {
      try {
        var azure = require("azure-storage");
        var tableUri = "https://moviedbdata.table.core.windows.net";
        var tableService = azure.createTableServiceWithSas(
          tableUri,
          "?sv=2019-12-12&ss=t&srt=o&sp=rwdlacu&se=2022-01-08T09:00:12Z&st=2021-01-08T01:00:12Z&spr=https&sig=W%2BAlPw6W2fUzxHRYnLPQbdor8si6iWrUTkILOKsZEwI%3D"
        );

        var tableQuery = new azure.TableQuery().top(200);
        tableService.queryEntities(
          "networkproviders",
          tableQuery,
          null,
          function (error, result, response) {
            if (error) {
              // Query entities error
              setNetproviders([]);
              console.log(error);
            } else {
              if (result.entries) {
                const newNetproviders = result.entries.map((item) => {
                  const { id, Name, Logo } = item;
                  return {
                    id: id._,
                    value: Name._,
                    logo: `https://image.tmdb.org//t/p/original${Logo._}`,
                  };
                });
                setNetproviders(newNetproviders);
                console.log(newNetproviders);
              } else {
                setNetproviders([]);
              }
            }
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
    getNetproviders();
  }, []);

  function handleChange(value) {
    let fvalue = "";
    for (let i = 0; i < value.length; i++) {
      fvalue = fvalue.concat(value[i]).concat("|");
    }
    setSelproviders(fvalue);
    console.log(fvalue);
  }

  return (
    <div className="asyncollection">
      <div className="moviebar-container">
        <h3 className="section-title">Movies for You</h3>{" "}
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Select your network"
          defaultValue={[]}
          onChange={handleChange}
        >
          {netproviders.map((item) => {
            return (
              <option value={item.id}>
                {
                  <div className="pratiksha">
                    <img
                      className="option-image"
                      alt="example"
                      src={item.logo}
                      width="50"
                      height="50"
                    />
                  </div>
                }
              </option>
            );
          })}
        </Select>
      </div>
      <AsyncMovies
        genres="35"
        watch_providers={selproviders}
        movie_collection="Comedy Movies"
      ></AsyncMovies>
      <AsyncMovies
        genres="10752"
        watch_providers={selproviders}
        movie_collection="War Movies"
      ></AsyncMovies>
      <AsyncMovies
        genres="878"
        watch_providers={selproviders}
        movie_collection="Science Fiction"
      ></AsyncMovies>
      <AsyncMovies
        genres="27"
        watch_providers={selproviders}
        movie_collection="Horror"
      ></AsyncMovies>
    </div>
  );
}
