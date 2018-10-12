<template>
  <div>
    <header>
      <nav class="navbar fixed-top navbar-light bg-light">
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        </form>
      </nav>
    </header>
    <div class="row">
      <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 entries-container">
        <entry_list/>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
      </div>
    </div>
  </div>
</template>
<script>
import entry_list from '@/components/entry_list.vue'
export default {
  components: {
    entry_list
  }
};
</script>
<style>
  .entries-container {
    margin-top: 4rem;
  }
</style>
