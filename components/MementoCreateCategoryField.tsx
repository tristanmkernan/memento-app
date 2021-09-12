import React, { useCallback, useState } from "react";
import { useAsync } from "react-async";
import { useField } from "formik";
import { FlatList, View, StyleSheet } from "react-native";
import {
  Button,
  List,
  TextInput,
  ActivityIndicator,
  Title,
  IconButton,
} from "react-native-paper";
import { isNil, noop } from "lodash";

import { MementoCategory } from "../models";
import { MementoCategoryService } from "../services";
import { useSelector } from "react-redux";
import { RootState } from "../store";

type MementoSearchCategory = MementoCategory & {
  original?: string;
};

type Props = {};

export const MementoCreateCategoryField: React.FC<Props> = () => {
  const [formikInputProps, formikMetaProps, formikHelperProps] =
    useField("category");

  const auth = useSelector((state: RootState) => state.auth);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<MementoCategory | null>(formikInputProps.value);

  const handleChange = useCallback(
    async (item: MementoSearchCategory | null) => {
      let category = item;

      if (item?.id === "create") {
        category = await MementoCategoryService.create(item.original!, {
          token: auth.token,
        });
      }

      formikHelperProps.setValue(category);
      setSelectedCategory(category);
    },
    [auth?.token]
  );

  const clearSelection = useCallback(() => {
    setSearch("");
    handleChange(null);
  }, [handleChange]);

  const promiseFn = useCallback(async () => {
    if (search.length < 2) {
      return [];
    }

    const results = await MementoCategoryService.search(search, {
      token: auth.token,
    });

    return [
      ...results,
      {
        id: "create",
        name: `Create: ${search}`,
        original: search,
      },
    ];
  }, [search, auth?.token]);

  const { data: categories = [], isPending, error } = useAsync({ promiseFn });

  const renderItem = useCallback(({ item }) => {
    const icon = item.id === "create" ? "pencil-plus" : "tag";
    return (
      <List.Item
        title={item.name}
        left={(props) => <List.Icon {...props} icon={icon} />}
        onPress={() => handleChange(item)}
      />
    );
  }, []);

  if (!isNil(selectedCategory)) {
    return (
      <View style={styles.container}>
        <List.Item
          title={selectedCategory.name}
          left={(props) => <List.Icon {...props} icon="tag" />}
          right={(props) => (
            <IconButton {...props} onPress={clearSelection} icon="delete" />
          )}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        label="Search"
        mode="outlined"
        style={styles.field}
        value={search}
        onChangeText={setSearch}
      />
      {isPending && <ActivityIndicator animating />}
      <FlatList data={categories} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "stretch",
    marginVertical: 8,
  },
  field: {
    marginVertical: 8,
  },
});
