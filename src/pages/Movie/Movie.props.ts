interface Genres {
    name: string
}
export interface MovieProps {
    id: number
    name : string;
    description: string;
    movieLength: number; 
    type: string; 
    premiere: {
        world: Date
    };
    rating: {
        imdb: number;
    }; 
    poster: {
        url: string;
    };
    genres: Genres[];
}
