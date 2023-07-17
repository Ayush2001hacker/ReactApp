const fetchCharacters = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await response.json();
    console.log(data);
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default fetchCharacters;
