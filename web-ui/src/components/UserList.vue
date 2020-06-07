<template>
  <div>
    <h1>ユーザー管理画面</h1>
    {{ name }}
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  components: {},
  data () {
    return {}
  },
  mixins: [],
  computed: {
    ...mapState('user', [
      'name'
    ])
  },
  watch: {},
  methods: {
    ...mapActions('user', [
      'setUser'
    ]),
    initialize: function() {
      this.loading = true;
      this.fetchData();
    },
    fetchData: async function() {
      try {
        const users = await this.$axios.get('/users')
        console.log(JSON.stringify(users.data[0]))
        this.setUser(users.data[0])
      } catch (error) {
        console.log('failed to get user list');
      }
    }
  },
  // 以下、ライフサイクル系処理
  beforeCreate: function() {
  },
  created: function() {
    this.initialize()
  },
  beforeMount: function() {
  },
  mounted: function() {
  },
  beforeUpdate: function() {
  },
  updated: function() {
  },
  beforeDestroy: function() {
  },
  destroyed: function() {
  }
}
</script>

<style scoped>
</style>