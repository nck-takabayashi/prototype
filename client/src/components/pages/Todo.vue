<template>
  <v-container>
    <div class="d-flex justify-content-between p-3">
      <TodoList class="pa-2 ma-2 w-100" :listcards="CategoryA" />
      <TodoList class="pa-2 ma-2 w-100" :listcards="CategoryB" />
      <TodoList class="pa-2 ma-2 w-100" :listcards="CategoryC" />
      <TodoList class="pa-2 ma-2 w-100" :listcards="CategoryD" />
    </div>
  </v-container>
</template>

<script>
import TodoList from "@/components/parts/TodoList";

export default {
  name: "Todo",
  components: { TodoList },
  data(){
      return{
        // テスト用
        lists: [
          {
            id: 1, 
            name: 'タスクA',
            category: 'A',
            deadline: 'YYYY-MM-DD',
            progress: 75,
          },
          {
            id: 2, 
            name: 'タスクB',
            category: 'B',
            deadline: 'YYYY-MM-DD',
            progress: 100,
          },
          {
            id: 3, 
            name: 'タスクC',
            category: 'B',
            deadline: 'YYYY-MM-DD',
            progress: 15,
          },
          {
            id: 4, 
            name: 'タスクD',
            category: 'C',
            deadline: 'YYYY-MM-DD',
            progress: 60,
          },
          {
            id: 5, 
            name: 'タスクE',
            category: 'A',
            deadline: 'YYYY-MM-DD',
            progress: 20,
          },
          {
            id: 6, 
            name: 'タスクF',
            category: 'D',
            deadline: 'YYYY-MM-DD',
            progress: 50,
          },
        ]
      }
  },
  computed: {
    CategoryA () {
        return this.lists.filter(list => list.category == 'A')
    },
    CategoryB () {
        return this.lists.filter(list => list.category == 'B')
    },
    CategoryC () {
        return this.lists.filter(list => list.category == 'C')
    },
    CategoryD () {
        return this.lists.filter(list => list.category == 'D')
    }
  },
};
</script>