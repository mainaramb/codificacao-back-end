#  Nest.js - Aula 12: Request e Response Avançados & Testes Unitários

Este repositório contém a implementação prática da **Aula 12** do projeto `aula12-request-response-advanced` no curso de **Desenvolvimento Backend com Nest.js**.

Nesta aula, exploramos a captura avançada de parâmetros HTTP através de **Headers Customizados** (`@Headers`), o controle manual da resposta do Express (`@Res()`), definição de status codes e cabeçalhos customizados na resposta, além da estrutura básica de **Testes Unitários** no NestJS com `Testing Engine`.

---

##  Sumário
- [Objetivos da Aula](#-objetivos-da-aula)
- [Fundamentos Teóricos](#-fundamentos-teóricos)
- [ Estrutura do Projeto](#️-estrutura-do-projeto)
- [ Código-Fonte Implementado](#-código-fonte-implementado)
  - [1. Controller de Segurança (`src/seguranca.controller.ts`)](#1-controller-de-segurança-srcsegurancacontrollerts)
  - [2. Testes Unitários (`src/app.controller.spec.ts`)](#2-testes-unitários-srcappcontrollerspects)
- [ Como Testar os Endpoints](#-como-testar-os-endpoints)
- [ Checklist de Validação](#-checklist-de-validação)

---

##  Objetivos da Aula

- Interceptar cabeçalhos HTTP customizados usando o decorator `@Headers()`.
- Utilizar a resposta nativa do Express através do decorator `@Res()` para controle fino das respostas.
- Definir cabeçalhos de resposta HTTP dinâmicos com `res.setHeader()`.
- Aplicar verificação de credenciais/API Key simples para liberação de acesso a rotas restritas (`403 Forbidden` vs `200 OK`).
- Compreender a estrutura de testes automáticos gerados pelo NestJS (`*.spec.ts`).

---

##  Fundamentos Teóricos

* **`@Headers('chave')`:** Decorator que extrai o valor de um cabeçalho específico enviado na requisição HTTP.
* **`@Res()` / Response (Express):** Injeta o objeto de resposta do Express. Permite manipulação direta do fluxo de resposta (`res.status()`, `res.json()`, `res.setHeader()`).
* **Autenticação via Header:** Mecanismo básico de proteção de rotas verificando se uma *API Key* válida foi fornecida nos cabeçalhos antes de permitir o acesso.
* **Testes Unitários (`*.spec.ts`):** O módulo `TestingModule` do NestJS simula a injeção de dependências para testar Controllers e Services de forma isolada.

---

##  Estrutura do Projeto

```text
aula12-request-response-advanced/
├── src/
│   ├── app.controller.spec.ts  # Teste unitário do AppController
│   ├── app.controller.ts       # Controller raiz
│   ├── app.module.ts           # Módulo principal
│   ├── app.service.ts          # Service raiz
│   ├── main.ts                 # Arquivo de inicialização
│   └── seguranca.controller.ts # Controller de validação de API Key e segurança
├── test/                       # Testes de integração (E2E)
└── package.json