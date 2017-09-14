<template>
<div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title has-text-centered">Select Avatar</p>
    </header>
    <section class="modal-card-body">
      <div class="columns is-multiline">
        <div :avatar-src="avatar.src" @click="selectAvatar" v-for="avatar in avatars" class="avatar has-text-centered column is-one-quarter">
          <img :src="avatar.src">
        </div>
      </div>
      <b-loading :active.sync="isLoading"></b-loading>
    </section>
  </div>
</template>

<<script>
import { fb } from '@/helpers/firebase';

const db = fb.database();

export default {
  data() {
    return {
      avatars: [],
    };
  },
  firebase: {
    avatars: db.ref('avatars'),
  },
  created() {
    this.isLoading = false;
    const loadedAvatars = [];

    this.$firebaseRefs.avatars.once('value')
      .then((avatars) => {
        avatars.forEach((avatar) => {
          // testing
          loadedAvatars.push({
            name: avatar.key,
            src: `/static/avatar/${avatar.val()}`,
          });
        });
        this.isLoading = false;
        this.avatars = loadedAvatars;
      });
  },
  methods: {
    selectAvatar(e) {
      this.isLoading = true;
      const newPhotoURL = e.currentTarget.getAttribute('avatar-src');

      fb.auth().currentUser.updateProfile({
        photoURL: newPhotoURL,
      })
        .then(() => {
          this.isLoading = false;
          this.$toast.open({
            type: 'is-success',
            message: 'Saved avatar!',
          });

          // update photo url of parent
          this.$emit('updatePhotoURL', newPhotoURL);
          this.$parent.close();
        })
        .catch((error) => {
          this.isLoading = false;
          this.$toast.open({
            type: 'is-danger',
            message: `Error saving avatar! ${error.message}`,
          });
        });
    },
  },
};
</script>

<<style scoped>
.avatar img {
  border-radius: 100px;
  padding: 5px;
  border: 1px solid #dbdbdb;
  cursor: pointer;
  width: 128px;
  height: 128px;
}
</style>
