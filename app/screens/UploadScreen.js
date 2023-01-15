import { StyleSheet, Modal, View } from "react-native";
import React from "react";
import ProgressBar from "react-native-progress/Bar";
import LottieView from "lottie-react-native";
import colors from "../config/colors.json";

export default function UploadScreen({
  progress = 0,
  visible = false,
  onDone,
}) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <ProgressBar
            colors={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            source={require("../assets/animations/done.json")}
            autoPlay
            loop={false}
            style={styles.animation}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  animation: { width: 150 },
});
