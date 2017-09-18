<template>
  <div class="container">

    <PropBetNav item-selected="contests"></PropBetNav>
    <div class="content">

      <b-field label="Contest Name">
          <b-input v-model="contest.name"></b-input>
      </b-field>
      <b-field label="Start Time">
          <b-input v-model="contest.startTime"></b-input>
      </b-field>
      <b-field label="End Time">
          <b-input v-model="contest.endTime"></b-input>
      </b-field>

      <b-field grouped position="is-right">
        <p class="control">
          <button @click="saveContest" class="save-button button is-success">Save</button>
        </p>
      </b-field>
    </div>
    <b-loading :active.sync="isLoading"></b-loading>
  </div>
</template>
<script>
import PropBetNav from '@/components/Nav';
// import { fb } from '@/helpers/firebase';

export default {
  name: 'contests',
  components: { PropBetNav },
  data() {
    return {
      isLoading: true,
      contest: {
        name: '',
        startTime: '',
        endTime: '',
      },
    };
  },
  created() {
    // probably need to load some lookup values here at some
    // point, but for now, nothing doin'
    this.isLoading = false;
  },
  methods: {
    saveContest() {
      // generic validation for now
      if (this.contest.name === '') {
        this.$toast.open({
          type: 'is-danger',
          message: 'Must supply a contest name',
        });
      } else if (this.contest.startTime === '') {
        this.$toast.open({
          type: 'is-danger',
          message: 'Must supply a start date and time',
        });
      } else if (this.contest.endTime === '') {
        this.$toast.open({
          type: 'is-danger',
          message: 'Must supply an end date and time',
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  padding: 10px 25px 10px 25px;
}
.save-button {
  padding: 0 25px 0 25px;
}
</style>
