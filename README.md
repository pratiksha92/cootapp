# [FlickWall](https://www.flickwall.com/) - wall for collection of movies.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It uses [TMDB](https://www.themoviedb.org/) API for movie search and fetching details for movies.

## FlickWall Architecure Diagram

![Flickwall Architecure Diagram](https://github.com/pratiksha92/cootapp/blob/main/public/flickwall-architecure.jpg)

## Code 
Client side code is written in react JS and it uses github for source control. Github CI/CD workflow is used to upload build to Azure Static Web APP. API secrets are stored in github secrets and workflow initializes the env variable. 

## API
FlickWall uses TMDB API to discover movies and fetch the movie details. Flickwall also uses search API by Azure to search movies based on movie name. 

## Site Reliability
Usage pattern and web performance is pushed to azure insights which is used to monitor performance and improve user experience. Alerts are created to monitor page views.

## Features

Flickwall provides different features to easily discover movies to watch next and on which platform they are available. 

### Trending collection

Movies which are currently trending on a particular day in the US region. This is the first carousal diplayed on the wall. 

### Search movies

Search movies uses index built with movies database from TMDB. This uses Azure Search Service to build the index and search using API. 

### Filter collections based on watch providers

Select watch providers and it will filter all collections on the wall based upon selected watch providers. This allows easy experience to search collection for your subscribed watch providers and also allows you to explore collection in new watch provider. 

## Future work

Future work involves includin TV series in the collection, ability to select region, understand usage pattern using azure application insights and improve the experience. 

## Tech blog:
https://pratikshabhangdiya.medium.com/setup-root-level-custom-domain-for-azure-static-web-app-preview-5a110d1364de
