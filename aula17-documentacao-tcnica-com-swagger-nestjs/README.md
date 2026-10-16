#  Aula 17: Documentação Técnica Interativa com Swagger no NestJS

Nesta aula, aprendemos a implementar a documentação OpenAPI/Swagger no ecossistema do NestJS para o projeto `aula17-documentacao-tecnica-com-swagger-nestjs`. O objetivo foi entender como mapear e documentar rotas, DTOs e respostas HTTP de forma automatizada e interativa, permitindo testar a API diretamente através da interface web do Swagger.

---

##  O que é o OpenAPI / Swagger?

O **Swagger** (OpenAPI) é uma especificação padrão para descrever e documentar APIs RESTful. No NestJS, utilizamos o pacote `@nestjs/swagger` para gerar automaticamente uma interface web interativa onde é possível visualizar todos os endpoints, esquemas de dados (DTOs) e respostas da aplicação.

Com o código desenvolvido nesta aula, conseguimos:
- Configurar a rota `/docs` para exibição da interface gráfica do Swagger.
- Mapear a rota de cadastro de produtos (`POST /produtos`) com decorators OpenAPI (`@ApiTags`, `@ApiOperation`, `@ApiResponse`).
- Documentar os campos do `CriarProdutoDto` com `@ApiProperty`, adicionando descrições e exemplos práticos.
- Habilitar autenticação Bearer Token na documentação via `addBearerAuth()`.

---

##  Estrutura de Arquivos da Aula

O projeto desta aula foi organizado na seguinte estrutura dentro do repositório:

```text
aula17-documentacao-tecnica-com-swagger-nestjs/
├── src/
│   ├── produtos/
│   │   ├── dto/
│   │   │   └── criar-produto.dto.ts   # DTO com decorators @ApiProperty
│   │   └── produtos.controller.ts      # Controller com documentação Swagger
│   ├── app.module.ts                   # Módulo principal da aplicação
│   └── main.ts                         # Ponto de entrada com a configuração do SwaggerModule
└── package.json