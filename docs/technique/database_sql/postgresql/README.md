# PostgreSQL
> https://www.postgresql.org/download/macosx/
> https://docs.postgresql.tw/

### practice online
> https://www.crunchydata.com/developers/playground/psql-basics
> https://www.crunchydata.com/developers/playground/postgres-tutorial-create-tables
> https://www.crunchydata.com/developers/playground/learn-sql
> https://pgexercises.com/questions/basic/
> https://pgexercises.com/questions/updates/
> https://pgexercises.com/questions/string/
> https://pgexercises.com/questions/date/
> https://www.crunchydata.com/developers/playground/joins-in-postgres
> https://pgexercises.com/questions/joins/
> https://www.crunchydata.com/developers/playground/postgres-constraints-tutorial
> https://www.crunchydata.com/developers/playground/btree-indexes
> https://www.crunchydata.com/developers/playground/transactions
> https://www.crunchydata.com/developers/playground/postgres-users-and-roles
> https://www.crunchydata.com/developers/playground/row-level-security
> https://pgexercises.com/questions/aggregates/

## client library
```
brew install libpq
```

## Docker
> https://hub.docker.com/_/postgres
> https://medium.com/alberthg-docker-notes/docker%E7%AD%86%E8%A8%98-%E9%80%B2%E5%85%A5container-%E5%BB%BA%E7%AB%8B%E4%B8%A6%E6%93%8D%E4%BD%9C-postgresql-container-d221ba39aaec


```
$ docker pull postgres:15
$ docker create --name my-postgres -p 15432:5432 -e POSTGRES_PASSWORD=postgres postgres:15

$ docker start my-postgres
$ docker stop my-postgres
$ docker run -d --name my-postgres -p 15432:5432 -e POSTGRES_PASSWORD=postgres postgres:15

$ docker-compose up -d
$ docker-compose down
```

## docker-compose.yml 

```
services:
  postgres:
    image: postgres:15
    container_name: my-postgres
    restart: always
    ports:
      - "15432:5432"
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: mydb
    volumes:
      - ./pgdata:/var/lib/postgresql/data
```


## postgres commands
```
docker exec my-postgres psql --help
docker exec my-postgres psql -V
docker exec my-postgres psql -U postgres -l

進入postgres CLI
docker exec -it my-postgres psql -U postgres
```