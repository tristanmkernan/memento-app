import React, { useCallback, useEffect, useMemo, useState } from "react";
import { DateTime } from "luxon";
import { Text, ListRenderItem, FlatList, View, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import {
  Card,
  Chip,
  List,
  Paragraph,
  Avatar,
  Subheading,
  Divider,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { filter, orderBy, size, values } from "lodash";

import { AppDispatch, RootState } from "../store";
import { Memento } from "../models";
import { fetchAllMementos, fetchCategory } from "../features";

import { MementoItemModal } from "./MementoItemModal";
import { MementoCategoryChart } from "./MementoCategoryChart";

type Props = {
  categoryId: string;
};

export const MementoCategory: React.FC<Props> = ({ categoryId }) => {
  const [selectedMemento, setSelectedMemento] = useState<Memento | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const category = useSelector(
    (store: RootState) => store.categories.entities[categoryId]
  );

  const mementos = useSelector((store: RootState) =>
    orderBy(
      filter(
        values(store.mementos.entities),
        (item) => item.category.id === categoryId
      ),
      (entity) => DateTime.fromISO(entity.created_at),
      ["desc"]
    )
  );

  const numberOfEntries = size(mementos);
  const numberOfDaysAgoPerEntry = useMemo(
    () =>
      mementos.map((item) => {
        const diff = DateTime.fromISO(item.created_at).diffNow("days");
        // diff will be in terms of days, to a high precision, e.g. -0.5
        const daysRough = diff.days;
        // let's floor the absolute, so that -0.1 => 0, and -14.3 => -14
        const daysAgo = Math.floor(Math.abs(daysRough));

        return daysAgo;
      }),
    [mementos]
  );

  const longestStreak = useMemo(() => {
    // remove duplicates
    const uniqueDaysAgo = [...new Set(numberOfDaysAgoPerEntry)].sort();

    let best: number[] = [];

    let current: number[] = [];

    for (const next of uniqueDaysAgo) {
      if (current.length === 0) {
        current = [next];
        continue;
      }

      let [comp, ...rest] = current;

      if (comp + 1 === next) {
        current = [next, ...current];
      } else {
        if (current.length > best.length) {
          best = current;
        }
      }
    }

    return best.length;
  }, numberOfDaysAgoPerEntry);

  useEffect(() => {
    dispatch(fetchCategory(categoryId));
    dispatch(fetchAllMementos());
  }, [categoryId]);

  const MementoListItem: ListRenderItem<Memento> = useCallback(({ item }) => {
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
        onPress={() => setSelectedMemento(item)}
        left={(props) => <List.Icon {...props} icon="note" />}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Card style={styles.card}>
          <Card.Title
            title={`${category?.name}`}
            left={(props) => <Avatar.Icon {...props} icon="note" />}
          />
          <Card.Content>
            <View style={styles.section}>
              <Subheading>First entry</Subheading>
              <Paragraph>
                {DateTime.fromISO(category?.created_at).toLocaleString()}
              </Paragraph>
            </View>
            <Divider />
            <View style={styles.section}>
              <Subheading>Number of entries</Subheading>
              <Paragraph>{numberOfEntries}</Paragraph>
            </View>
            <Divider />
            <View style={styles.section}>
              <Subheading>Longest daily streak</Subheading>
              <Paragraph>{longestStreak} days</Paragraph>
            </View>
            <Divider />
            <View style={styles.section}>
              <Subheading>Frequency (last 30 days)</Subheading>
              <MementoCategoryChart mementos={mementos} />
            </View>
          </Card.Content>
        </Card>
        <Card style={[styles.card]}>
          <Card.Title
            title="History"
            left={(props) => <Avatar.Icon {...props} icon="note-multiple" />}
          />
          <Card.Content>
            <FlatList
              data={mementos ?? []}
              renderItem={MementoListItem}
              keyExtractor={(item) => item.id}
            />
          </Card.Content>
        </Card>
      </ScrollView>
      <MementoItemModal
        memento={selectedMemento}
        onDismiss={() => setSelectedMemento(null)}
        showActions={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 24,
    display: "flex",
    flexDirection: "column",
  },
  card: {
    maxWidth: 360,
    minWidth: 240,
    marginVertical: 8,
  },
  section: {
    marginVertical: 8,
  },
});
