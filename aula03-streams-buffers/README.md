# Processador de Logs com Streams e readline

Este projeto é uma ferramenta em **Node.js** criada para processar e filtrar grandes arquivos de log (como `servidor.log`) de forma eficiente, sem sobrecarregar a memória RAM do sistema. 

Através do uso de **Streams** e do módulo **readline**, a aplicação lê o arquivo linha a linha, extrai apenas as entradas com o nível de erro (`ERROR`), grava o resultado em um novo arquivo (`apenas_erros.log`) e monitora o consumo de memória durante o processo.

---

##  Funcionalidades

- **Processamento de Grandes Arquivos (Streaming):** Lê e grava arquivos de log em partes (chunks/linhas), evitando carregar todo o arquivo na memória de uma só vez.
- **Filtragem de Logs:** Identifica e extrai apenas as linhas que contêm a palavra `ERROR`.
- **Monitoramento de Memória:** Exibe no terminal a quantidade de memória RAM utilizada (**RSS** e **Heap Utilizado**) antes e depois do processamento.
- **Contagem de Ocorrências:** Exibe o número total de linhas de erro filtradas ao final da execução.

---

##  Estrutura dos Arquivos de Entrada e Saída

| Arquivo | Descrição |
| :--- | :--- |
| `servidor.log` | Arquivo de log original a ser processado (entrada). |
| `apenas_erros.log` | Arquivo gerado automaticamente contendo apenas as linhas com `ERROR` (saída). |

---

##  Como Executar

1. Certifique-se de ter o **Node.js** instalado.
2. Crie ou insira o arquivo de log a ser analisado na raiz do projeto com o nome **`servidor.log`**.
3. Execute o script principal via terminal:

```bash
node index.js