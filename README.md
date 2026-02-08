# SeeTickets - App de Orçamento Web 🎫

Este projeto é um sistema de gestão de orçamentos desenvolvido para a disciplina de **JavaScript Básico (IFRN)**. O app permite cadastrar serviços, calcular custos automaticamente e gerenciar dados de forma persistente.

## 👤 Equipe
* **Jhaeson** (Desenvolvedor Único)

## 🚀 Requisitos Atendidos (PDF)

Conforme solicitado na proposta do projeto, as seguintes funcionalidades foram implementadas:

### 1. Funcionalidades do App (Seção 3)
- **Cadastro de Serviços:** Descrição, Categoria (Hospedagem, Manutenção, etc), Quantidade e Valor Unitário.
- **Cálculos Automáticos:** O sistema utiliza loops para calcular o Subtotal de cada item e o Total Geral.
- **Métricas Extras:** Exibição da média de preços e identificação do item mais caro.
- **Gestão de Itens:** Possibilidade de remover serviços da lista com atualização em tempo real.

### 2. Tecnologia e Persistência (Seção 2)
- **JSON & LocalStorage:** Todos os dados são salvos no navegador via JSON.
- **Manipulação do DOM:** Atualização dinâmica da interface sem recarregar a página.

### 3. Layout e Interface (Seção 4 e 5)
- **Design Responsivo:** Adaptado para telemóveis e desktop.
- **Modo Escuro (Opcional):** Implementação de tema escuro funcional.
- **Single Page Application (SPA):** Navegação entre Login, Home e App num ficheiro único.

## 🛠️ Como Utilizar

1. Acesse o link do projeto via GitHub Pages: https://eiblame.github.io/Or-amentos---seetickets/
2. Credenciais de acesso padrão:
   - **E-mail:** `admin@email.com`
   - **Senha:** `123456`

## 📁 Estrutura do Projeto
- `index.html`: Estrutura da aplicação.
- `index.css`: Estilização e Modo Escuro.
- `index.js`: Lógica, cálculos e persistência.
