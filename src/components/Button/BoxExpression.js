import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./styles";

const BoxExp = ({ content, style, onPress, onLayout }) => (
    <TouchableOpacity style={style} activeOpacity={0.8} onPress={onPress} onLayout={onLayout ? onLayout : null}>
        <Text style={styles.textExpression}>{content}</Text>
    </TouchableOpacity>
);

export default BoxExp;