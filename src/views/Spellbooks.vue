<template>
  <div class="spellbooks">
      <!-- <button @click="showBookForm = !showBookForm">Create a Spellbook</button> -->
      <addBookForm></addBookForm>
      <div v-for ="spellbook in spellbooks">
            <router-link :to="{name: 'spellbook', params: {id:spellbook._id}}"> {{spellbook.name}}</router-link>
      </div>
     <!-- {{spellbooks.name}} -->
  </div>
</template>

<script>
import AddBookForm from '@/components/books/AddBookForm.vue'

  export default {
    name: 'spellbooks',
    data() {
      return {
          showBookForm: false
      }
    },
    mounted()   {
this.$store.dispatch('getBooks')
    },
    computed: {
        spellbooks()    {
            return this.$store.state.spellbooks
        }
    },
    methods: {
   
    },
    components: {
        AddBookForm
    }
  }

</script>

<style>


</style>
