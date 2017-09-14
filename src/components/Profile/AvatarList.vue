<<template>
  <div class="container">
    Selector
  </div>
</template>

<<script>
import { db } from '@/helpers/firebase';


export default {
  data() {
    return {

    };
  },
  firebase: {
    avatars: db.ref('avatars'),
  },
  created() {
    this.$firebaseRefs.avatars.once('value')
      .then((avatars) => {
        console.dir(avatars);
        avatars.forEach((avatar) => {
          // testing
          console.log(avatar.val());
        });
      });
  },
};
</script>

<<style scoped>

</style>
