<template>
  <div>
    <ul>
      <li v-for="e in entries"> {{e.entry}} ({{e.translation}})</li>
    </ul>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      entries: []
    }
  },
  created: function(){
    this.$http.get('http://api.neolang.app/v1/entries')
      .then(function(res){
        this.entries = res.data;
      });
  }
};
</script>
