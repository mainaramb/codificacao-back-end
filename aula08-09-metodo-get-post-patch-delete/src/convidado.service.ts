import { Injectable, NotFoundException } from "@nestjs/common";

export class convidadosService {
    private convidados = [
        {id: 1, nome: 'Rebeca', idade: 20},
        {id: 2, nome: 'Liam', idade: 18},
        {id: 3, nome: 'Cauê', idade: 18},
        {id: 4, nome: 'Jamilly', idade: 22},
        {id: 5, nome: 'Alvaro', idade: 11}
    ];
    listaConvidados(){
        return this.convidados;
    }

    encontrarConvidado(id: number){
        const convidado = this.convidados.find((buscarConvidado) => buscarConvidado.id === id);
        if(!convidado){
            throw new NotFoundException ('[ADMINISTRADOR] convidado com ID ${id} não encontrado!');
        }
        return convidado;
    }

    atualizarIdade(id: number, idade: number){
        const convidado = this.encontrarConvidado(id);
        convidado.idade = idade;
        return convidado;
    }
    removerConvidadoLista(id: number){
        const index = this.convidados.findIndex((convidado) => convidado.id === id);
        if(index === -1) {
            throw new NotFoundException(`[ADMINISTRADOR] convidado com ID ${id} não encontrado!`);
        }
        this.convidados.splice(index, 1);
    }
}