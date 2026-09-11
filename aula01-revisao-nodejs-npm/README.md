
#  Diagnóstico do Servidor (Node.js)

Uma aplicação simples e eficiente em **Node.js** que utiliza o módulo nativo `os` para coletar e exibir informações essenciais do sistema operacional e do hardware do servidor em tempo real.

---

##  Sumário
- [Funcionalidades](#-funcionalidades)
- [Pré-requisitos](#-pré-requisitos)
- [Como Executar](#-como-executar)
- [Exemplo de Saída](#-exemplo-de-saída)
- [Estrutura do Código](#-estrutura-do-código)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)

---

##  Funcionalidades

O script realiza o levantamento dos seguintes dados do ambiente:
- **Plataforma do Sistema Operacional** (ex: `win32`, `linux`, `darwin`)
- **Memória RAM Total** (convertida dinamicamente para **GB**)
- **Memória RAM Livre** (convertida dinamicamente para **GB**)
- **Quantidade de Núcleos (Cores) do Processador**
- **Modelo e Fabricante da CPU**
- **Velocidade de Clock do Processador** (em MHz)

---

##  Pré-requisitos

Para executar este projeto, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 12 ou superior recomendada)

---

##  Como Executar

1. **Clone ou crie o arquivo** com o código do projeto (ex: `index.js` ou `diagnostico.js`).
2. Abra o terminal na pasta onde o arquivo foi salvo.
3. Execute o comando abaixo:

```bash
node diagnostico.js