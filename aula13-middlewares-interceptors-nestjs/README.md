#  Nest.js - Aula 13: Middlewares e Interceptors

Este repositório contém o guia prático e a implementação da **Aula 13** do projeto `aula13-middlewares-interceptors-nestjs` no curso de **Desenvolvimento Backend com Nest.js**.

Nesta aula, aprendemos a gerar e configurar **Middlewares** no NestJS para interceptar requisições HTTP, registrar logs no terminal, aplicar validação de privilégios com o cabeçalho customizado `x-user-base` e registrar a aplicação de middlewares globais via `NestModule`.

---

##  Sumário
- [Objetivos da Aula](#-objetivos-da-aula)
- [Fundamentos Teóricos](#-fundamentos-teóricos)
- [ Estrutura do Projeto](#️-estrutura-do-projeto)
- [ Guia Passo a Passo de Execução](#-guia-passo-a-passo-de-execução)
  - [1. Geração do Middleware pelo CLI](#1-geração-do-middleware-pelo-cli)
  - [2. Implementação do Logger Middleware](#2-implementação-do-logger-middleware)
  - [3. Configuração do Middleware no AppModule](#3-configuração-do-middleware-no-appmodule)
  - [4. Execução do Servidor](#4-execução-do-servidor)
- [ Código-Fonte Implementado](#-código-fonte-implementado)
  - [1. Middleware de Log e Autenticação (`src/logger/logger.middleware.ts`)](#1-middleware-de-log-e-autenticação-srcloggerloggermiddlewarets)
  - [2. Registro no Módulo (`src/app.module.ts`)](#2-registro-no-módulo-srcappmodulets)
- [ Guia Prático de Teste (Thunder Client)](#-guia-prático-de-teste-thunder-client)
- [ Checklist de Validação](#-checklist-de-validação)

---

##  Objetivos da Aula

- Criar um **Middleware** estruturado no NestJS utilizando a interface `NestMiddleware`.
- Registrar no console o método HTTP e a rota solicitada para cada requisição recebida (`[LOG] Método: GET | Rota: ...`).
- Interceptar requisições direcionadas para rotas administrativas (`/admin`).
- Validar a presença e o valor do cabeçalho HTTP `x-user-base` (`Administrator`).
- Bloquear acessos não autorizados retornando HTTP `403 Forbidden` com objeto JSON contendo código, mensagem e registro de data.
- Configurar o consumo de middlewares globais no `AppModule` implementando `NestModule`.

---

##  Fundamentos Teóricos

* **`NestMiddleware`:** Interface que obriga a implementação do método `use(req, res, next)`.
* **`req.originalUrl || req.url`:** Garante a leitura correta do caminho da requisição tratada no middleware.
* **`MiddlewareConsumer`:** Helper utilizado no módulo para definir em quais rotas (`forRoutes('*')`) o middleware será aplicado.
* **Controle de Acesso por Header:** Validação simples do perfil enviando o parâmetro `x-user-base` nos cabeçalhos da requisição.

---

## 🛠️ Estrutura do Projeto

```text
aula13-middlewares-interceptors-nestjs/
├── src/
│   ├── logger/
│   │   ├── logger.middleware.ts       # Middleware de log e controle de acesso
│   │   └── logger.middleware.spec.ts  # Teste unitário do middleware
│   ├── app.controller.ts              # Controller contendo rotas públicas e admin
│   ├── app.module.ts                  # Módulo principal com NestModule configurado
│   └── main.ts                        # Ponto de entrada da aplicação
└── package.json