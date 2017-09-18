<template>
  <div class="container">
    <PropBetNav item-selected="contests"></PropBetNav>
    <div class="level">
      <div class="level-left">
        <router-link to="/contest/create" class="button is-success">Create</router-link>
      </div>
      <div class="level-right">
      </div>
    </div>
    <List/>
  </div>
</template>

<script>
import PropBetNav from '@/components/Nav';
import List from '@/components/Contest/List';


// import { fb } from '@/helpers/firebase';

export default {
  name: 'contests',
  components: { PropBetNav, List },
  data() {
    return {

    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
