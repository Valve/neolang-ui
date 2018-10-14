<template>
  <div class="row mt-3">
    <div class="col-lg-4">
      <button type="button" class="btn btn-outline-primary" v-on:click="goBack">Go Back</button>
      <h1>{{ entry.text }} - {{entry.translation}}</h1>
      <p>
        {{ entry.example.translation }}
      </p>
      <p>
        <i>{{ entry.example.example }}</i>
      </p>
      <button type="button" class="btn btn-info btn-block" v-on:mousedown="onStartRecording" v-on:mouseup="onStopRecording">
        hold button to record
      </button>
      <br/>
      <p id="audio-container"></p>
      <button type="button" class="btn btn-outline-primary btn-block" v-on:click="save" v-if="audio">Save</button>
    </div>
  </div>
</template>
<script>
  import Recorder from '@/lib/recorder.js'
  export default {
    data: function () {
      return {
        entry: {
          example: {}
        },
        audio: null,
        recorder: new Recorder()
      };
    },
    methods: {
      goBack: function () {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      },
      onStartRecording: function (e) {
        let that = this;
        if (Recorder.isRecordingSupported()) {
          e.target.classList.remove("btn-info");
          e.target.classList.add("btn-danger");
          e.target.innerText = "Recording..."
          this.recorder.start(function (blob) {
            that.audio = new Audio(URL.createObjectURL(blob));
            that.audio.setAttribute('controls', '');
            that.audio.setAttribute('autoplay', '');
            that.audio.classList.add("w-100")
            let audioContainer = document.getElementById("audio-container");
            audioContainer.innerHTML = "";
            audioContainer.appendChild(that.audio);
          });
        } else {
          alert('Audio recording is not supported in your browser.')
        }
      },
      onStopRecording: function (e) {
        let blob = this.recorder.stop();
        e.target.classList.remove("btn-danger");
        e.target.classList.add("btn-success");
        e.target.innerText = "Record again"
      },
      save: function(){

      }
    },
    created: function () {
      this.$http.get("https://api.neolang.app/v1/entries/" + this.$route.params.id).then(function (res) {
        this.entry = res.data;
      });
    }
  };
</script>