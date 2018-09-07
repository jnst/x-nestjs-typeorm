# x-nestjs-typeorm

## Setup

```bash
$ yarn install
```

## MySQL

### Run

```bash
$ docker container run --name x-nestjs-typeorm --rm -d -p 3306:3306 -e "MYSQL_ROOT_PASSWORD=root" -e "MYSQL_DATABASE=x_nestjs_typeorm" mysql:5.7
```

### Client

```bash
$ mysql -h 127.0.0.1 -D x_nestjs_typeorm -u root -p
```

### Stop

```bash
$ docker container stop x-nestjs-typeorm
```

## Run app

```bash
$ yarn start
$ open http://localhost:3000/photo
```

## Test

```bash
$ yarn test
```

## License

[MIT licensed](LICENSE).
