export default function Recorder() {
  this.chunks = [];
  this.mediaRecorder = null;
  this.status = "created";
}
Recorder.prototype = {
  start: function (onStop) {
    console.log("Starting recording");
    let that = this;
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(function (stream) {
        that.status = "recording";
        that.mediaRecorder = new MediaRecorder(stream);
        that.mediaRecorder.ondataavailable = function (e) {
          that.chunks.push(e.data);
        };
        that.mediaRecorder.onstop = function(e) {
          let blob = new Blob(that.chunks, {type: 'audio/webm;codecs=opus'});
          that.chunks = [];
          console.log("Stopped recording");
          this.status = "stopped";
          onStop(blob);
        }
        that.mediaRecorder.start();
      }).catch(function (error) {
        alert("Error occurred while recording: " + error)
      });
  },
  stop: function () {
    if (this.mediaRecorder && this.status == "recording") {
      this.status = "stopping";
      console.log("Stopping recording");
      this.mediaRecorder.stop();
    } else {
      console.log("cannot stop, because not recording");
    }
  },
}
Recorder.isRecordingSupported = function () {
  return navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
};