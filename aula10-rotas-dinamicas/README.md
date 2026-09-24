#  Nest.js - Aula 10: Rotas Dinâmicas, Parâmetros e Pipes de Transformação

Este repositório contém o código desenvolvido na **Aula 10** do curso de **Desenvolvimento Backend com Nest.js**, onde foi criado o projeto `aula-10-rotas-dinamicas`.

Nesta aula, exploramos o conceito de **Rotas Dinâmicas** na prática através do módulo de gestão de **Jogos**, utilizando parâmetros na URL (`@Param`), conversão/validação de tipos com o Pipe nativo `ParseIntPipe` e tratamento de exceções com o `NotFoundException`.

---

##  Sumário
- [Objetivos da Aula](#-objetivos-da-aula)
- [Fundamentos Teóricos](#-fundamentos-teóricos)
- [ Estrutura do Projeto](#️-estrutura-do-projeto)
- [ Código-Fonte Implementado](#-código-fonte-implementado)
  - [1. Service (`src/jogos.service.ts`)](#1-service-srcjogosservicets)
  - [2. Controller (`src/jogos.controller.ts`)](#2-controller-srcjogoscontrollerts)
  - [3. App Service (`src/app.service.ts`)](#3-app-service-srcappservicets)
  - [4. App Module (`src/app.module.ts`)](#4-app-module-srcappmodulets)
- [ Como Testar os Endpoints](#-como-testar-os-endpoints)
- [ Checklist de Validação](#-checklist-de-validação)

---

##  Objetivos da Aula

- Criar uma nova aplicação Nest.js com o comando `nest new aula-10-rotas-dinamicas`.
- Mapear e estruturar **Rotas Dinâmicas** utilizando a sintaxe de parâmetros (`:id`).
- Capturar parâmetros da requisição via decorator `@Param()`.
- Utilizar o Pipe nativo **`ParseIntPipe`** para converter e validar dados da URL.
- Lançar exceções HTTP adequadas (`NotFoundException` / `404 Not Found`) para recursos inexistentes.

---

##  Fundamentos Teóricos

* **Rotas Dinâmicas:** Permitem capturar partes variáveis do caminho da URL (ex: `/jogos/1`, `/jogos/2`), facilitando a busca de recursos específicos no servidor.
* **Decorator `@Param()`:** Utilizado no Controller para extrair o valor da variável de rota definida no decorator HTTP (ex: `@Get(':id')`).
* **`ParseIntPipe`:** Pipe embutido do Nest.js que intercepta o parâmetro recebido como `string` na URL e o converte automaticamente para um tipo `number`. Caso o valor enviado não seja um número (ex: `/jogos/abc`), lança uma exceção `400 Bad Request`.
* **`NotFoundException`:** Classe de erro do Nest.js que retorna um código de status HTTP `404 Not Found` de forma padronizada.

---

##  Estrutura do Projeto

```text
src/
├── app.controller.ts     # Controller raiz da aplicação
├── app.module.ts         # Módulo principal (registra JogosController e JogosService)
├── app.service.ts        # Service raiz (retorna status do servidor)
├── jogos.controller.ts  # Controller responsável pelas rotas de jogos
├── jogos.service.ts     # Service com a lista de jogos e regra de busca por ID
└── main.ts               # Ponto de entrada da aplicação