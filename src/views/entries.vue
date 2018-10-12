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
        <entry_list v-on:click="entryClick" v-bind:visible="!entry.selected"/>
        <entry_card v-bind:entry="entry" v-bind:visible="entry.selected" v-on:close="cardClose"/>
      </div>
    </div>
  </div>
</template>
<script>
const defaultEntry = {
  id: 0, 
  entry: "Hi!", 
  translation: "გამარჯობა!", 
  comment: "Click on a word to get started",
  selected: false
};
import entry_list from '@/components/entry_list.vue';
import entry_card from '@/components/entry_card.vue';
export default {
  components: {
    entry_list,
    entry_card
  },
  data: function() {
    return {
      entry: defaultEntry
    }
  },
  methods: {
    entryClick: function(entry) {
      this.entry = entry;
      this.entry.selected = true;
    },
    cardClose: function() {
      this.entry = defaultEntry;
    }
  }
};
</script>
<style>
  .entries-container {
    margin-top: 4rem;
  }
</style>
