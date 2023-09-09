import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

import TodoFallback from "../components/TodoFallback";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";

const TodoScreen = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [editedTodo, setEditedTodo] = useState(null);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            <View>
                <TodoInput
                    todo={todo}
                    setTodo={setTodo}
                    todoList={todoList}
                    setTodoList={setTodoList}
                    editedTodo={editedTodo}
                    setEditedTodo={setEditedTodo}
                />
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

                <TodoFallback todoList={todoList} />
            </View>
        </ScrollView>
    );
};

export default TodoScreen;

const styles = StyleSheet.create({});
