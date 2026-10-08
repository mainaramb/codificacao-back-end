# README - Tratamento de Erros e Status Code (Aula 15)

Documentação prática sobre a implementação de validação de parâmetros, tratamento de exceções HTTP e logs de aviso em uma aplicação **NestJS**.

---

##  Sumário

1. [Serviço de Produtos (produtos.service.ts)](#-serviço-de-produtos-produtosservicets)
2. [Controlador de Produtos (produtos.controller.ts)](#-controlador-de-produtos-produtoscontrollerts)
3. [Validação de ID Numérico (BadRequestException)](#-validação-de-id-numérico-badrequestexception)
4. [Busca e Tratamento de Produto Inexistente (NotFoundException)](#-busca-e-tratamento-de-produto-inexistente-notfoundexception)

---

##  Recursos Utilizados

* **NestJS** (`@Controller`, `@Get`, `@Param`, `@Injectable`, `Logger`)
* **Exceções HTTP do NestJS** (`BadRequestException`, `NotFoundException`)
* **TypeScript**

---

## Exemplo de Código da Aplicação

### 1. Serviço de Produtos (`produtos.service.ts`)

```typescript
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutosService {
    produtos = [
        { id: 1, nome: 'Arrroz Namorados', preco: 9.99 },
        { id: 2, nome: 'Feijão Timbiras', preco: 7.99 },
        { id: 3, nome: 'Macarrão Galo', preco: 5.99 },
        { id: 4, nome: 'Açúcar União', preco: 4.99 },
        { id: 5, nome: 'Sal Lebre', preco: 2.99 },
    ];

    listarProdutos() {
        return this.produtos;
    }
}