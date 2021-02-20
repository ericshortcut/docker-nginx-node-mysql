## How to run the project?

First, you should copy `.env.sample` with the following command:

```
cp .env.sample .env
```

then

```
docker-compose up
```

Once you see the message "`web_1 | /docker-entrypoint.sh: Configuration complete; ready for start up`". You should be able to run
`curl localhost:8080`.
