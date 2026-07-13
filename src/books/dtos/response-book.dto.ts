import { Exclude, Expose, Transform } from "class-transformer";

export class BookResponseDTO{

    id : number;

    name : string;

    author: string;
 
    release_date : string;

    price : number;

    @Exclude()
    created_at : string;

    @Exclude()
    updated_at: string;


}