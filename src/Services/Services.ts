
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