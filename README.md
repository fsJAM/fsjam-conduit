# fsjam-conduit
A Fullstack Jamstack Clone of [Conduit](https://demo.realworld.io/), inspired by the [Real World Example App Project](https://github.com/gothinkster/realworld)

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn rw dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.
