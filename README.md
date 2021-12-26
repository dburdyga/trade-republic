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

### Answers
1.What happens in case the websocket disconnects?
```
There is a mechanism in websocket service for reconnection.
If connection fails there are 3 attempts to reconnect, if connection still fails
an Error message is shown to user. 
```
2.How would you go further to keep the live data available or inform the user?
```
Reconnection mechanism happens in the background, so user won't see any errors messages if connection error
is accidental and can be restored, otherwise User would see an error message.

If connection is restored we can demonstrate cached data from eather localStorage or Service worker.
```

3.Challenges
```
There is a challenge to sync up store state and messages from websockets when stock is unsubscribed. 
There is a latency between unsubscription and last message from unsubscribed stock.
We need to keep track and compare store state and messages comming from websockets.

If we implement caching there are challenges for keeping state in store and in local storage in syqn.
There are npm packages for this and also we can implement custom layer with functionality that kepp states in synq;

On the other hand having websockets working in sync with store helps us reactively update all components with live data.  
```

4.What happens if a user adds an instrument multiple times to their list?
```
There is check in store for upcomming messages. We check if instrument is already saved in state.
If it is, we just update it, else we add it.

Also there is a validation in stock add form. If instrument has been already subscribed we canno't add it again.
```

5.Possible challenges and mitigations.
```
Main challenge was to implement validation without npm packeges and keep it performant.
Form is extracted in separate component so, only this part is re-rendered.

It was less performant to check validation on every type but it is more obvious for the user.
In the future we could add debounce options.

There was also a challenge with store updates.
If we update store on every websocket message it would force to rerender subscribed components too often.
So we have to throttle websocket messages in order to improve performance.
```
