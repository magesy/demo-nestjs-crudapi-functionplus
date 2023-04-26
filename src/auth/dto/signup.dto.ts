import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString, MinLength, minLength } from "class-validator";

export class SignUpDto {
    
    @IsNotEmpty()
    @IsString()
    readonly name : string;

    @IsNotEmpty()
    @IsEmail({}, { message: 'email is wrong'})
    readonly email : string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    readonly password : string;
}