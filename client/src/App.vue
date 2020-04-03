<template>
  <v-app>

    <!-- ナビゲーション -->
    <v-navigation-drawer app v-model="drawer" clipped>
    <v-container>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title grey--text text--darken-2">
            Menu
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="list in nav_lists" :key="list.name" :to="list.link">
          <v-list-item-icon>
            <v-icon>{{ list.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ list.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-container>
    </v-navigation-drawer>

    <!-- トップバー -->
    <v-app-bar color="primary" dark app clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toobar-title>ビジョン達成支援</v-toobar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>SUPPORT</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!-- コンテンツ -->
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import router from "./router";
export default {
  name: "Main",
  data(){
    return{
        // ナビゲーションバー開閉(null:PCは初期値開, スマホは初期値閉)
        drawer: null,
        // ナビゲーションバーの構成要素
        nav_lists:[
          {
            name: '目標管理',
            icon: 'mdi-view-list',
            link:'/'
          },
          {
            name: 'ToDo',
            icon: 'mdi-calendar-text',
            link:'/Todo'
            },
          {
            name: '達成状況',
            icon: 'mdi-progress-check',
            link:'/Achive'
          },
          {
            name: 'チャット',
            icon: 'mdi-comment-processing-outline',
            link:'/Chat'
          },
          {
            name: '月報/自己申告',
            icon: 'mdi-file-document-outline',
            link:'/Report'
          },
          {
            name: '社員情報',
            icon: 'mdi-card-account-details',
            link:'/Employee'
          },
        ]
    }
  },
  mounted() {
    // 認証機能マスク
    // this.checkLoggedIn();
  },
  methods: {
    /**
     * 認証トークンを取得に失敗した場合はログインページにリダイレクトする
     */
    checkLoggedIn() {
        this.$session.start();
        if (!this.$session.has("token")) {
            router.push("/auth");
        }
    }
  }
};
</script>