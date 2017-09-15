<template>
  <div class="container">
    <PropBetNav item-selected="home"></PropBetNav>
    <div class="content">
      <UserSummary/>
    </div>
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
.content {
  padding: 0 25px 0 25px;
}
</style>
