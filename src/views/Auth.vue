<template>
  <div class="login">

  <login-form v-if="showLoginForm" />
    <register-form v-if="!showLoginForm" />
    <button @click="showLoginForm = !showLoginForm">{{showLoginForm ? 'Click to Register' : 'Click to Login'}}</button>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import LoginForm from '@/components/auth/LoginForm.vue'
import RegisterForm from '@/components/auth/RegisterForm.vue'

export default {
  name: 'Auth',
   beforeCreate() {
      if (this.$store.state.user._id) {
        this.$router.push({ name: 'spellbooks' })
      }
    },
    data() {
      return {
        showLoginForm: true
      }
    },
  components: {
    LoginForm,
    RegisterForm
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>
