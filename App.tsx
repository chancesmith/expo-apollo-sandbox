import NetInfo from "@react-native-community/netinfo";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { API_SECRET, API_URL } from "@env";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { CustomerList } from "./components/CustomerList";
import { CONTAINER } from "./styles";
import { useEffect, useState } from "react";

if (!API_URL || !API_SECRET) {
  alert(
    "No API_URL or API_SECRET set. It's possible this project is missing the /.env file in the root of the project."
  );
}

// setup for offline caching, and query queuing

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": API_SECRET || "no secret",
  },
});

export default function App() {
  const [isOnline, setIsOnline] = useState(true);
  const [ignoreErrorTimeout, setIgnoreErrorTimeout] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIgnoreErrorTimeout(false);
    }, 3000);
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsOnline(!!state?.isInternetReachable);
    });
    return () => {
      clearTimeout(timer);
      unsubscribe();
    };
  }, []);

  const OfflineBar = () => (
    <View
      style={{
        position: "absolute",
        bottom: 5,
        backgroundColor: "#777",
        width: "100%",
        paddingVertical: 10,
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#fff" }}>Offline</Text>
    </View>
  );

  return (
    <ApolloProvider client={client}>
      <View style={CONTAINER}>
        <StatusBar style="auto" />
        {!isOnline && !ignoreErrorTimeout ? <OfflineBar /> : null}
        <CustomerList />
      </View>
    </ApolloProvider>
  );
}
