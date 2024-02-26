import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { ComprasService } from './compras.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { CookiesVerifyGuard } from 'src/cookies-verify/cookies-verify.guard';


@UseGuards(CookiesVerifyGuard)
@Controller('compras')
export class ComprasController {
  constructor(private readonly comprasService: ComprasService) {}
  
  @Post() //cria uma compra
  async create(@Body() createCompraDto: CreateCompraDto, @Req() req : any) {
    return await this.comprasService.create({...createCompraDto}, {...req.user});
  }

  @Get()
  getShopcar( @Req() req : any) {
    return this.comprasService.getShopCar({...req.user});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comprasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompraDto: UpdateCompraDto) {
    return this.comprasService.update(+id, updateCompraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comprasService.remove(+id);
  }
}
