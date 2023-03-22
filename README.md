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

├── 🏁 `main` Apollo Client with caching
├── `mutation-optomistic-ui` Mutation with optomistic UI
├── `offline-support` Offline support
├── `subscriptions` Subscriptions
├── `state-navigation-recovery` State and navigation recovery
└── `mock-server` Mock server

## areas to sandbox

- [x] setup apollo client
- [ ] add mutation + optomistic UI ([reactive variables](https://www.apollographql.com/docs/react/local-state/local-state-management#reactive-variables))
- [ ] offline support (user goes offline, then back online)
- [ ] graphQL subscriptions
- [ ] state and navigation recovery (user closes the app)
- [ ] mock server (for testing and local dev work)
