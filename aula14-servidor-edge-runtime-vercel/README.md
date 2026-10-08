# Vercel Edge Runtime — Aula 14: Funções de Borda sem Servidor

Este repositório contém o guia prático e a implementação da **Aula 14** do projeto `aula-14-servidor-edge-runtime-vercel`, desenvolvido durante o curso de Desenvolvimento Backend.

Nesta aula, foi desenvolvida uma **Edge Function utilizando o Vercel Edge Runtime**, permitindo processar requisições HTTP diretamente na infraestrutura Edge.

A implementação demonstra como criar uma função capaz de retornar informações dinâmicas do ambiente de execução, como horário, região e tempo de processamento.

## Sumário

- [Objetivos da Aula](#objetivos-da-aula)
- [Fundamentos Teóricos](#fundamentos-teóricos)
  - [Edge Functions](#edge-functions)
  - [Edge Runtime](#edge-runtime)
  - [API Response](#api-response)
  - [Serverless](#serverless)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Guia Passo a Passo de Execução](#guia-passo-a-passo-de-execução)
  - [1. Configuração do Projeto](#1-configuração-do-projeto)
  - [2. Configuração do Edge Runtime](#2-configuração-do-edge-runtime)
  - [3. Implementação da Edge Function](#3-implementação-da-edge-function)
  - [4. Execução do Ambiente Local](#4-execução-do-ambiente-local)
  - [5. Teste da API](#5-teste-da-api)
  - [6. Deploy na Vercel](#6-deploy-na-vercel)
- [Código-Fonte Implementado](#código-fonte-implementado)
- [Guia Prático de Teste](#guia-prático-de-teste)
- [Exemplo de Resposta](#exemplo-de-resposta)
- [Dados Retornados](#dados-retornados)
- [Checklist de Validação](#checklist-de-validação)
- [Resultado da Aula](#resultado-da-aula)

## Objetivos da Aula

- Compreender o conceito de **Serverless Functions**.
- Conhecer o funcionamento das **Edge Functions**.
- Configurar uma função utilizando o **Vercel Edge Runtime**.
- Criar uma API capaz de retornar dados dinâmicos do ambiente de execução.
- Trabalhar com respostas HTTP utilizando a API `Response`.
- Retornar informações no formato JSON.
- Medir o tempo de execução da função.
- Executar a aplicação localmente utilizando a Vercel CLI.
- Testar a API utilizando o Insomnia.
- Realizar o deploy da função em produção na Vercel.

## Fundamentos Teóricos

### Edge Functions

**Edge Functions** são funções executadas em uma infraestrutura distribuída geograficamente, permitindo que o processamento ocorra mais próximo do usuário.

Esse modelo pode reduzir a latência e é adequado para aplicações que precisam executar funções de forma rápida e distribuída.

### Edge Runtime

O **Edge Runtime** é o ambiente utilizado para executar funções na infraestrutura Edge da Vercel.

A configuração do runtime é realizada diretamente no arquivo da função:

export const config = { runtime: 'edge', };


### API Response

A resposta da função é construída utilizando a API nativa `Response`, permitindo definir o conteúdo, o status HTTP e os cabeçalhos da resposta.

return new Response( JSON.stringify({ mensagem: 'FUNÇÃO executada com sucesso!', }), { status: 200, headers: { 'content-type': 'application/json', }, }, );


### Serverless

O modelo **Serverless** permite executar funções sem a necessidade de administrar diretamente um servidor tradicional.

A infraestrutura é gerenciada pela plataforma, que fica responsável por disponibilizar os recursos necessários para executar as funções conforme as requisições recebidas.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Vercel
- Vercel CLI
- Edge Functions
- Edge Runtime
- HTTP
- JSON
- Insomnia

## Estrutura do Projeto

aula-14-servidor-edge-runtime-vercel/ ├── api/ │ └── hora-servidor.ts # Edge Function ├── .gitignore └── package.json


O arquivo `hora-servidor.ts` contém a função responsável por receber a requisição e retornar as informações do ambiente de execução.

## Guia Passo a Passo de Execução

### 1. Configuração do Projeto

O projeto foi estruturado para utilizar a pasta `api`, onde ficam localizadas as funções que serão disponibilizadas como endpoints.

A função principal foi criada no arquivo:

api/hora-servidor.ts


### 2. Configuração do Edge Runtime

Para configurar a função como uma Edge Function, foi definido o runtime:

export const config = { runtime: 'edge', };


Essa configuração informa à Vercel que a função deve utilizar o ambiente Edge.

### 3. Implementação da Edge Function

O primeiro passo da função é registrar o momento inicial da execução:

const inicio = Date.now();


Esse valor será utilizado para calcular o tempo aproximado necessário para processar a requisição.

A função então cria uma resposta contendo as informações do ambiente:

return new Response( JSON.stringify({ mensagem: 'FUNÇÃO executada com sucesso!', horarioServidor: new Date().toLocaleString('pt-BR'), regiao: 'local-dev', tempoExecução: ${Date.now() - inicio}, }), { status: 200, headers: { 'content-type': 'application/json', }, }, );


### 4. Execução do Ambiente Local

Para executar o projeto localmente, foi utilizada a Vercel CLI.

Inicialmente, o projeto pode ser configurado utilizando:

vercel


Depois, para iniciar o ambiente de desenvolvimento:

vercel dev


A aplicação ficará disponível em:

http://localhost:3000


### 5. Teste da API

A função pode ser acessada através da seguinte rota:

GET http://localhost:3000/api/hora-servidor


O endpoint pode ser testado utilizando o **Insomnia** ou qualquer outro cliente HTTP.

### 6. Deploy na Vercel

Após concluir os testes locais, o projeto pode ser publicado em produção utilizando:

vercel --prod


Após o deploy, a função estará disponível através da rota:

/api/hora-servidor


## Código-Fonte Implementado

### Edge Function

Arquivo:

api/hora-servidor.ts


Implementação:

export const config = { runtime: 'edge', };

export default function handler() { const inicio = Date.now();

return new Response( JSON.stringify({ mensagem: 'FUNÇÃO executada com sucesso!', horarioServidor: new Date().toLocaleString('pt-BR'), regiao: 'local-dev', tempoExecução: ${Date.now() - inicio}, }), { status: 200, headers: { 'content-type': 'application/json', }, }, ); }


## Guia Prático de Teste

A API pode ser testada utilizando o Insomnia.

### Requisição

**Método:**

GET


**URL:**

http://localhost:3000/api/hora-servidor


Não é necessário enviar um corpo na requisição.

## Exemplo de Resposta

{ "mensagem": "FUNÇÃO executada com sucesso!", "horarioServidor": "06/10/2026, 15:50:49", "regiao": "local-dev", "tempoExecução": "10" }


## Dados Retornados

Campo	Descrição
mensagem	Confirma que a função foi executada corretamente
horarioServidor	Data e hora obtidas durante a execução
regiao	Região ou ambiente onde a função está sendo executada
tempoExecução	Tempo aproximado utilizado para executar a função
Checklist de Validação
Criar uma Edge Function.
Configurar o Vercel Edge Runtime.
Utilizar TypeScript.
Criar uma resposta HTTP utilizando Response.
Retornar os dados no formato JSON.
Registrar o horário da execução.
Calcular o tempo de execução.
Informar a região do ambiente.
Executar o projeto com vercel dev.
Testar a API utilizando o Insomnia.
Realizar o deploy utilizando vercel --prod.
Resultado da Aula
Ao final da aula, foi desenvolvida uma Edge Function funcional utilizando o Vercel Edge Runtime, capaz de receber requisições HTTP e retornar informações dinâmicas sobre o ambiente de execução.

A atividade permitiu compreender o funcionamento básico de Serverless Functions e Edge Functions, além de apresentar o fluxo completo de desenvolvimento de uma função na Vercel:

Desenvolvimento
      ↓
Configuração do Edge Runtime
      ↓
Execução local
      ↓
Teste da API
      ↓
Deploy na Vercel
      ↓
Edge Function em produção
Com isso, foi possível colocar em prática conceitos relacionados à execução de funções na infraestrutura Edge, criação de APIs HTTP, respostas JSON e publicação de aplicações utilizando a Vercel.
