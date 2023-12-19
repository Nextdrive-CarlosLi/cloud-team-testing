import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
interface SearchItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
interface MovieItem {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface Rating {
  Source: string;
  Value: string;
}
function MovieList() {
  const [list, setList] = useState<SearchItem[]>([]);
  const [detail, setDetail] = useState<MovieItem>();
  const [value, setValue] = useState<string>("");
  const [currentId, setCurrentId] = useState<string>();
  const handleSearch = (keyword: string) => {
    fetch(
      `http://www.omdbapi.com/?s=${keyword}&apikey=cfca455&y=2023tomatoes=true`
    )
      .then((response) => response.json())
      .then((json) => setList(json.Search))
      .catch((error) => console.error(error));
  };
  const handleGetDetail = (id: string) => {
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=cfca455&y=2023tomatoes=true`)
      .then((response) => response.json())
      .then((json) => {
        setDetail(json);
        setCurrentId(id);
      })
      .catch((error) => console.error(error));
  };
  const handleSubmit = (e: any) => {
    if (value) handleSearch(value);
    e.preventDefault();
  };
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input a movie title:
          <input
            type="text"
            value={value}
            data-testid="input-field"
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Search" data-testid="search-btn" />
      </form>
      {Boolean(list.length) && (
        <Stack spacing={2}>
          {list.map((item) => (
            <Card key={item.imdbID} sx={{ maxWidth: 345 }}>
              <CardActionArea
                onClick={() => handleGetDetail(item.imdbID)}
                data-testid={`movie-card-${item.imdbID}`}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={item.Poster}
                  alt={item.Title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Movie
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.Title}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    Year: {item.Year}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Short Summary
                  </Typography>
                  {currentId === item.imdbID && detail && (
                    <Typography variant="body2" color="text.secondary">
                      <span data-testid="detail-box">Details</span>
                      <br />
                      Director:{detail?.Director}
                      <br />
                      Actor:{detail.Actors}
                      <br />
                      Duration:{detail.Runtime}
                    </Typography>
                  )}
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Stack>
      )}
    </div>
  );
}

export default MovieList;
