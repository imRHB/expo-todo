import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const TodoItem = ({ item, setTodo, setEditedTodo, todoList, setTodoList }) => {
    const handleEditTodo = (item) => {
        setTodo(item.title);
        setEditedTodo(item);
    };

    const handleDeleteTodo = (todoId) => {
        setTodoList(todoList.filter((todo) => todo.id !== todoId));
    };

    return (
        <View
            style={{
                backgroundColor: "#FAFAFA",
                marginVertical: 4,
                paddingVertical: 12,
                paddingHorizontal: 20,
                borderWidth: 1,
                borderColor: "#eee",
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
                gap: 16,
            }}
        >
            <Text style={{ fontSize: 18, flex: 1 }}>{item.title}</Text>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 16,
                }}
            >
                <MaterialCommunityIcons
                    name="pencil"
                    size={18}
                    color="#8a2be2"
                    onPress={() => handleEditTodo(item)}
                />
                <MaterialCommunityIcons
                    name="trash-can-outline"
                    size={18}
                    color="#ef4444"
                    onPress={() => handleDeleteTodo(item.id)}
                />
            </View>
        </View>
    );
};

export default TodoItem;

const styles = StyleSheet.create({});
