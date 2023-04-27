import { IsEmpty, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Category } from "../schemas/book.schema"
import { User } from "../../auth/schemas/user.schema";

export class updateBookDto {
    
    @IsOptional()
    @IsString()
    readonly title : string;

    @IsOptional()
    @IsString()
    readonly description : string;

    @IsOptional()
    @IsString()
    readonly author : string;

    @IsOptional()
    @IsNumber()
    readonly price : number;

    @IsOptional()
    @IsEnum(Category, {message : 'category is wrong'})
    readonly category : Category;

    @IsEmpty({
        message: "user id is cannot pass"
    })
    readonly user : User;
}