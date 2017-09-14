<template>
  <div class="container profile">
      <div class="section profile-heading">
        <div class="columns">
          <div class="column is-2">
            <div class="image is-128x128 avatar">
              <img :src="user.photoURL">
            </div>
          </div>
          <div class="column is-4 name">
            <p>
              <span class="title is-bold">{{ user.displayName }}</span>
            </p>
          </div>
          <div class="column is-2 followers has-text-centered">
            <p class="stat-val">{{ live_contests.length }}</p>
            <p class="stat-key">Live Contests</p>
          </div>
          <div class="column is-2 following has-text-centered">
            <p class="stat-val">{{ upcoming_contests.length }}</p>
            <p class="stat-key">Upcoming Contests</p>
          </div>
          <div class="column is-2 likes has-text-centered">
            <p class="stat-val">{{ friends.length }}</p>
            <p class="stat-key">Friends</p>
          </div>
        </div>
      </div>
      <div class="profile-options">
        <div class="tabs is-fullwidth">
          <ul>
            <li class="link is-active"><a><span class="icon"><i class="fa fa-list"></i></span> <span>Live Contests</span></a></li>
            <li class="link"><a><span class="icon"><i class="fa fa-calendar"></i></span> <span>Upcoming Contests</span></a></li>
            <li class="link"><a><span class="icon"><i class="fa fa-users"></i></span> <span>Friends</span></a></li>
          </ul>
        </div>
      </div>
      <b-loading :active.sync="isLoading"></b-loading>
    </div>
  </div>
</template>

<script>
import { fb } from '@/helpers/firebase';

export default {
  name: 'contestSummary',
  data() {
    return {
      isLoading: true,
      user: {
        displayName: 'Loading...',
        photoURL: '/static/avatar/burrito.gif',
      },
      live_contests: [],
      upcoming_contests: [],
      friends: [],
    };
  },
  created() {
    fb.auth().onAuthStateChanged((fbUser) => {
      if (fbUser) {
        this.user.displayName = fbUser.displayName || fbUser.email;
        if (fbUser.photoURL) {
          this.user.photoURL = fbUser.photoURL;
        }
        this.isLoading = false;
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container.profile {
  margin-top:50px;
}
.profile-heading {
  margin: 20px 0;
  padding-bottom: 30px;
}
.profile-heading .name {
  border-right: 1px solid #f1f1f1;
  margin:-30px 0;
  padding: 80px 30px 0 30px;
}
.profile-heading .followers, .profile-heading .following {
  border-right: 1px solid #f1f1f1;
  margin:-30px 0;
  padding: 70px 30px;
}
.profile-heading .likes {
  margin:-30px 0;
  padding: 70px 30px;
}
.profile-heading .stat-key {
  font-size: 20px;
  font-weight: 200;
}
.profile-heading .stat-val {
  font-size: 35px;
  font-weight: bold;
}
.profile-options {
  background-color: #f1f1f1;
  margin:-20px 0 20px 0;
}
.profile-options .link a {
  padding:18px;
  font-size: 18px;
}
.profile-options .link .icon {
  font-size: 16px;
  padding-top:2px;
}
.tagline {
  padding:20px 0;
  font-size: 16px;
  line-height: 1.4;
}
.avatar {
  float: right;
}
.follow {
  float: right;
}
.avatar img {
  border-radius: 200px;
}
p.title.is-bold {
  font-weight: bold;
}
.card .timestamp {
  float:right;
  color:#bbb;
}
</style>
