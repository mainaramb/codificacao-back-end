#  Aula 16: Validação de Schemas com Zod no NestJS

Nesta aula, aprendemos a integrar a biblioteca **Zod** ao ecossistema do NestJS para realizar a validação rigorosa de esquemas de dados e a inferência automática de tipos TypeScript em requisições HTTP. O objetivo foi construir uma camada de validação robusta e reutilizável através do Custom Pipe `ZodValidationPipe`, aplicando regras completas para o cadastro de colaboradores.

---

##  Sumário
- [Objetivos da Aula](#-objetivos-da-aula)
- [Fundamentos Teóricos](#-fundamentos-teóricos)
- [ Estrutura de Arquivos da Aula](#-estrutura-de-arquivos-da-aula)
- [ Código Fonte Base](#️-código-fonte-base)
  - [1. Schema de Validação (`src/colaborador.schema.ts`)](#1-schema-de-validação-srccolaboradorschemats)
  - [2. Custom Pipe de Validação (`src/zod-validation.pipe.ts`)](#2-custom-pipe-de-validação-srczod-validationpipets)
  - [3. Controller de Colaboradores (`src/colaboradores.controller.ts`)](#3-controller-de-colaboradores-srccolaboradorescontrollerts)
  - [4. Módulo Principal (`src/app.module.ts`)](#4-módulo-principal-srcappmodulets)
- [ Instalação e Execução](#️-instalação-e-execução)
- [ Cenários de Testes da Aplicação](#-cenários-de-testes-da-aplicação)
  - [Cenário 1: Sucesso no Cadastro (201 Created)](#cenário-1-sucesso-no-cadastro-201-created)
  - [Cenário 2: Erro nos Campos de Texto e Numérico (400 Bad Request)](#cenário-2-erro-nos-campos-de-texto-e-numérico-400-bad-request)
  - [Cenário 3: Erro de Departamento Fora do Enum (400 Bad Request)](#cenário-3-erro-de-departamento-fora-do-enum-400-bad-request)
- [ Checklist de Validação](#-checklist-de-validação)

---

##  Objetivos da Aula

- Instalar e configurar a biblioteca **Zod** no ambiente NestJS.
- Criar schemas declarativos definindo regras estritas para cada campo recebido na requisição.
- Utilizar `z.infer<typeof schema>` para inferir tipos de dados diretamente no TypeScript sem duplicar código de interfaces.
- Criar um **Custom Pipe** (`ZodValidationPipe`) que intercepta o objeto recebido, executa a validação usando `.safeParse()` e formata a resposta de erro em formato amigável.
- Associar o Pipe ao endpoint com o decorator `@UsePipes()`.

---

##  Fundamentos Teóricos

* **Zod:** Biblioteca de declaração e validação de tipos TypeScript-first. Permite construir validadores encadeados simples ou complexos.
* **`safeParse()`:** Método do Zod que tenta validar os dados sem lançar exceções não tratadas no código. Retorna um objeto com `{ success: true, data: ... }` ou `{ success: false, error: ... }`.
* **Custom Pipe (`PipeTransform`):** Classe no NestJS que implementa a interface `PipeTransform` e permite transformar ou validar dados de entrada (`@Body()`) antes de chegarem ao manipulador da rota (*route handler*).
* **`z.infer`:** Recurso que extrai a tipagem TypeScript diretamente da definição do Schema Zod, garantindo que o DTO/Type esteja sempre sincronizado com as validações.

---

##  Critérios de Aceitação e Regras de Negócio

Para que o cadastro do colaborador seja processado com sucesso, a requisição deve atender obrigatoriamente a todos os critérios a seguir:

1. **Campo `nome`:**
   - Deve ser do tipo `string`.
   - Deve conter **no mínimo 3 caracteres**.
2. **Campo `email`:**
   - Deve ser uma `string` formatada como um endereço de e-mail válido.
3. **Campo `idade`:**
   - Deve ser um valor do tipo `number`.
   - Idade mínima permitida: **18 anos**.
   - Idade máxima permitida: **65 anos**.
4. **Campo `departamento`:**
   - Deve ser obrigatoriamente um dos quatro valores permitidos: `'TI'`, `'RH'`, `'Comercial'` ou `'Financeiro'`.
5. **Tratamento de Erros:**
   - Caso um ou mais campos falhem, a API deve retornar o código **HTTP 400 (Bad Request)** acompanhado do array `errors` contendo a indicação de cada `campo` e sua respectiva `mensagem` de erro.

---

##  Estrutura de Arquivos da Aula

```text
aula16-validacao-schemas-com-zod-nestjs/
├── src/
│   ├── colaborador.schema.ts      # Schema Zod com regras e exportação do tipo Colaborador
│   ├── zod-validation.pipe.ts     # Pipe customizado que executa a validação do Zod
│   ├── colaboradores.controller.ts # Controller com a rota POST /colaboradores
│   ├── app.module.ts              # Módulo principal da aplicação
│   └── main.ts                    # Arquivo de inicialização da aplicação NestJS
└── package.json