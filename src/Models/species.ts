export interface DataSpecies {
    results: Specie[],
    count: number
  }

  export interface Specie {
    name: string,
    url:string,
    classification: string
  }