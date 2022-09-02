import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";

const list = [
  {
    id: 1,
    label: "Boleto conta luz",
    value: "300,90",
    date: "17/09/2022",
    type: 0,
  },
  {
    id: 2,
    label: "Pix mercado X",
    value: "30",
    date: "01/05/2022",
    type: 1,
  },
  {
    id: 3,
    label: "Salário",
    value: "10.000,00",
    date: "01/08/2022",
    type: 1,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Carol Pandolfe" />
      <Balance saldo="50.000,00" gastos="30,00" />

      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
