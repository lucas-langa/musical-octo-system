# musical-octo-system (actually an OMDB API wrapper)
## prerequisites 
  - node v14.15.5
  - omdb api key
## setting-up
  - clone this repo
  - no external dependances required
  - run the command:
    APP_URL=http://localhost:8080 NODE_ENV=development API_KEY=GETANAPIKEYFROMOMDB URL=http://www.omdbapi.com/ npx node server.js
  - start consuming the api with your favorite tool/app i.e curl, insomnia, postman, somefrontendapp etc
  
 ## available endpoints
 
 ### GET seach movies by title /api/search/title=moviename
 You may also specify an optional page parameter for page number,  
 
 There is a totalResults propertry in the response that you can use to estimate your number of pages and each call returns 10 items.  
 eg /api/search/?title=batman
 *title* is a required parameter  
 page parameter defaults to 1 if not specified

 ```json
 {
  "Search": [
    {
      "Title": "Batman & Mr. Freeze: SubZero",
      "Year": "1998",
      "imdbID": "tt0143127",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTQ0NmUzMzAtODk5My00MzYwLThlYWEtY2NkOGNhODg5ZmY1XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
    },
    {
      "Title": "Batman: Gotham by Gaslight",
      "Year": "2018",
      "imdbID": "tt7167630",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTJhNjYyMGItODdhOC00ZTZmLTk1MTMtZDRhMmZkYTRiOGJkXkEyXkFqcGdeQXVyMTg2NjYzOA@@._V1_SX300.jpg"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "imdbID": "tt0450392",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYWRkMGNjYmQtMTJlMi00ODgyLWIyZGEtOTZkY2FlZWI3NzIwXkEyXkFqcGdeQXVyNDEyNjEzOTg@._V1_SX300.jpg"
    },
    {
      "Title": "Batman and Harley Quinn",
      "Year": "2017",
      "imdbID": "tt6556890",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTQzM2JkYTAtY2ExNi00N2ZhLWE5NDctMDQyMWU5ZjcwZDEwXkEyXkFqcGdeQXVyMjM5NDQzNTk@._V1_SX300.jpg"
    },
    {
      "Title": "Batman: Mystery of the Batwoman",
      "Year": "2003",
      "imdbID": "tt0346578",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BN2IwYTVlZGQtOTRhNy00MDI5LThmMTUtYWI1MGUwMGFkYzI1XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SX300.jpg"
    },
    {
      "Title": "Batman: Arkham Origins",
      "Year": "2013",
      "imdbID": "tt2842418",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzczNTkxODU5NF5BMl5BanBnXkFtZTgwNDcwMzU1MDE@._V1_SX300.jpg"
    },
    {
      "Title": "The Batman",
      "Year": "2004–2008",
      "imdbID": "tt0398417",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZjE2MzA0YTgtNjQ3MS00MjMxLWE2MzMtOGYzMTZjZjFiYTI0XkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
    },
    {
      "Title": "Batman vs Teenage Mutant Ninja Turtles",
      "Year": "2019",
      "imdbID": "tt9775360",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzk3MGZlYWQtNDU4Ny00Y2I5LTk2YmItM2QxYjFiMjM0ZmQxXkEyXkFqcGdeQXVyNDUzMTkzMDI@._V1_SX300.jpg"
    },
    {
      "Title": "The Batman vs. Dracula",
      "Year": "2005",
      "imdbID": "tt0472219",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTkyMTMwNjA3MV5BMl5BanBnXkFtZTcwNzE2NTI2OQ@@._V1_SX300.jpg"
    },
    {
      "Title": "The Batman Superman Movie: World's Finest",
      "Year": "1997",
      "imdbID": "tt0169590",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYzk0MTI0YmUtMDgwOC00M2U5LTgzMDktM2RhN2M3ZDVmOWFiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    }
  ],
  "totalResults": "437",
  "Response": "True"
}
 ```
 
 ### GET search movies by title and year /api/search/title=moviename&year=releaseyear  
 *title* is a required parameter  
 page parameter defaults to 1 if not specified
 eg /api/search/?title=deadpool&year=2020
 
 ```json
 {
  "Search": [
    {
      "Title": "Wolverine Vs. Deadpool: Back to Weapon X",
      "Year": "2020",
      "imdbID": "tt7017702",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNWVhOWU1NTMtNDY5My00NjQyLWI3ZTEtYTMzNTNkYzdkMDMyXkEyXkFqcGdeQXVyNjQyNjgwNjU@._V1_SX300.jpg"
    }
  ],
  "totalResults": "1",
  "Response": "True"
}
 ```
 
 looking for a specific movie?
 ### GET /api/imdbid/?id=ID
 If you know the IMDB id of a movie, you can specify it like the example below  
 *id* is required , year is an optional parameter
 eg /api/imdbid/?id=tt0372784
 ```json
 
{
  "Title": "Batman Begins",
  "Year": "2005",
  "Rated": "PG-13",
  "Released": "15 Jun 2005",
  "Runtime": "140 min",
  "Genre": "Action, Adventure",
  "Director": "Christopher Nolan",
  "Writer": "Bob Kane, David S. Goyer, Christopher Nolan",
  "Actors": "Christian Bale, Michael Caine, Ken Watanabe",
  "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
  "Language": "English, Mandarin",
  "Country": "United Kingdom, United States",
  "Awards": "Nominated for 1 Oscar. 13 wins & 79 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "8.2/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "84%"
    },
    {
      "Source": "Metacritic",
      "Value": "70/100"
    }
  ],
  "Metascore": "70",
  "imdbRating": "8.2",
  "imdbVotes": "1,334,626",
  "imdbID": "tt0372784",
  "Type": "movie",
  "DVD": "09 Sep 2009",
  "BoxOffice": "$206,852,432",
  "Production": "Warner Brothers, Di Bonaventura Pictures",
  "Website": "N/A",
  "Response": "True"
}
```
### GET /api/title/?title=moviename
eg /api/title/?title=batman
```json
{
  "Title": "Batman",
  "Year": "1989",
  "Rated": "PG-13",
  "Released": "23 Jun 1989",
  "Runtime": "126 min",
  "Genre": "Action, Adventure",
  "Director": "Tim Burton",
  "Writer": "Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)",
  "Actors": "Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl",
  "Plot": "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
  "Language": "English, French, Spanish",
  "Country": "USA, UK",
  "Awards": "Won 1 Oscar. Another 8 wins & 26 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "7.5/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "71%"
    },
    {
      "Source": "Metacritic",
      "Value": "69/100"
    }
  ],
  "Metascore": "69",
  "imdbRating": "7.5",
  "imdbVotes": "343,300",
  "imdbID": "tt0096895",
  "Type": "movie",
  "DVD": "24 Jul 2014",
  "BoxOffice": "$251,348,343",
  "Production": "Warner Brothers, Guber-Peters Company, PolyGram Filmed Entertainment",
  "Website": "N/A",
  "Response": "True"
}
```
### GET /api/title/?title=moviename&year=releaseyear
eg /api/title/?title=batman&year=2016
```json
{
  "Title": "Batman v Superman: Dawn of Justice",
  "Year": "2016",
  "Rated": "PG-13",
  "Released": "25 Mar 2016",
  "Runtime": "152 min",
  "Genre": "Action, Adventure, Sci-Fi",
  "Director": "Zack Snyder",
  "Writer": "Chris Terrio, David S. Goyer, Bob Kane (Batman created by), Bill Finger (Batman created by), Jerry Siegel (Superman created by), Joe Shuster (Superman created by), William Moulton Marston (character created by: Wonder Woman)",
  "Actors": "Ben Affleck, Henry Cavill, Amy Adams, Jesse Eisenberg",
  "Plot": "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.",
  "Language": "English",
  "Country": "USA",
  "Awards": "14 wins & 33 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "6.4/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "29%"
    },
    {
      "Source": "Metacritic",
      "Value": "44/100"
    }
  ],
  "Metascore": "44",
  "imdbRating": "6.4",
  "imdbVotes": "649,577",
  "imdbID": "tt2975590",
  "Type": "movie",
  "DVD": "25 Nov 2016",
  "BoxOffice": "$330,360,194",
  "Production": "Cruel and Unusual, Warner Bros., Syncopy, Atlas Entertainment, DC Entertainment",
  "Website": "N/A",
  "Response": "True"
}
```
Happy movie hunting! ;)
