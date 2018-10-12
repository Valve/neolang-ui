<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="e in entries">
      <b>{{e.entry }}</b> &nbsp;- {{e.translation}}
    </li>
  </ul>
</template>
<script>
export default {
  data: function() {
    return {
      entries: []
    };
  },
  created: function() {
    this.$http.get("https://api.neolang.app/v1/entries").then(function(res) {
      this.entries = res.data;
    });
  }
};
</script>