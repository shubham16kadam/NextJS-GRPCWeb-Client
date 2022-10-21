## Command to create gprc client code

Note: Follow https://grpc.io/docs/protoc-installation/ link to install protoc cli.

```
protoc -I=./proto proto/*.proto \
  --js_out=import_style=commonjs,binary:./grpc \
  --grpc-web_out=import_style=typescript,mode=grpcweb:./grpc
```

## Setup client

```
nvm use
nvm i
```

## Command to launch client

1. Launch grpc server
2. Launch envoy proxy with command
   Note: Follow https://www.envoyproxy.io/docs/envoy/latest/start/install link to install envoy cli.

```
envoy -c envoy-override.yaml
```

3. Launch Next App

```
npm run dev
```

Then visit `htpp://localhost:3000` on browser
