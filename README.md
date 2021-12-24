INTRODUCTION
------------
**Streaming market data** application displays the latest stock prices with millisecond latency. 
The stock is identified via its ISIN.
The ISIN number is an international standardized identifier unique to a stock or
other financial instrument. The format is e.g. DE000BASF111.

- User can enter an ISIN themselves or choose from a list of predefined ISINs.

- User cannot add same ISIN multiple times, user will get an error.

- If the websocket disconnects, then ... user get some message

INSTALLATION
------------
### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
