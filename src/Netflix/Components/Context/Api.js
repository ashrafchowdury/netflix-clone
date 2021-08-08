import React from 'react'

const ApiKey = `4bb0a98d9a5c90ff1399c3a8937544a7`;
// let callApi = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4bb0a98d9a5c90ff1399c3a8937544a7&page=1`;

export const Api = () =>{
    let trending = `https://api.themoviedb.org/3/trending/all/week?api_key=4bb0a98d9a5c90ff1399c3a8937544a7&language=en`;
    let Tv = `https://api.themoviedb.org/3/discover/tv?api_key=4bb0a98d9a5c90ff1399c3a8937544a7&with_networks=213`;
    let top_rated = `https://api.themoviedb.org/3/discover/movie?sort_by=top_rated&api_key=4bb0a98d9a5c90ff1399c3a8937544a7&language=en`;
}


