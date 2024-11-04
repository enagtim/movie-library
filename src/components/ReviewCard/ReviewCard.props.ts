export interface ReviewCardProps {
    id: number;
    title: string; 
    review: string;
    createdAt: Date | string;
};
export interface ReviewResponse {
    docs: ReviewCardProps[]
}