export interface DataPlanets {
    results: Planet[],
    count: number
  }

  export interface Planet {
    name: string,
    url:string,
    climate: string
  }