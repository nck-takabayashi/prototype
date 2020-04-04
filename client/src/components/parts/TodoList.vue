<template>
    <v-card color="grey lighten-3">
      <TodoCard v-for="card in listcards" v-bind:key="card.id" :listcard="card" />
    </v-card>
</template>

<script>
import TodoCard from "@/components/parts/TodoCard";

export default {
  name: "TodoList",
  components: { TodoCard },
  // 型指定等省略
  props: ['listcards']
};
</script>