<template>
    <div id="app">
        <div class="container">
            <AddTodo />
            <FilterTodos />
            <Todos />
        </div>
    </div>
</template>

<script>
import Todos from "./components/todos";
import AddTodo from "./components/addTodo";
import FilterTodos from "./components/filterTodos";

export default {
    name: "App",
    components: {
        Todos,
        AddTodo,
        FilterTodos,
    },
};
</script>

<style>
body {
    font-family: Georgia, 'Times New Roman', Times, serif;
    line-height: 1.6;
    background: #e8f7f0;
}
.container {
    max-width: 1100px;
    margin: auto;
    overflow: auto;
    padding: 0 2rem;
}
</style>
