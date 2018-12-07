<template>
  <div class="login">
    <form @submit.prevent="login">
      <label for="email">Email</label>
      <input type="text" v-model="creds.email" name="email">
      <label for="password">Password</label>
      <input type="password" v-model="creds.password" name="password">
      <button type="submit">Login</button>
      <button type="reset">Reset</button>

    </form>

  </div>
</template>

<script>
  export default {
    name: 'loginForm',
    data() {
      return {
        creds: {
          email: '',
          password: ''
        }
      }
    },
    computed: {},
    methods: {
      login() {
        this.$store.dispatch('login', this.creds)
      }
    }
  }
</script>

<style>
</style>