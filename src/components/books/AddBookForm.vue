<template>
  <div class="addBookForm">
    <form @submit.prevent="addBook">
        <label for="name">Title: </label>
        <input type="text" v-model="spellbook.name" name="name">
<button type="submit">Create New Spellbook</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'addBookForm',
    data() {
      return {
spellbook: {
    name: ''
}
      }
    },
    computed: {},
    methods: {
        addBook()   {
           this.$store.dispatch('addBook', this.spellbook)
        }
    }
  }

</script>

<style>


</style>
