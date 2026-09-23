import {Controller, Get, Post, Body, Patch, Delete, Param, HttpCode} from '@nestjs/common';
import { CriarConvidadoDto } from './criar-convidado.dto.js';
import { convidadosService } from './convidado.service.js';

@Controller('convidados')
export class ConvidadosController {

    constructor(private readonly convidadoService : convidadosService){}
    @Get()
    listarConvidados(){
        return this.convidadoService.listaConvidados();
    }
      @Post()
    criarConvidado(@Body() criarConvidadoDto: CriarConvidadoDto){
        console.log('[OPERADORA NAYRA] Novo convidado(a) Registradado(a): ${criarConvido.nome}' );

        return {
            mensagem: 'Convidado(a) ${criarConvidadoDto.nome}, foi adicionado(a) com sucesso!',
            dados: criarConvidadoDto
        };

    }
    @Patch(':id')
    atualizarIdade(@Param('id') id: string, @Body('idade') idade: number){
        console.log(`[ADIMISTRADOR] Atualizando idade de ID ${id}`);
        return this.convidadoService.atualizarIdade(+id, idade);
    }

    @Delete(':id')
    @HttpCode(204)
    removerConvidado(@Param('id') id:string){
        console.log(`[ADMINISTRADOR] Convidado com ID ${id} removido com sucesso!`);
        this.convidadoService.removerConvidadoLista(+id);
    }
     }