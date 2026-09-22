#  Nest.js - Aula 07: Estrutura de Projeto e Fundamentos

Este repositório contém o código-fonte da atividade prática da **Aula 07: Estrutura de Projeto e Fundamentos de Nest.js** do curso de **Desenvolvimento Backend**. 

O objetivo do projeto é consolidar os fundamentos da arquitetura Nest.js, abordando o padrão opinativo, modularidade, injeção de dependências e a configuração do ambiente de desenvolvimento.

---

##  Sumário
- [Objetivos de Aprendizagem](#-objetivos-de-aprendizagem)
- [Fundamentos Teóricos](#-fundamentos-teóricos)
  - [O que é um Framework Opinativo?](#o-que-é-um-framework-opinativo)
  - [Estrutura do Diretório `src/`](#estrutura-do-diretório-src)
  - [Arquivos de Configuração](#arquivos-de-configuração)
  - [ Atividade Prática: O Arquiteto de Software](#️-atividade-prática-o-arquiteto-de-software)
  - [Requisitos](#requisitos)
  - [Passo a Passo e Códigos](#passo-a-passo-e-códigos)
  - [ Como Executar o Projeto](#-como-executar-o-projeto)
  - [ Checklist de Validação](#-checklist-de-validação)

---

##  Objetivos de Aprendizagem

- Compreender as limitações do Node.js puro e as vantagens de adotar um framework opinativo.
- Conhecer os pilares do Nest.js: **TypeScript nativo**, **Modularidade** e **Injeção de Dependências (DI)**.
- Entender a estrutura de arquivos da pasta `src/` e os arquivos de configuração do projeto.
- Utilizar a Nest CLI para criar, estruturar e executar uma aplicação backend.

---

##  Fundamentos Teóricos

### O que é um Framework Opinativo?
Um framework opinativo estabelece padrões claros de arquitetura, organização e convenções de nomenclatura. Isso facilita o trabalho em equipe, garante consistência no código e melhora a escalabilidade da aplicação.

### Estrutura do Diretório `src/`

| Arquivo | Descrição / Responsabilidade |
| :--- | :--- |
| **`main.ts`** | Ponto de entrada (*bootstrap*) da aplicação. |
| **`app.module.ts`** | Módulo raiz que organiza, importa e registra as dependências do projeto. |
| **`app.controller.ts`** | Responsável por receber as requisições HTTP, tratar parâmetros e mapear rotas via decorators. |
| **`app.service.ts`** | Onde reside a lógica de negócio da aplicação. |

### Arquivos de Configuração

| Arquivo | Função no Projeto |
| :--- | :--- |
| **`package.json`** | Manifesto do projeto, scripts de execução e gerenciamento de dependências. |
| **`tsconfig.json`** | Configurações do compilador TypeScript. |
| **`nest-cli.json`** | Automação e configurações de build da Nest CLI. |

---

##  Atividade Prática: O Arquiteto de Software

** Duração Estimada:** 30 minutos

### Requisitos
1. Instalar a Nest CLI globalmente e criar o projeto `projeto-aula-07`.
2. Identificar a rota padrão ("Hello World!").
3. Alterar o prefixo do Controller para `/api` utilizando o decorator `@Controller('api')`.
4. Alterar a mensagem de retorno para `"Servidor Nest.js Ativo"`.
5. Executar a aplicação via `npm run start:dev` e validar os endpoints.

---

### Passo a Passo e Códigos

#### Passo 1: Instalação e Criação do Projeto (Terminal)

```bash
# 1. Instalar a CLI do Nest.js de forma global
npm install -g @nestjs/cli

# 2. Criar um novo projeto
nest new projeto-aula-07

# 3. Acessar o diretório do projeto
cd projeto-aula-07