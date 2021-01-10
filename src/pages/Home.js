import React from "react";
import AsyncMovies from "../components/AsyncMovies";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WebsiteNavbar from "../components/WebsiteNavbar";
import WebFooter from "../components/WebFooter";
import AsyncCollections from "../components/AsyncCollections";
import AsyncTrending from "../components/AsyncTrending";
import SeachBar from "../components/SearchBar";

export default function Home() {
  return (
    <div>
      <WebsiteNavbar></WebsiteNavbar>
      <div className="section-searchbar">
        <SeachBar></SeachBar>
      </div>
      <div className="main-conatiner">
        <AsyncTrending></AsyncTrending>
        <AsyncCollections></AsyncCollections>
        <WebFooter></WebFooter>
      </div>
    </div>
  );
}
