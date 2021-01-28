import React, { useState, useEffect } from "react";
import AsyncMovies from "../components/AsyncMovies";
import "azure-storage/lib/azure-storage";
import { Select } from "antd";

export default function AsyncCollections() {
  const [netproviders, setNetproviders] = useState([]);
  const [selproviders, setSelproviders] = useState("");
  const [region, setRegion] = useState("US");
  const [mediaType, SetMediaType] = useState("movie");

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

  function handleRegion(value) {
    setRegion(value);
  }

  function handleMediaChange(value) {
    if (value.target.checked === true) {
      SetMediaType("tv");
    } else {
      SetMediaType("movie");
    }
  }

  return (
    <div className="asyncollection" id="searchmovies">
      <div className="moviebar-container">
        <div className="row">
          <div className="col-lg-2">
            <div className="switch-body">
              <h3 className="section-title">Streaming</h3>
              <div className="switch-container">
                <label className="switch btn-color-mode-switch">
                  <input
                    type="checkbox"
                    name="color_mode"
                    id="color_mode"
                    value="1"
                    onChange={handleMediaChange}
                  />
                  <label
                    for="color_mode"
                    data-on="TV Series"
                    data-off="Movies"
                    className="btn-color-mode-switch-inner"
                  ></label>
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <h3 className="section-title">Network providers</h3>{" "}
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
                      <div className="">
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
          <div className="col-lg-3">
            <h3 className="section-title">Select Region</h3>{" "}
            <Select
              style={{ width: "100%" }}
              placeholder="Select your region"
              defaultValue={"US"}
              onChange={handleRegion}
            >
              <option value="CA">CA</option>
              <option value="US">US</option>
              <option value="IN">IN</option>
              <option value="AR">AR</option>
              <option value="AT">AT</option>
              <option value="AU">AU</option>
              <option value="BE">BE</option>
              <option value="BR">BR</option>
              <option value="CH">CH</option>
              <option value="Cl">Cl</option>
              <option value="CO">CO</option>
              <option value="CZ">CZ</option>
              <option value="DE">DE</option>
              <option value="DK">DK</option>
              <option value="EC">EC</option>
              <option value="ES">ES</option>
              <option value="FI">FI</option>
              <option value="FR">FR</option>
            </Select>
          </div>
        </div>
      </div>

      <div id="comedy">
        <AsyncMovies
          genres="35"
          watch_providers={selproviders}
          movie_collection="Comedy"
          keywords=""
          region={region}
          media_type={mediaType}
        ></AsyncMovies>
      </div>
      <div id="ffriendhip">
        <AsyncMovies
          genres=""
          watch_providers={selproviders}
          movie_collection="Female Friendship"
          keywords="5248"
          region={region}
          media_type={mediaType}
        ></AsyncMovies>
      </div>
      <div id="adventure">
        <AsyncMovies
          genres="12"
          watch_providers={selproviders}
          movie_collection="Adventure"
          keywords=""
          region={region}
          media_type={mediaType}
        ></AsyncMovies>
      </div>
      <div id="romance">
        <AsyncMovies
          genres=""
          watch_providers={selproviders}
          movie_collection="Romance"
          keywords="9840"
          region={region}
          media_type={mediaType}
        ></AsyncMovies>
      </div>
      <div id="teen-movies">
        <AsyncMovies
          genres=""
          watch_providers={selproviders}
          movie_collection="Teen movies"
          keywords="11870"
          region={region}
          media_type={mediaType}
        ></AsyncMovies>
      </div>
      <div id="rom-com">
        <AsyncMovies
          genres="9799"
          watch_providers={selproviders}
          movie_collection="Rom-Com"
          keywords=""
          region={region}
          media_type={mediaType}
        ></AsyncMovies>
      </div>
      <div id="biography">
        <AsyncMovies
          genres="12"
          watch_providers={selproviders}
          movie_collection="Biography"
          keywords="5565"
          region={region}
          media_type={mediaType}
        ></AsyncMovies>
      </div>
      <div id="thriller">
        <AsyncMovies
          genres="53"
          watch_providers={selproviders}
          movie_collection="Thriller"
          keywords=""
          region={region}
          media_type={mediaType}
        ></AsyncMovies>
      </div>
      <div id="documentary">
        <AsyncMovies
          genres="99"
          watch_providers={selproviders}
          movie_collection="Documentary"
          keywords=""
          region={region}
          media_type={mediaType}
        ></AsyncMovies>
      </div>
      <div id="crime">
        <AsyncMovies
          genres="80"
          watch_providers={selproviders}
          movie_collection="Crime scenes"
          keywords=""
          region={region}
          media_type={mediaType}
        ></AsyncMovies>
      </div>
      <div id="mystery">
        <AsyncMovies
          genres="9648"
          watch_providers={selproviders}
          movie_collection="Mystery"
          keywords=""
          region={region}
          media_type={mediaType}
        ></AsyncMovies>
      </div>
      <div id="ScienceFiction">
        <AsyncMovies
          genres="878"
          watch_providers={selproviders}
          movie_collection="Science Fiction"
          keywords=""
          region={region}
          media_type={mediaType}
        ></AsyncMovies>
      </div>
      <div id="Horror">
        <AsyncMovies
          genres="27"
          watch_providers={selproviders}
          movie_collection="Horror"
          keywords=""
          region={region}
          media_type={mediaType}
        ></AsyncMovies>
      </div>
      <div id="martin">
        <AsyncMovies
          genres=""
          watch_providers={selproviders}
          movie_collection="MLK Inspiration"
          keywords="5835"
          region={region}
          media_type={mediaType}
        ></AsyncMovies>
      </div>
      <div id="politics">
        <AsyncMovies
          genres=""
          watch_providers={selproviders}
          movie_collection="the American president"
          keywords="8570"
          region={region}
          media_type={mediaType}
        ></AsyncMovies>
      </div>
    </div>
  );
}
