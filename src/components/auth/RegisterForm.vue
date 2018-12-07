<template>
  <div class="register">
    <form @submit.prevent="register">
      <label for="name">Name: </label>
      <input type="text" v-model="creds.name" name="name">
      <label for="email">Email: </label>
      <input type="text" v-model="creds.email" name="email">
      <label for="password">Password: </label>
      <input type="password" v-model="creds.password" name="password">
      <button type="submit">Register</button>
      <button type="reset">Reset</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'register',
    data() {
      return {
        creds: {
          name: '',
          email: '',
          password: ''
        }
      }
    },
    computed: {},
    methods: {
      register() {
        this.$store.dispatch('register', this.creds)
      }
    }
  }
</script>

<style>
</style>
