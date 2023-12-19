import React, { ChangeEvent, FormEvent, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { AppBar, CardActionArea, CircularProgress, Stack } from "@mui/material";
import { MovieItem, SearchItem } from "../models/movielist.model";

function MovieList() {
  const [list, setList] = useState<SearchItem[]>([]);
  const [detail, setDetail] = useState<MovieItem>();
  const [value, setValue] = useState<string>("");
  const [currentId, setCurrentId] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleSearch = (keyword: string) => {
    setIsLoading(true);
    fetch(
      `http://www.omdbapi.com/?s=${keyword}&apikey=cfca455&y=2023tomatoes=true`
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.Search) {
          setList(json.Search);
        } else {
          setList([]);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setList([]);
      });
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
  const handleSubmit = (e: FormEvent) => {
    if (value) handleSearch(value);
    e.preventDefault();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <AppBar position="static" sx={{ padding: "16px", marginBottom: "10px" }}>
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
      </AppBar>
      {isLoading && <CircularProgress />}
      {!isLoading && Boolean(list.length) && (
        <Stack
          gap={2}
          direction={{ md: "row", xs: "column" }}
          flexWrap={"wrap"}
        >
          {list.map((item) => (
            <Card key={item.imdbID} sx={{ width: 345 }}>
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
      {!isLoading && !Boolean(list.length) && <Stack>There is no movies</Stack>}
    </div>
  );
}

export default MovieList;
