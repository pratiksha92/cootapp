import React, { useState, useEffect } from "react";
import AsyncMovies from "../components/AsyncMovies";
import "azure-storage/lib/azure-storage";
import { Select } from "antd";

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
          function (error, result) {
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
  }

  return (
    <div className="asyncollection" id="searchmovies">
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
              <option value={item.id} key={item.id}>
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
      <div id="martin">
        <AsyncMovies
          genres=""
          watch_providers={selproviders}
          movie_collection="MLK Inspiration"
          keywords="5835"
        ></AsyncMovies>
      </div>
      <div id="politics">
        <AsyncMovies
          genres=""
          watch_providers={selproviders}
          movie_collection="the American president"
          keywords="8570"
        ></AsyncMovies>
      </div>
      <div id="comedy">
        <AsyncMovies
          genres="35"
          watch_providers={selproviders}
          movie_collection="Comedy"
          keywords=""
        ></AsyncMovies>
      </div>
      <div id="adventure">
        <AsyncMovies
          genres="12"
          watch_providers={selproviders}
          movie_collection="Adventure"
          keywords=""
        ></AsyncMovies>
      </div>
      <div id="thriller">
        <AsyncMovies
          genres="53"
          watch_providers={selproviders}
          movie_collection="Thriller"
          keywords=""
        ></AsyncMovies>
      </div>
      <div id="documentary">
        <AsyncMovies
          genres="99"
          watch_providers={selproviders}
          movie_collection="Documentary"
          keywords=""
        ></AsyncMovies>
      </div>
      <div id="crime">
        <AsyncMovies
          genres="80"
          watch_providers={selproviders}
          movie_collection="Crime"
          keywords=""
        ></AsyncMovies>
      </div>
      <div id="mystery">
        <AsyncMovies
          genres="9648"
          watch_providers={selproviders}
          movie_collection="Mystery"
          keywords=""
        ></AsyncMovies>
      </div>
      <div id="ScienceFiction">
        <AsyncMovies
          genres="878"
          watch_providers={selproviders}
          movie_collection="Science Fiction"
          keywords=""
        ></AsyncMovies>
      </div>
      <div id="Horror">
        <AsyncMovies
          genres="27"
          watch_providers={selproviders}
          movie_collection="Horror"
          keywords=""
        ></AsyncMovies>
      </div>
    </div>
  );
}
