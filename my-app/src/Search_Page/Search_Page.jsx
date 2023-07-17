import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { TextField, Button } from "../MyComponents";
import { fetchCharacters } from "../Api";
import { DetailPage } from "../Detail_page";

const SearchPage = ({ onLogout, onSearch }) => {
  const [searchInput, setsearchInput] = useState("");
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [btnClick, setBtnClick] = useState(false);
  const [selectedData, setSelectedData] = useState([]);
  const handleSearchInputChange = (event) => {
    setsearchInput(event.target.value);
  };
  const handleBack = () => {
    setBtnClick(false);
    setsearchInput("");
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();

    onSearch(searchInput);
    setBtnClick(true);
    console.log(searchInput);

    const filterCharacter = characters.filter((character) =>
      character.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log(filterCharacter);
    setSelectedData(filterCharacter);

    // if (filterCharacter) {
    //   setFilteredCharacterId(filterCharacter.id);
    // }
  };
  const handleGetAllCharacters = () => {
    fetchData();
    setShowAll(true);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetchCharacters();

      setCharacters(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      {btnClick && selectedData.length === 1 ? (
        <DetailPage
          //characterId={filteredCharacterId}
          charDetails={selectedData}
          onBack={handleBack}
        ></DetailPage>
      ) : (
        <form onSubmit={handleSearchSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Search"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Search
          </Button>
          {!showAll ? (
            <Button onClick={handleGetAllCharacters} fullWidth>
              Show All Characters
            </Button>
          ) : (
            <></>
          )}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {characters.map((character) => (
                <li key={character.id}>{character.name}</li>
              ))}
            </ul>
          )}

          <Button onClick={onLogout} fullWidth>
            Logout
          </Button>
        </form>
      )}
    </Container>
  );
};

export default SearchPage;
