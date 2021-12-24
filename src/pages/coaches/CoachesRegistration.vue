<template>
  <section>
    <h2>Register as a coach now!</h2>
    <base-card> <coaches-form @save-data="saveData"></coaches-form></base-card>
  </section>
</template>
<script>
import CoachesForm from '../../components/coaches/CoachesForm.vue';
export default {
  components: { CoachesForm },
  computed: {},
  methods: {
    saveData(data) {
      console.log('ok');
      this.$store.dispatch('coaches/registerCoaches', data);
      this.$router.replace('/coaches');
    },
  },
};
</script>
