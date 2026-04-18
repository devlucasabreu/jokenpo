# ✊ ✋ ✌️ Jokenpô Project

Bem-vindo ao **Jokenpô**, um jogo clássico de Pedra, Papel e Tesoura desenvolvido como parte dos meus estudos em desenvolvimento Web. O objetivo deste projeto é colocar em prática conceitos fundamentais de lógica de programação, manipulação do DOM e estilização moderna.

## 📋 Sobre o Projeto

Este é um jogo interativo onde o usuário joga contra a "máquina". O sistema processa a escolha do jogador, gera uma escolha aleatória para o computador e determina o vencedor com base nas regras clássicas.

### Tecnologias Utilizadas

- **HTML5**: Estrutura da interface.
- **CSS3**: Estilização com foco em UI moderna.
- **JavaScript**: Lógica do jogo, geração de movimentos da máquina e atualização de placar em tempo real.

## 🎮 Como Funciona

O usuário tem três opções principais representadas por botões:

1.  **Pedra** (✊)
2.  **Papel** (✋)
3.  **Tesoura** (✌️)

### Regras da Lógica:

A lógica foi implementada no arquivo JavaScript seguindo as condições:

- **Pedra** ganha de **Tesoura**.
- **Tesoura** ganha de **Papel**.
- **Papel** ganha de **Pedra**.
- Escolhas iguais resultam em **Empate**.

### Placar (Score):

O sistema mantém o controle da pontuação durante a sessão:

- **Sua pontuação**: Incrementada a cada vitória do usuário.
- **Pontuação da Máquina**: Incrementada a cada vitória do computador.

## 🚀 Funcionalidades Chave

- **Geração Aleatória**: A máquina utiliza `Math.random()` para escolher entre os três movimentos possíveis de forma imparcial.
- **Interface Responsiva**: O design foi pensado para ser limpo e centralizado, utilizando técnicas de Flexbox.
- **Feedback Visual**: Botões coloridos e estilizados para uma melhor experiência do usuário (UX).

## 🛠️ Como Executar

Como o projeto utiliza apenas tecnologias front-end puras, basta abrir o arquivo `index.html` em qualquer navegador moderno.

---

_Desenvolvido por Lucas Abreu como exercício de lógica e interface._

[Clique aqui para jogar](https://devlucasabreu.github.io/jokenpo/)
