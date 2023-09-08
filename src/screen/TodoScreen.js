import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import TodoItem from "../components/TodoItem";

const TodoScreen = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [editedTodo, setEditedTodo] = useState(null);

    const disabledButton = todo.length <= 0 ? 0.4 : 1;

    const handleAddTodo = () => {
        if (todo.length > 0) {
            setTodoList([
                ...todoList,
                { id: Date.now().toString(), title: todo },
            ]);
            setTodo("");
        }
    };

    const handleUpdateTodo = () => {
        const updatedTodos = todoList.map((item) => {
            if (item.id === editedTodo.id) {
                return {
                    ...item,
                    title: todo,
                };
            }
            return item;
        });

        setTodoList(updatedTodos);
        setEditedTodo(null);
        setTodo("");
    };

    return (
        <View>
            <TextInput
                style={{
                    borderWidth: 1,
                    borderColor: "#8a2be2",
                    borderRadius: 8,
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    fontSize: 20,
                }}
                placeholder="Add new todo"
                value={todo}
                onChangeText={(todoText) => setTodo(todoText)}
            />

            {editedTodo ? (
                <TouchableOpacity
                    style={{
                        backgroundColor: "#22c55e",
                        borderRadius: 8,
                        padding: 16,
                        marginTop: 20,
                        opacity: disabledButton,
                    }}
                    onPress={() => handleUpdateTodo()}
                    disabled={todo.length <= 0}
                >
                    <Text
                        style={{
                            color: "#FFF",
                            textAlign: "center",
                            fontSize: 20,
                            fontWeight: "bold",
                        }}
                    >
                        Update todo
                    </Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={{
                        backgroundColor: "#8a2be2",
                        borderRadius: 8,
                        padding: 16,
                        marginTop: 20,
                        opacity: disabledButton,
                    }}
                    onPress={() => handleAddTodo()}
                    disabled={todo.length <= 0}
                >
                    <Text
                        style={{
                            color: "#FFF",
                            textAlign: "center",
                            fontSize: 20,
                            fontWeight: "bold",
                        }}
                    >
                        Add todo
                    </Text>
                </TouchableOpacity>
            )}

            <FlatList
                data={todoList}
                renderItem={({ item }) => (
                    <TodoItem
                        item={item}
                        setTodo={setTodo}
                        setEditedTodo={setEditedTodo}
                        todoList={todoList}
                        setTodoList={setTodoList}
                    />
                )}
                keyExtractor={(item) => item.id}
                style={{ marginTop: 20 }}
            />

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

export default TodoScreen;

const styles = StyleSheet.create({});
