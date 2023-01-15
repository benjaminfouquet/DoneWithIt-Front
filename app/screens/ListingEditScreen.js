import { StyleSheet } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import Screen from "../components/Screen";
import PickerItem from "../components/PickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  images: Yup.array().min(1, "Please select at least one image"),
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("category"),
  description: Yup.string().label("Description"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    icon: "floor-lamp",
    backgroundColor: "#fc5c65",
  },
  { label: "Clothing", value: 2, icon: "car", backgroundColor: "#df9644" },
  { label: "Other", value: 3, icon: "camera", backgroundColor: "#fed330" },
  { label: "Bibou", value: 4, icon: "cards", backgroundColor: "#26de81" },
  {
    label: "Shambala",
    value: 5,
    icon: "shoe-heel",
    backgroundColor: "#2bcbba",
  },
];

export default function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.postListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      alert("could not save the listing");
    }

    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        visible={uploadVisible}
        progress={progress}
        onDone={() => setUploadVisible(false)}
      />
      <AppForm
        initialValues={{
          images: [],
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField name="title" placeholder="Name" maxLength={255} />
        <AppFormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
          width="40%"
        />
        <AppFormPicker
          name="category"
          items={categories}
          placeholder="Category"
          PickerItemComponent={PickerItem}
          width="60%"
          withIcons
        />
        <AppFormField
          maxLength={255}
          multiline
          numberOfLines={3}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
});
