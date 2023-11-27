/* 
fetch("https://swapi.dev/api/people/")
.then((response) => response.json())
.then((apiData) => console.log(apiData))
.catch((e) => console.log(e.message))
.finally(() => {

}); */



//List of All Characters
const apiUrl = "https://swapi.dev/api/peple";

export async function fetchData(): Promise<any> {
    try {
      const response = await fetch(apiUrl);

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