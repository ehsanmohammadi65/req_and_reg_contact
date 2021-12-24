<template>
  <section>
    <base-card>
      <header><h2>Requests Received</h2></header>
      <ul v-if="hasRequests">
        <requests-item
          v-for="req in receivedRequest"
          :key="req.id"
          :message="req.message"
          :email="req.userEmail"
        ></requests-item>
      </ul>
      <h3 v-else>You haven't Received any request yet!</h3>
    </base-card>
  </section>
</template>
<script>
import RequestsItem from '../../components/requests/RequestsItem.vue';
export default {
  components: { RequestsItem },
  computed: {
    receivedRequest() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequest'];
    },
  },
};
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
