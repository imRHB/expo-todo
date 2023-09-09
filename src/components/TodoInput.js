import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const TodoInput = ({
    todo,
    setTodo,
    todoList,
    setTodoList,
    editedTodo,
    setEditedTodo,
}) => {
    // const { todo, setTodo, setTodoList, editedTodo, setEditedTodo } = props;

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
        </View>
    );
};

export default TodoInput;

const styles = StyleSheet.create({});
