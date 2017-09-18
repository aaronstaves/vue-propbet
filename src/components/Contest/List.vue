<template>
  <div class="container">

    <!-- Search Bar start-->
    <nav class="level">
      <!-- Left side -->
      <div class="level-left">
        <div class="level-item">
          <p class="subtitle is-5">
            <strong>{{ contests.length }}</strong> contests
          </p>
        </div>
        <div class="level-item">
          <div class="field has-addons">
            <p class="control">
              <input class="input" type="text" placeholder="Find a post">
            </p>
            <p class="control">
              <button class="button">
                Search
              </button>
            </p>
          </div>
        </div>
      </div>

      <!-- Right side -->
      <div class="level-right">
        <p class="level-item"><a v-bind:class="{ 'selected-filter': filter == 'all' }" @click="filter='all'">All</a></p>
        <p class="level-item"><a v-bind:class="{ 'selected-filter': filter == 'live' }" @click="filter='live'">Live</a></p>
        <p class="level-item"><a v-bind:class="{ 'selected-filter': filter == 'upcoming' }" @click="filter='upcoming'">Upcoming</a></p>
        <p class="level-item"><a v-bind:class="{ 'selected-filter': filter == 'past' }" @click="filter='past'">Past</a></p>
      </div>
    </nav>
    <!-- Search Bar end -->

    <div class="spacer"></div>

    <div class="columns is-multiline">
      <div v-for="(contest, index) in contests" class="column is-one-third-desktop is-half-tablet">
        <div class="card">
          <div class="card-title has-text-centered">
            <h2>{{ contest.name }}</h2>
          </div>
          <div class="card-content">
            <div class="content">
              <div class="card-content-status-bar level columns is-mobile">
                <div class="level-left column is-one-quarter">
                  <span class="level-item button status" v-bind:class="{ 'is-success': contest.isLive, 'is-info': contest.isUpcoming, 'is-light': contest.isPast }">
                    <span v-if="contest.isLive">Live!</span>
                    <span v-if="contest.isUpcoming">Upcoming</span>
                    <span v-if="contest.isPast">Completed</span>
                  </span>
                </div>
                <div class="level-right column">
                  <strong class="level-item timestamp status">September 21, 12:00pm - 6:00pm</strong>
                </div>
              </div>
            </div>
            <div class="card-content-joined columns is-mobile">
              <div class="column avatar-icon" v-for="joined in contest.joined">
                <img :src="joined.photoURL">
              </div>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Join</a>
            <a class="card-footer-item">Invite</a>
            <a class="card-footer-item">Discard</a>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import { fb } from '@/helpers/firebase';

const avail = ['burrito', 'vader', 'taco', 'keen', 'rocco', 'hef', 'goku'];
const joined = avail.map((value) => {
  const obj = {
    displayName: value,
    photoURL: `/static/avatar/${value}.gif`,
  };
  return obj;
});

export default {
  name: 'contestList',
  data() {
    return {
      contests: [{
        name: 'Burrito awesome contest',
        startTime: new Date(2017, 9, 21, 12, 30),
        endTime: new Date(2017, 9, 21, 6),
        isLive: true,
        creator: {
          displayName: 'burrito',
          photoURL: '/static/avatar/burrito.gif',
        },
        joined,
      },
      {
        name: 'Keen awesome contest',
        startTime: new Date(2017, 9, 21, 12, 30),
        endTime: new Date(2017, 9, 21, 6),
        isUpcoming: true,
        creator: {
          displayName: 'keen',
          photoURL: '/static/avatar/keen.gif',
        },
        joined,
      },
      {
        name: 'Vader awesome contest',
        startTime: new Date(2017, 9, 21, 12, 30),
        endTime: new Date(2017, 9, 21, 6),
        isUpcoming: true,
        creator: {
          displayName: 'vader',
          photoURL: '/static/avatar/vader.gif',
        },
        joined,
      },
      {
        name: 'Trump awesome contest',
        startTime: new Date(2017, 9, 21, 12, 30),
        endTime: new Date(2017, 9, 21, 6),
        isUpcoming: true,
        creator: {
          displayName: 'trump',
          photoURL: '/static/avatar/trump.gif',
        },
        joined,
      },
      {
        name: 'Taco awesome contest',
        startTime: new Date(2017, 9, 21, 12, 30),
        endTime: new Date(2017, 9, 21, 6),
        isPast: true,
        creator: {
          displayName: 'taco',
          photoURL: '/static/avatar/taco.gif',
        },
        joined,
      }],
      filter: 'all',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.avatar-icon {
  padding: 0;
}

div.avatar-icon img {
  border-radius: 20px;
  width: 36px;
  height: 36px;
  padding: 0;
}
.card-content .status {
  font-size: 0.8em;
}
.card-title h2{
  font-weight: bolder;
}
.selected-filter {
  font-weight: bold;
  color: #000;
}
p.title.is-bold {
  font-weight: bold;
}
.card .timestamp {
  font-size: 0.8em;
  float:right;
  color:#bbb;
}
</style>
