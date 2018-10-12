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
        <entry_list v-on:click="entryClicked"/>
      </div>
      <div class="col-lg-8 entries-container">
        <entry_card v-bind:entry="entry"/>
      </div>
    </div>
  </div>
</template>
<script>
import entry_list from '@/components/entry_list.vue';
import entry_card from '@/components/entry_card.vue';
export default {
  components: {
    entry_list,
    entry_card
  },
  data: function() {
    return {
      entry: {id: 0, entry: "Hi!", translation: "გამარჯობა!", comment: "Click on a word on the left to get started"}
    }
  },
  methods: {
    entryClicked: function(entry) {
      this.entry = entry;
    }
  }
};
</script>
<style>
  .entries-container {
    margin-top: 4rem;
  }
</style>
