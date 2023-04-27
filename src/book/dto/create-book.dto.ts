import { IsEmpty, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Category } from "../schemas/book.schema"
import { User } from "../../auth/schemas/user.schema";

export class createBookDto {
    
    @IsNotEmpty()
    @IsString()
    readonly title : string;

    @IsNotEmpty()
    @IsString()
    readonly description : string;

    @IsNotEmpty()
    @IsString()
    readonly author : string;

    @IsNotEmpty()
    @IsNumber()
    readonly price : number;

    @IsNotEmpty()
    @IsEnum(Category, {message : 'category is wrong'})
    readonly category : Category;

    @IsEmpty({
        message: 'cannot empty'
    })
    readonly user : User;
}