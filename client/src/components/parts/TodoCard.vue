<template>
    <v-card class="bg-white pa-2 ma-2">
      <div>
        <v-card-title>{{listcard.name}}</v-card-title>
      </div>
      <div>
        <v-progress-linear :value="listcard.progress" :color="barcoler" height=20>{{listcard.progress}}%</v-progress-linear>
      </div>
      <div style="display:flex;">
        <v-card-subtitle style="margin-left:auto;">{{listcard.deadline}}</v-card-subtitle>
      </div>
    </v-card>
</template>

<script>
export default {
  name: "TodoCard",
  // 型指定等省略
  props: ['listcard'],
  computed:{
    barcoler : function (){
      let color = '';
      let val = this.listcard.progress;
      if(val < 20){
        color = "red"
      }else if(val < 50){
        color = "orange darken-1"
      }else if(val < 80){
        color = "yellow darken-1"
      }else{
        color = "light-green darken-1"
      }
      return color
    }
  }
};
</script>