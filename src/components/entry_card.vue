<template>
  <div class="card position-fixed w-50 p-3 shadow">
    <div class="card-body">
      <h5 class="card-title">{{entry.entry}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{entry.translation}}</h6>
      <p class="card-text">{{entry.comment}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    entry: Object
  }
}
</script>