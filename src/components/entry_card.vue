<template>
  <div class="card w-auto p-3 shadow" v-if="visible">
    <div class="float-right">
      <button type="button" class="close" aria-label="Close" v-on:click="$emit('close')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{entry.entry}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{entry.translation}}</h6>
      <p class="card-text">{{entry.comment}}</p>
      <div class="btn-group btn-group-lg" role="group" aria-label="...">
        <button type="button" class="btn btn-light" v-on:click="$emit('close')">Go Back</button>
        <button type="button" class="btn btn-success">Record voice</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      visible: Boolean,
      entry: Object
    }
  }
</script>