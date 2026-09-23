#  Nest.js - Aulas 08 e 09: Route Handlers, DTOs, Params, Query e Status Codes

Este repositório contém a implementação prática das **Aulas 08 e 09** do curso de **Desenvolvimento Backend com Nest.js**.

Nestas aulas, desenvolvemos o módulo **"O Porteiro Digital"** (Gestão de Convidados), cobrindo o ciclo completo de manipulação de requisições HTTP (`GET`, `POST`, `PATCH`, `DELETE`), tratamento de parâmetros de rota (`@Param`), parâmetros de consulta (`@Query`), uso de DTOs (*Data Transfer Objects*), manipulação de exceções e customização de *Status Codes*.

---

##  Sumário
- [Objetivos das Aulas](#-objetivos-das-aulas)
- [Fundamentos Teóricos](#-fundamentos-teóricos)
- [Aula 08: Route Handlers e DTOs](#aula-08-route-handlers-e-dtos)
- [Aula 09: Parâmetros, Exceções e Métodos de Alteração](#aula-09-parâmetros-exceções-e-métodos-de-alteração)
- [ Estrutura do Projeto](#️-estrutura-do-projeto)
- [ Código-Fonte Implementado](#-código-fonte-implementado)
- [1. DTO (`src/criar-convidado.dto.ts`)](#1-dto-srccriar-convidadodtots)
- [2. Service (`src/convidado.service.ts`)](#2-service-srcconvidadoservicets)
- [3. Controller (`src/convidados.controller.ts`)](#3-controller-srcconvidadoscontrollerts)
- [ Como Testar os Endpoints](#-como-testar-os-endpoints)
- [ Checklist de Validação](#-checklist-de-validação)

---

##  Objetivos das Aulas

### Aula 08
- Mapear e estruturar **Route Handlers** para leitura (`GET`) e criação (`POST`).
- Utilizar os decorators `@Get()`, `@Post()` e `@Body()`.
- Criar DTOs para tipagem e definição do contrato das requisições.
- Compreender os Status Codes padrão do Nest.js (`200 OK` para GET, `201 Created` para POST).

### Aula 09
- Trabalhar com **Parâmetros de Rota** (`@Param`) para identificar recursos específicos por ID.
- Manipular alterações parciais (`PATCH`) e deleções (`DELETE`).
- Lançar exceções HTTP adequadas (`NotFoundException` / `404 Not Found`).
- Aplicar o decorator `@HttpCode()` para ajustar respostas sem conteúdo (`204 No Content`).

---

##  Fundamentos Teóricos

* **Route Handlers:** Métodos dentro dos Controllers anotados com decorators HTTP que processam as requisições recebidas.
* **DTO (Data Transfer Object):** Classe TypeScript utilizada para padronizar e validar a estrutura de dados trafegada entre o cliente e o servidor.
* **Semântica HTTP:**
  * `GET`: Leitura de dados (não altera o estado da aplicação).
  * `POST`: Criação de um novo recurso no servidor.
  * `PATCH`: Atualização parcial de um recurso existente.
  * `DELETE`: Remoção de um recurso.
* **Status Codes Customizados:** Por padrão, retornos do NestJS são `200` (ou `201` para POST). O uso de `@HttpCode(204)` sobrescreve o retorno para deleções bem-sucedidas sem corpo na resposta.

---

##  Estrutura do Projeto

```text
src/
├── criar-convidado.dto.ts    # DTO com o contrato de criação de convidado
├── convidado.service.ts      # Regra de negócio, busca, atualização e exclusão
├── convidados.controller.ts  # Endpoints HTTP (GET, POST, PATCH, DELETE)
└── app.module.ts             # Módulo principal da aplicação