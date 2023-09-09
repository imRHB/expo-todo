import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TodoFallback = ({ todoList }) => {
    return (
        <View>
            {todoList.length <= 0 && (
                <View
                    style={{
                        marginTop: 20,
                        padding: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 12,
                    }}
                >
                    <MaterialCommunityIcons
                        name="file-document-outline"
                        size={48}
                        color="#aaa"
                    />
                    <Text style={{ fontSize: 18, color: "#aaa" }}>
                        No todo found!
                    </Text>
                </View>
            )}
        </View>
    );
};

export default TodoFallback;

const styles = StyleSheet.create({});
