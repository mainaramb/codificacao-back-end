import { IsString, IsNotEmpty, IsInt, Min, IsArray, ArrayMinSize } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class CreateAlunoDto {

    @ApiProperty({
        example: 'Matheus Souza',
        description: 'Nome do aluno',
    })
    @IsString()
    @IsNotEmpty({
        message:'O nome é o obrigatório e não pode estar vazio!'
    })
    nome: string;


    @IsInt({
        message:'A idade deve ser um númiro inteiro!'
    })

    @Min(0,{
        message:'A idade não pode ser negativa.'
    })
        @ApiProperty({
        example: 30,
        description: 'Idade do aluno'
    })
    idade: number;

    @ApiProperty({
    example:'9999',
    description: 'Matrícula do aluno'
    })
    @IsString()
    @IsNotEmpty({
        message:'A Matricula é Obrigatória!'
    })
    matricula: string;

    @ApiProperty({
        example: ['Ciência da Computação', 'Letras Português'],
        description: 'Cursos em que o aluno está matriculado'
    })
    @IsString({each: true, message:'Cada curso deve ser um texto'})
    @IsArray()
    @ArrayMinSize(1,{
        message:'O aluno deve estar matriculado em pelo menos um curso.'
    })
    cursos: string[];
}