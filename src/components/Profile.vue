<template>
  <div class="container">
    <PropBetNav item-selected="profile"></PropBetNav>

      <div>
        <AvatarForm/>
      </div>
      <h1 class="avatar has-text-centered section">
        <img src="../assets/avatar/burrito.gif">
      </h1>
      <b-field label="Display Name">
          <b-input v-model="user.displayName"></b-input>
      </b-field>

      <b-field label="Email">
          <b-input type="email"
              v-model="user.email"
              disabled>
          </b-input>
      </b-field>

      <b-field label="Current Password">
        <b-input v-model="user.password" type="password" value="" placeholder="Type in current password">
        </b-input>
      </b-field>

      <b-field label="New Password">
        <b-input v-model="user.newPassword" type="password" value="" placeholder="Fill in to update password">
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
import AvatarForm from '@/components/Profile/AvatarList';
import { fb } from '@/helpers/firebase';

export default {
  name: 'contests',
  components: { PropBetNav, AvatarForm },
  data() {
    return {
      isLoading: true,
      user: {
        email: 'Loading...',
        displayName: 'Loading...',
        password: '',
        newPassword: '',
      },
    };
  },
  created() {
    fb.auth().onAuthStateChanged((fbUser) => {
      if (fbUser) {
        this.user.email = fbUser.email;
        this.user.displayName = fbUser.displayName;
        this.isLoading = false;
      }
    });
  },
  methods: {
    saveUser() {
      this.isLoading = true;

      // get info out of form and setup vars
      const { email, displayName, password, newPassword } = this.user;
      const fbUser = fb.auth().currentUser;
      const promises = [];

      // figure out what calls we're going to make

      // attempt to update password first
      if (newPassword !== '' && password === '') {
        this.$toast.open({
          type: 'is-danger',
          message: 'Current password required to update to new password',
        });
        this.isLoading = false;
        return;
      }

      // if we're updating password, need to re-auth
      const credential = fb.auth.EmailAuthProvider.credential(email, password);
      if (newPassword !== '') {
        promises.push(() => fbUser.reauthenticateWithCredential(credential));
        promises.push(() => fbUser.updatePassword(newPassword));
      }

      // clicked save, assume we want to update other profile vars
      promises.push(() => fbUser.updateProfile({ email, displayName }));

      promises.reduce((p, func) => p.then(func), Promise.resolve())
        .then(() => {
          this.isLoading = false;
          this.$toast.open({
            type: 'is-success',
            message: 'Saved profile!',
          });
        })
        .catch((error) => {
          this.isLoading = false;
          this.$toast.open({
            type: 'is-danger',
            message: `Error saving profile! ${error.message}`,
            duration: 10000,
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
.avatar img {
  border-radius: 100px;
  padding: 5px;
  border: 1px solid #dbdbdb;
  cursor: pointer;
}
</style>
