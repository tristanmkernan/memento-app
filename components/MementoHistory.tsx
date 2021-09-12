import React, { useCallback, useEffect, useMemo, useState } from "react";
import { DateTime } from "luxon";
import { FlatList, ListRenderItem, View } from "react-native";
import { StyleSheet } from "react-native";
import {
  Text,
  List,
  Searchbar,
  FAB,
  Chip,
  Paragraph,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { values } from "lodash";
import { useNavigation } from "@react-navigation/native";

import { RootState } from "../store";
import { fetchAllMementos } from "../features";
import { Memento } from "../models";

export const MementoHistory: React.FC = (props) => {
  const [filterQuery, setFilterQuery] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const mementos = useSelector((store: RootState) =>
    values(store.mementos.entities)
  );

  const filteredMementos = useMemo(() => {
    if (filterQuery) {
      return mementos.filter((item) =>
        item.category.name.toLowerCase().includes(filterQuery.toLowerCase())
      );
    }

    return mementos;
  }, [mementos, filterQuery]);

  useEffect(() => {
    dispatch(fetchAllMementos());
  }, []);

  const MementoHistoryListItem: ListRenderItem<Memento> = useCallback(
    ({ item }) => {
      return (
        <List.Item
          title={item.category.name}
          description={(props) => (
            <View {...props}>
              <Paragraph numberOfLines={1} ellipsizeMode="tail">
                {item.notes}
              </Paragraph>
              <View style={{ flexDirection: "row" }}>
                <Chip icon="calendar">
                  <Text>
                    {DateTime.fromISO(item.created_at).toLocaleString()}
                  </Text>
                </Chip>
                {item.location && (
                  <Chip style={{ marginLeft: 8 }} icon="map-marker">
                    <Text>{item.location}</Text>
                  </Chip>
                )}
              </View>
            </View>
          )}
          onPress={() =>
            navigation.navigate("MementoItem", { mementoId: item.id })
          }
          left={(props) => <List.Icon {...props} icon="note" />}
        />
      );
    },
    []
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        value={filterQuery}
        onChangeText={setFilterQuery}
      />

      <FlatList
        style={styles.list}
        data={filteredMementos}
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
    paddingHorizontal: 24,
  },
  list: {
    flex: 1,
    marginVertical: 16,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
