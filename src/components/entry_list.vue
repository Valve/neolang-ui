<template>
  <div class="columns">
    <div class="column is-one-third">
      <nav class="panel">
        <div class="panel-heading"> 
          <p class="control">
            <input class="input" type="text" placeholder="search">
          </p>
        </div>
        <a class="panel-block" v-for="e in entries">
          <b>{{e.entry }}</b> &nbsp;- {{e.translation}}
        </a>
      </nav>
    </div>
    <div class="column">
      <div class="card is-hidden-mobile">
        <header class="card-header">
          <p class="card-header-title">
            Component
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">Save</a>
          <a href="#" class="card-footer-item">Edit</a>
          <a href="#" class="card-footer-item">Delete</a>
        </footer>
      </div>
    </div>

  </div>

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
<style>
  #words {
   position: fixed;
   top: 1rem;
   bottom: 1rem;
 }
</style>
