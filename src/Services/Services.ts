/* 
fetch("https://swapi.dev/api/people/")
.then((response) => response.json())
.then((apiData) => console.log(apiData))
.catch((e) => console.log(e.message))
.finally(() => {

}); */

const apiUrl = "https://swapi.dev/api/people";

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