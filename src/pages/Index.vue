<template>
  <div class="p-2">
    <div class="float-left">
      <strong>{{ user.email }}</strong>
    </div>
    <div class="float-right">
      <a class="button is-primary" @click="logout()">
        <strong>Logout</strong>
      </a>
    </div>
    <Todo></Todo>
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
import {q,client} from "../init-db";

export default {
  name: "Home",
  components: {
    Todo
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logout() {
      client.query(q.Logout(true)).then(res => {
        client
          .query(
            q.Update(q.Ref(q.Collection("users"), this.$store.state.id), {
              data: {
                token: null
              }
            })
          )
          .then(res => {
            localStorage.removeItem("token");
            this.$router.push({ path: "/login" });
          });
      });
    }
  }
};
</script>
