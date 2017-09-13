<template>
  <div class="container">
    <nav class="navbar has-shadow" id="top">
      <div class="navbar-brand">
        <span 
          @click="isNavActive = !isNavActive"
          v-bind:class="{ 'is-active': isNavActive }"
          class="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div class="navbar-menu"
        v-bind:class="{ 'is-active': isNavActive }">
        <div class="navbar-start">
        </div>
        <div class="navbar-end">
          <router-link
            to="home"
            v-bind:class="{ 'is-active': ( itemSelected == 'home' )}" 
            class="navbar-item is-tab">
            Home
          </router-link>
          <router-link
            to="profile" 
            v-bind:class="{ 'is-active': ( itemSelected == 'profile' )}" 
            class="navbar-item is-tab">
            Profile
          </router-link>
          <router-link
            to="contests"
            v-bind:class="{ 'is-active': ( itemSelected == 'contests' )}" 
            class="navbar-item is-tab">
            Contests
          </router-link>
          <span class="navbar-item">
            <a @click="logout" class="button is-info">
              Logout
            </a>
          </span>
        </div>
      </div>
    </nav>
  <b-loading :active.sync="isLoading"></b-loading>

  </div>
</template>

<script>
import { fb } from '@/helpers/firebase';

export default {
  name: 'dashboard',
  data() {
    return {
      isNavActive: false,
      isLoading: false,
    };
  },
  props: ['itemSelected'],
  methods: {
    logout() {
      this.isLoading = true;
      fb.auth().signOut().then(() => {
        this.isLoading = false;
        this.$router.go('/');
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding-bottom: 40px;
}
</style>
