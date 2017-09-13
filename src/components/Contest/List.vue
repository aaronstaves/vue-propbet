<template>
  <div class="container">

    <!-- Main container -->
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

    <div class="spacer"></div>

    <div class="columns">
      <div class="column is-one-third">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://placehold.it/300x225" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span class="tag is-dark">#webdev</span>
              <strong class="timestamp">2 d</strong>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
      </div>
      <div class="column is-one-third">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://placehold.it/300x225" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span class="tag is-dark">#webdev</span>
              <strong class="timestamp">2 d</strong>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br>
      </div>
    </div>
  </div>
</template>

<script>

// import { fb } from '@/helpers/firebase';

export default {
  name: 'contestList',
  data() {
    return {
      contests: [],
      filter: 'all',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selected-filter {
  font-weight: bold;
  color: #000;
}
.container {
  padding-top: 40px;
}
p.title.is-bold {
  font-weight: bold;
}
.card .timestamp {
  float:right;
  color:#bbb;
}
</style>
