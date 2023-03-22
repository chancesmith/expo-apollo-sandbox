import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { API_SECRET, API_URL } from "@env";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { CustomerList } from "./components/CustomerList";
import { CONTAINER } from "./styles";

if (!API_URL || !API_SECRET) {
  alert(
    "No API_URL or API_SECRET set. It's possible this project is missing the /.env file in the root of the project."
  );
}

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": API_SECRET || "no secret",
  },
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={CONTAINER}>
        <StatusBar style="auto" />
        <CustomerList />
      </View>
    </ApolloProvider>
  );
}
