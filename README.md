# Trybers and Dragons

Neste projeto foram aplicados os princípios da arquitetura `SOLID` e os princípios de `POO` em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos `RPG` (_Role Playing Game_).

## Estrutura do Projeto

O projeto é estruturado em várias classes e interfaces que representam os diferentes aspectos do jogo:

- Character: Representa um personagem no jogo.
- Energy: Representa a energia de um personagem.
- Fighter e SimpleFighter: Interfaces para os lutadores no jogo.
- Monster: Representa um monstro no jogo.
- Battle: Representa uma batalha no jogo.
- Archetypes: Contém diferentes arquétipos de personagens, como Mage, Necromancer, Ranger e Warrior.
- Races: Contém diferentes raças de personagens, como Dwarf, Elf, Halfling e Orc.

## Tecnologias Utilizadas

- [TypeScript](https://www.typescriptlang.org/): Um superconjunto de JavaScript que adiciona tipos estáticos.
- [npm](https://www.npmjs.com/): Gerenciador de pacotes para o ambiente de execução Node.js.
- [ESLint](https://eslint.org/): Uma ferramenta de linting para JavaScript e TypeScript.
- [Docker](https://www.docker.com/): Uma plataforma para desenvolver, enviar e executar aplicativos.

## Como Executar o Projeto

1. Clone o repositório
2. Instale as dependências com `npm install`

### Com Docker

1. Inicie os containers `docker-compose up -d`
2. Acesse o terminal do container e inicie a aplicação `docker exec -it trybers_and_dragons bash` 
3. Instale as dependencias dentro do container também `npm install`

### Sem Docker

1. Apenas instale as dependências com `npm install`

## Contribuições

Este projeto é para fins educacionais, portanto, pull requests não serão aceitos.

## Licença

MIT
