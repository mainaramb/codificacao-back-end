# Leitor e Gerador de Logs de Sistema (ES Modules)

Este projeto consiste em um sistema simples e assíncrono de registro de logs em arquivos locais utilizando **Node.js** com sintaxe nativa de **ES Modules** (`import`/`export`). 

O objetivo principal é capturar mensagens de evento do sistema, formatá-las com carimbo de data e hora atual e armazená-las persistentemente em um arquivo `.log`.

---

## 🛠️ Funcionalidades

- **Criação Automática de Diretórios:** Garante que a pasta de destino (`Logs/`) exista antes de tentar gravar o arquivo.
- **Formatação de Logs:** Formata mensagens no padrão `[AAAA-MM-DD - HH:MM:SS]: Mensagem`.
- **Escrita Assíncrona:** Utiliza `fs/promises` (`appendFile`) para adicionar novos registros ao final do arquivo sem bloquear a execução da aplicação.
- **Resolução de Caminhos Nativos:** Resolve caminhos absolutos no ambiente ES Modules utilizando a API `import.meta.url`.

---

## 📁 Estrutura do Projeto

```text
.
├── index.js          # Script principal que executa a gravação dos logs
├── utilitario.js     # Módulo auxiliar com funções de formatação
└── Logs/
    └── syslog.log    # Arquivo gerado automaticamente contendo os registros