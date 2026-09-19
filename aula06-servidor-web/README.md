# Servidor HTTP Básico com Node.js

Este projeto implementa um servidor web nativo em **Node.js** utilizando o módulo `http`. O servidor possui roteamento básico, respostas no formato JSON e aplicação de cabeçalhos de segurança (*HTTP Security Headers*).

---

##  Funcionalidades

- **Roteamento Simples:** Trata diferentes rotas da aplicação (`/status` e páginas não encontradas).
- **Cabeçalhos de Segurança:** Inclui cabeçalhos como `X-Content-Type-Options` e `X-Frame-Options` em todas as respostas HTTP.
- **Respostas em JSON:** Retorna mensagens estruturadas com os códigos de status adequados (`200 OK` e `404 Not Found`).
- **Logging de Requisições:** Imprime no console o método HTTP (GET, POST, etc.) e a URL solicitada a cada requisição.

---

##  Rotas Disponíveis

| Rota | Método | Status | Resposta Exemplo |
| :--- | :--- | :--- | :--- |
| `/status` | GET | `200 OK` | `{"servidorWeb": "Online"}` |
| Qualquer outra | Qualquer | `404 Not Found` | `{"erro": "Página não encontrada!"}` |

---

##  Como Executar

1. Certifique-se de ter o **Node.js** instalado em sua máquina.
2. Execute o arquivo principal via terminal:

```bash
node index.js