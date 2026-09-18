# Gerenciador de Configurações e Variáveis de Ambiente

Este projeto consiste em um script de inicialização em **Node.js** focado no carregamento e validação de variáveis de ambiente seguras utilizando a biblioteca **dotenv**.

A aplicação garante que as credenciais críticas (como chaves de API e URLs de banco de dados) estejam disponíveis antes que o serviço seja iniciado, interrompendo a execução de forma graciosa caso alguma chave obrigatória esteja ausente.

---

##  Funcionalidades

- **Carregamento Automático:** Lê as configurações a partir de um arquivo `.env` local.
- **Validação de Variáveis Críticas:** Verifica a presença de chaves obrigatórias (`API_KEY_PAGAMENTO`) e interrompe o processo (`process.exit(1)`) caso não sejam encontradas.
- **Valores Padrão (Fallback):** Define uma porta padrão (`8080`) caso a variável `PORT` não esteja configurada.
- **Diagnóstico do Serviço:** Exibe no console as configurações carregadas e o tamanho da chave de API para validação sem expor diretamente o segredo em logs sensíveis.

---

##  Pré-requisitos e Instalação

Instale as dependências necessárias executando:

```bash
npm install dotenv