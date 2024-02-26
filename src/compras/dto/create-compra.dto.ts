import { IsNumber, IsString } from "class-validator";
import { isFloat32Array } from "util/types";
export class CreateCompraDto {
    @IsNumber()
    idproduct: number
    @IsString()
    product: string
    @IsNumber()
    price: number
    @IsString()
    description: string
    @IsNumber()
    unid: number
}
