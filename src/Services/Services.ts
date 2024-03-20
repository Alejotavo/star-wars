
//List of All Characters
const apiUrl = "https://swapi.py4e.com/api/people";

export async function fetchData(page: number = 1): Promise<any> {
    try {
      const response = await fetch(apiUrl + '?page=' + page);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }



//Service to fetch a specific Character
export async function fetchDataCharacter(id: string): Promise<any> {
    try {
      const response = await fetch(apiUrl + '/' + id);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = response.json();

      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  } 




  //List of All FILMS
const apiUrlFilms = "https://swapi.dev/api/films";

export async function fetchDataFilms(): Promise<any> {
    try {
      const response = await fetch(apiUrlFilms);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

    //List of All STARSHIPS
const apiUrlStarships = "https://swapi.dev/api/starships";

export async function fetchDataStarships(page: number = 1): Promise<any> {
    try {
      const response = await fetch(apiUrlStarships + '?page=' + page);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }