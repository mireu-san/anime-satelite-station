import React, { useEffect, useState } from "react";
import "./styles/style.css";
import { AnimeList } from "./Components/AnimeList";
import { AnimeInfo } from "./Components/AnimeInfo";
import { AddBookmark } from "./Components/AddBookmark";
import { RemoveBookmark } from "./Components/RemoveBookmark";

function App() {
  const [search, setSearch] = useState("");
  const [animeData, setAnimeData] = useState();
  const [animeInfo, setAnimeInfo] = useState();
  const [myAnimeList, setMyAnimeList] = useState([]);

  const addTo = (anime) => {
    const index = myAnimeList.findIndex((myanime) => {
      return myanime.mal_id === anime.mal_id;
    });
    if (index < 0) {
      const newArray = [...myAnimeList, anime];
      setMyAnimeList(newArray);
    }
  };
  const removeFrom = (anime) => {
    const newArray = myAnimeList.filter((myanime) => {
      // this mal_id seems unique id for each anime title. change this if not working after changing the title.
      return myanime.mal_id !== anime.mal_id;
    });
    setMyAnimeList(newArray);
  };
  const getData = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&sfw&limit=6`
    );
    const resData = await res.json();
    // otherwise, it won't display on page
    setAnimeData(resData.data);
    // console.log(resData.data);
  };
  useEffect(() => {
    getData();
  }, [search]);

  return (
    <>
      <div className="header">
        <a href="">
          <h1>Anime Satelite Station</h1>
        </a>
        <form className="searchBar">
          <input
            type="search"
            placeholder="계속하려면 천천히 입력해보세요."
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="container">
        <div className="animeInfo">
          {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
        </div>
        <div className="anime-row">
          <h2 className="text-heading">Anime</h2>
          <div className="row">
            <AnimeList
              animelist={animeData}
              setAnimeInfo={setAnimeInfo}
              animeComponent={AddBookmark}
              handleList={(anime) => addTo(anime)}
            />
          </div>
          <h2 className="text-heading">Saved Anime List</h2>
          <div className="row">
            <AnimeList
              animelist={myAnimeList}
              setAnimeInfo={setAnimeInfo}
              animeComponent={RemoveBookmark}
              handleList={(anime) => removeFrom(anime)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
