<template>
 <div class="login-wrapper columns">
    <div class="column is-8 is-hidden-mobile hero-banner">
      <section class="hero is-fullheight is-dark">
        <div class="hero-body">
          <div class="container section">
            <div class="has-text-right">
              <h1 class="title is-1">PropBet.app</h1> <br>
              <p class="title is-3">an app for betting, and losing</p>
            </div>
          </div>
        </div>
        <div class="hero-footer">
          <p class="has-text-centered">
            an allBurritos production
          </p>
        </div>
      </section>
    </div>
    <div class="column is-4">
      <section class="hero is-fullheight">
        <div class="hero-heading">
          <div class="section has-text-centered">
          </div>
        </div>
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-8 is-offset-2">
                <h1 class="avatar has-text-centered section">
                  <img src="../assets/avatar/burrito.gif">
                </h1>
                <div class="login-form">
                  <b-field>
                    <p class="control has-icon has-icon-right">
                      <b-input
                        v-model="user.email"
                        type="text"
                        placeholder="user@example.org"
                        icon-pack="fa"
                        icon="user"
                        size="is-medium"
                      >
                      </b-input>
                    </p>
                  </b-field>
                  <b-field>
                    <p class="control has-icon has-icon-right">
                      <b-input
                        v-model="user.password"
                        type="password"
                        placeholder="●●●●●●●"
                        icon-pack="fa"
                        icon="lock"
                        size="is-medium"
                      >

                      </b-input>

                    </p>
                  </b-field>

                  <b-field>
                    <p class="control login">
                      <button v-bind:class='{ hidden: !doSignup }' @click="login" class="button is-success is-outlined is-large is-fullwidth">Login</button>
                      <button v-bind:class='{ hidden: doSignup }' @click="signup" class="button is-success is-outlined is-large is-fullwidth">Signup</button>
                    </p>
                  </b-field>
                </div>
                <div class="section forgot-password">
                  <p class="has-text-centered">
                    <a href="#">Forgot password</a>
                  </p>
                  <p class="has-text-centered">
                    <a v-bind:class='{ hidden: !doSignup }' @click="doSignup = !doSignup" href="#">Sign Up</a>
                  </p>
                  <p v-bind:class='{ hidden: doSignup }' class="has-text-centered">
                    <a @click="doSignup = !doSignup" href="#">Login</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      doSignup: false,
    };
  },
  methods: {
    login() {
      console.dir(this.user);
    },
    signup() {
      console.dir(this.user);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hidden {
  display: none;
}

.avatar img {
  border-radius: 100px;
  padding: 5px;
  border: 1px solid #dbdbdb;
}

.forgot-password a {
  color: #95A5A6;
  font-weight: bold;
  padding-right: 20px;
}

.login {
  padding-top: 20px;
}

.login button {
  font-weight: bold;
}

.hero-body .container {
  margin-top: -100px;
}

.hero.is-dark .section {
  background-color: transparent;
}

.login-wrapper {
  margin: -0.75rem;
  overflow-y: hidden;
}

.hero-banner .hero {
  background: url('../assets/login-background.jpeg');
  background-position: center;
  background-size: cover;
  background-blend-mode: screen;
}

.hero-banner .title {
  display: inline-block;
  background-color: rgba(0,0,0, 0.2);
  padding: 5px;
}

.hero-footer {
  font-family: 'Pacifico', cursive;
  font-size: 1.5em
}
</style>
