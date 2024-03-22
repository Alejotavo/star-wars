export interface DataFilms {
    results: Film[]
  }

  export interface Film {
    title: string;
    url: string;
    director: string;
    opening_crawl: string
  }