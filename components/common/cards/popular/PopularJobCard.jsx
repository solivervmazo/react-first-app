import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard = (item, selectedJob, handleCardPress) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item.item)}
      onPress={() => handleCardPress(item.item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item.item)}>
        <Image
          source={{ uri: item.item.employer_logo }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
