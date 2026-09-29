#  Nest.js - Aula 11: Upload de Ficheiros e Imagens com Multer

Este repositório contém a implementação prática da **Aula 11** do curso de **Desenvolvimento Backend com Nest.js**.

Nesta aula, implementamos o endpoint de **Upload de Imagens**, utilizando interceptores nativos do NestJS (`FileInterceptor`), armazenamento em disco local com **Multer** (`diskStorage`), geração de nomes únicos com **UUID**, limite de tamanho e validação por MIME type.

---

##  Sumário
- [Objetivos da Aula](#-objetivos-da-aula)
- [Fundamentos Teóricos](#-fundamentos-teóricos)
- [ Dependências Necessárias](#️-dependências-necessárias)
- [ Código-Fonte Implementado](#-código-fonte-implementado)
  - [Controller de Imagem (`src/imagem.controller.ts`)](#controller-de-imagem-srcimagemcontrollerts)
- [ Como Testar o Endpoint](#-como-testar-o-endpoint)
- [ Checklist de Validação](#-checklist-de-validação)

---

##  Objetivos da Aula

- Configurar o upload de ficheiros no NestJS utilizando o middleware **Multer**.
- Utilizar os decorators `@UseInterceptors()` e `@UploadedFile()`.
- Definir regras de armazenamento em disco (`diskStorage`) com destino local (`./uploads`).
- Renomear ficheiros enviados utilizando **UUID v4** e extensão original (`extname`).
- Aplicar validações de tamanho limite (**2 MB**) e tipos de imagem permitidos (`jpg`, `jpeg`, `png`, `gif`, `webp`).

---

##  Fundamentos Teóricos

* **`FileInterceptor`:** Interceptor fornecido pelo pacote `@nestjs/platform-express` para capturar campos do tipo *multipart/form-data*.
* **`diskStorage`:** Estratégia de armazenamento do Multer que grava o ficheiro diretamente num diretório do servidor.
* **`uuid` (v4):** Biblioteca para geração de identificadores únicos universais, prevenindo a sobreposição de ficheiros com nomes idênticos.
* **`fileFilter` e `limits`:** Configurações de segurança para restringir os tipos MIME aceites e limitar o tamanho máximo dos ficheiros recebidos.

---

##  Dependências Necessárias

Para instalar os pacotes e as tipagens do Multer e UUID, execute:

```bash
npm install @nestjs/platform-express multer uuid
npm install -D @types/multer @types/uuid