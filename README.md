# Instruções para rodar

## Back-end
### Condições:

- Ter o Docker instalado.
- Renomear o arquivo “env” para “.env” (adicionar um ponto “.”).
- Ter o NodeJS instalado.
- Ter o yarn instalado (npm install yarn).

### Rodar os seguintes comandos:

#### Primeiro terminal
    docker-compose up

#### Segundo terminal
    yarn
    yarn dev

- Obs: caso a porta 3000 esteja em uso, rodar o seguinte comando:

        sudo kill -9 $(sudo lsof -t -i:3000)

- Caso queira iniciar o Prisma Studio:

    - Terceiro terminal

            npx prisma studio
