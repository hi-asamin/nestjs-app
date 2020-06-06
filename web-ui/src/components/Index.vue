<template>
  <div>
    <h1>初期表示画面</h1>
    <router-link
      to="/users"
      tag="a"
      style="cursor: pointer;">
      ユーザー管理画面
    </router-link>
    <br>
    <router-link
      to="/tenants"
      tag="a"
      style="cursor: pointer;">
      テナント管理画面
    </router-link>
    <br>
    <button @click="ping">ping</button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      message: ''
    }
  },
  computed: {},
  mixins: [],
  watch: {},
  methods: {
    ping: async function() {
      try {
        const message = await this.$axios.get('/')
        this.message = message.data
      } catch (error) {
        this.message = 'Server is Not Running...'
      }
    }
  },
  // 以下、ライフサイクル系処理
  beforeCreate: function() {
  },
  created: function() {
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