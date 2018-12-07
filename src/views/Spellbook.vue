<template>
  <div class="spellbook">
{{spellbook}}
  </div>
</template>

<script>

  export default {
    name: 'spellbook',
    data() {
      return {

      }
    },
    computed: {
        spellbook() {
            return this.$store.state.spellbook
        }
    },
    mounted() {
        this.$store.dispatch("getActiveBook", this.$route.params.id)
    }
}

</script>

<style>


</style>
