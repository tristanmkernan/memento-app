import React, { useCallback, useEffect } from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import { StyleSheet } from "react-native";
import { List, Searchbar, FAB, Chip } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { noop, values } from "lodash";
import { useNavigation } from "@react-navigation/native";

import { RootState } from "../store";
import { fetchAllMementos } from "../features";
import { Memento } from "../models";

export const MementoHistory: React.FC = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const mementos = useSelector((store: RootState) =>
    values(store.mementos.entities)
  );

  const MementoHistoryListItem: ListRenderItem<Memento> = useCallback(
    ({ item }) => {
      return (
        <List.Item
          title={item.category.name}
          description={item.notes}
          descriptionNumberOfLines={1}
          descriptionEllipsizeMode="tail"
          onPress={() =>
            navigation.navigate("MementoItem", { mementoId: item.id })
          }
          left={(props) => <List.Icon {...props} icon="minus" />}
        />
      );
    },
    []
  );

  useEffect(() => {
    dispatch(fetchAllMementos());
  }, []);

  return (
    <View style={styles.container}>
      <Searchbar placeholder="Search" value="" onChangeText={noop} />

      <FlatList
        style={styles.list}
        data={mementos}
        renderItem={MementoHistoryListItem}
        keyExtractor={(item) => item.id}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate("MementoCreate")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    paddingTop: 24,
    display: "flex",
    flexDirection: "column",
  },
  list: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
