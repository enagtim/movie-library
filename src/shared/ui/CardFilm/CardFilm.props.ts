export interface CardFilmProps {
    id: number,
    name: string,
    rating: {
        imdb: number;
    }, 
    poster: {
        url: string;
    }, 
}

export interface FilmsResponse {
    docs: CardFilmProps[];
}