<template>
  <div id="app">
    <div id="nav">
    <h1>Welcome to SpellBooks!</h1>
      <!-- <h3>Please Login/Register to Continue</h3> -->
        <router-link to="/auth">Login/Register</router-link>


    </div>
    <router-view/>
  </div>
</template>

// <script>

// export default {
//   name: 'Auth',
//    beforeCreate() {
//       if (this.$store.state.user._id) {
//         this.$router.push({ name: 'spellbooks' })
//       }
//     },
//     data() {
//       return {
//         showLoginForm: true
//       }
//     },
//   components: {
//     LoginForm,
//     RegisterForm
//   },
//   methods: {
//     logout() {
//       this.$store.dispatch('logout')
//     }
//   }
// }
// </script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
