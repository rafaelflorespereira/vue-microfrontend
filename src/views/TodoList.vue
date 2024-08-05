<template lang="">
  <CreateTodo @addTodo="addTodo" :highestTodoId />
  <TodoComponent
    v-for="todo in todos"
    :title="todo.title"
    :isDone="todo.isDone"
    :id="todo.id"
    :key="todo.id"
    @deleteTodo="deleteTodo"
    @updateTodo="updateTodo"
    @updateTodoTitle="updateTodoTitle"
  />
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ITodo } from '@/interface'

const todos = ref<ITodo[]>([
  {
    id: 1,
    title: 'Learn Vue 3',
    isDone: false
  },
  {
    id: 2,
    title: 'Learn Vite',
    isDone: false
  }
])
const highestTodoId = computed(() => {
  return todos.value.reduce((acc, todo) => {
    return todo.id > acc ? todo.id : acc
  }, 0)
})
const addTodo = (todo: ITodo) => {
  todos.value.push(todo)
  console.log('clicked')
}
const deleteTodo = (id: number) => {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}
const updateTodo = (id: number) => {
  todos.value = todos.value.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        isDone: !todo.isDone
      }
    }
    return todo
  })
}
const updateTodoTitle = (id: number, title: string) => {
  todos.value = todos.value.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        title
      }
    }
    return todo
  })
}
</script>
<style lang=""></style>
