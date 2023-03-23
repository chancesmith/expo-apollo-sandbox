# expo-apollo-sandbox

A playground for testing Apollo with Expo.

<p align="center">
  <img src="./screentshot.png" alt="expo apollo sandbox" />
</p>

## setup

1. run `yarn`
2. copy/paste `example.env` to `.env` and fill in the values (hasura sample app url and secret)
3. run `yarn start`

## branches (🚧 in progress, 🏁 finished)

```
├── 🏁 `main` Apollo Client with caching
├── 🚧 `offline-support` Offline support
├── 🚧 `mutation-optimistic-ui` Mutation with optomistic UI
├── `subscriptions` Subscriptions
├── `state-navigation-recovery` State and navigation recovery
└── `mock-server` Mock server
```

## areas to sandbox

- [x] setup apollo client
- [ ] offline support with cache: "user goes offline, then back online" ([article 1](https://codeburst.io/highly-functional-offline-applications-using-apollo-client-12885bd5f335), [article 2](https://medium.com/twostoryrobot/a-recipe-for-offline-support-in-react-apollo-571ad7e6f7f4))
- [ ] add mutation + optomistic UI ([reactive variables](https://www.apollographql.com/docs/react/local-state/local-state-management#reactive-variables))
- [ ] graphQL subscriptions
- [ ] state and navigation recovery (user closes the app)
- [ ] mock server ([msw](https://mswjs.io/docs/getting-started/mocks/graphql-api))
- [ ] save downloads to local storage ??
- [ ] low internet connection
