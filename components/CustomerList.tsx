import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Text, View } from "react-native";
import { HEADING, TEXT } from "../styles";

export const CustomerList = () => {
  const GET_CUSTOMERS = gql`
    query GetCustomers {
      customer {
        id
        first_name
        last_name
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_CUSTOMERS);

  if (loading) return <Text style={TEXT}>Loading...</Text>;
  if (error) return <Text style={TEXT}>Error :( {JSON.stringify(error)}</Text>;

  return (
    <View>
      <Text style={HEADING}>Customers</Text>
      {data.customer.map((customer: any) => (
        <Text key={customer.id} style={TEXT}>
          {customer.first_name} {customer.last_name}
        </Text>
      ))}
    </View>
  );
};
