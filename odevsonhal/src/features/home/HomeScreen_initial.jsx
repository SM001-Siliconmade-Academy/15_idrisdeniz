import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { useFormik } from "formik";

const HomeScreen = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.kimlikNo) {
      errors.kimlikNo = "T.C. Kimlik No Giriniz.";
    } else if (values.kimlikNo.length > 15) {
      errors.kimlikNo = "15 karakterden fazla olamaz";
    }

    if (!values.seriNo) {
      errors.seriNo = "Kimlik Seri No Giriniz.";
    } else if (values.seriNo.length > 9) {
      errors.seriNo = "Kimlik Seri No 9 hane olmalı.";
    }

    if (!values.email) {
      errors.email = "Email giriniz";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Geçersiz email";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: { kimlikNo: "", seriNo: "", email: "" },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text style={styles.label}>kimlikNo</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={formik.handleChange("kimlikNo")}
          onBlur={formik.handleBlur("kimlikNo")}
          value={formik.values.kimlikNo}
        />
        {formik.touched.kimlikNo && formik.errors.kimlikNo && (
          <Text style={styles.errorText}>{formik.errors.kimlikNo}</Text>
        )}

        <Text style={styles.label}>seriNo</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={formik.handleChange("seriNo")}
          onBlur={formik.handleBlur("seriNo")}
          value={formik.values.seriNo}
        />
        {formik.touched.seriNo && formik.errors.seriNo && (
          <Text style={styles.errorText}>{formik.errors.seriNo}</Text>
        )}

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <Text style={styles.errorText}>{formik.errors.email}</Text>
        )}
        <Pressable style={styles.pressable} onPress={formik.handleSubmit}>
          <Text style={styles.pressableText}>Submit</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#1a202c",
  },
  container: {
    padding: 20,
  },
  label: {
    marginTop: 16,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  textInput: {
    marginTop: 4,
    backgroundColor: "#blue",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 20,
    color: "white",
    borderWidth: 3,
    borderColor: "#a0aec0",
  },
  pressable: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 20,
    color: "white",
    marginTop: 20,
    width: 150,
    alignItems: "center",
  },
  pressableText: {
    color: "#1a202c",
    fontSize: 20,
    fontWeight: "bold",
  },
  errorText: {
    color: "tomato",
    fontSize: 18,
    marginTop: 4,
  },
});
