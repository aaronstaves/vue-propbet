<template>
  <div class="container">
    <PropBetNav item-selected="profile"></PropBetNav>

      <b-field label="Display Name">
          <b-input v-model="user.displayName"></b-input>
      </b-field>

      <b-field label="Email">
          <b-input type="email"
              v-model="user.email"
              disabled>
          </b-input>
      </b-field>

      <b-field label="Password">
        <b-input type="password" value="" placeholder="Fill in to update password">
        </b-input>
      </b-field>

      <b-field grouped position="is-right">
        <p class="control">
          <button @click="saveUser" class="save-button button is-success">save</button>
        </p>
      </b-field>

    <b-loading :active.sync="isLoading"></b-loading>
  </div>
</template>
<script>
import PropBetNav from '@/components/Nav';
import { fb } from '@/helpers/firebase';

export default {
  name: 'contests',
  components: { PropBetNav },
  data() {
    return {
      isLoading: true,
      user: {
        email: 'Loading...',
        displayName: 'Loading...',
      },
    };
  },
  created() {
    fb.auth().onAuthStateChanged((fbUser) => {
      if (fbUser) {
        const { email, displayName } = fbUser;
        this.user = { email, displayName };
        this.isLoading = false;
      }
    });
  },
  methods: {
    saveUser() {
      this.isLoading = true;
      const { email, displayName } = this.user;
      fb.auth().currentUser.updateProfile({ email, displayName })
        .then(() => {
          this.isLoading = false;
          this.$toast.open({
            type: 'is-success',
            message: 'Saved profile!',
          });
        })
        .catch(() => {
          this.isLoading = false;
          this.$toast.open({
            type: 'is-danger',
            message: 'Error saving profile!',
          });
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.save-button {
  padding: 0 25px 0 25px;
}
</style>