<template>
  <div class="container">
    <PropBetNav item-selected="home"></PropBetNav>
    <UserSummary/>
  </div>
</template>
<script>
import PropBetNav from '@/components/Nav';
import UserSummary from '@/components/User/Summary';


// import { fb } from '@/helpers/firebase';

export default {
  name: 'contests',
  components: { PropBetNav, UserSummary },
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>