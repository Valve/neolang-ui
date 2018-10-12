<template>
  <ul class="list-group shadow">
    <li class="list-group-item list-group-item-action" 
        v-for="entry in entries" 
        :key="entry.id" 
        v-on:click="$emit('click', entry)">
      <b>{{entry.entry }}</b> &nbsp;- {{entry.translation}}
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