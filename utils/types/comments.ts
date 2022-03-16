export interface Comment{
    name:string;
    email:string;
    rating:number;
    comment:string
}
export interface FormComment{
    name?:string | undefined;
    email?:string | undefined;
    comment?:string | undefined;
}
export interface RatingsScore{
    ones:number;
    twos:number;
    threes:number;
    fours:number;
    fives:number
}