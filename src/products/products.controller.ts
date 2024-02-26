import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, HttpException, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { TokenServiceService } from 'src/middleware/token-service/token-service.service';
import { CookiesVerifyGuard } from 'src/cookies-verify/cookies-verify.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  async findAll() {
    return await this.productsService.findAll();
  }


  @Get('photo/:id')
  findPhotos(@Param('id') id: number) {
    return this.productsService.getImages(id);
  }

  @Get(':id')
  findProduct(@Param('id') id: number) {
    return this.productsService.getProdutct(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
