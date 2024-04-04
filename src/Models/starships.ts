export interface DataStarships {
    results: Starship[],
    count: number
  }

  export interface Starship {
    name: string,
    url: string,
    manufacturer: string,
    max_atmosphering_speed: string
  }