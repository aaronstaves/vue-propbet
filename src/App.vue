<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>


<style>
html,body {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>

<style lang="scss">

// Import Bulma's initial variables
@import "~bulma/sass/utilities/initial-variables";
$radius-small: 50px;
$radius: 50px;
$radius-large: 50px;


@import "~bulma";
@import "~buefy/src/scss/buefy";

</style>

