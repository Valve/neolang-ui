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
      <div class="col entries-container">
        <entry_list v-on:click="entryClick" />
      </div>
    </div>
  </div>
</template>
<script>
  import entry_list from '@/components/entry_list.vue';
  export default {
    components: {
      entry_list,
    },
    data: function () {
      return {
        entry: {}
      }
    },
    methods: {
      entryClick: function (entry) {
        this.$router.push({path: "/entry/" + entry.id});
      },
    }
  };
</script>
<style>
  .entries-container {
    margin-top: 4rem;
  }
</style>