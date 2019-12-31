import React, { Component } from "react";
import AudioAnalyser from "react-audio-analyser";
// import { RNCamera } from 'react-native-camera';
// import Home from './components/home'
// import Apps from './components/app'

const constrains = {
  audio: true,
  video: {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 776, ideal: 720, max: 1080 }
  }
};

class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      isFlashOn: false, //闪光灯
      isRecording: false //是否在录像
    };
  }
  controlAudio(status) {
    this.setState({
      status
    });
  }

  changeScheme(e) {
    this.setState({
      audioType: e.target.value
    });
  }
  handleRec = () => {
    if (navigator.mediaDevices === undefined) {
      var div = document.createElement("div");
      div.innerHTML = "mediaDevices not supported";
      document.body.appendChild(div);
    }

    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

    if (navigator.getUserMedia) {
      navigator.getUserMedia(
        {
          audio: true,
          video: {
            width: 1280,
            height: 720
          }
        },
        function(stream) {
          var video = document.querySelector("video");
          video.srcObject = stream;
          video.onloadedmetadata = function(e) {
            video.play();
          };
        },
        function(err) {
          alert("The following error occurred: " + err.name);
        }
      );
    } else {
      var div = document.createElement("div");
      div.innerHTML = "getUserMedia not supported";
      document.body.appendChild(div);
      alert("getUserMedia not supported");
    }
  };

  render() {
    const { status, audioSrc, audioType } = this.state;
    const audioProps = {
      audioType,
      audioOptions: { sampleRate: 30000 }, // 设置输出音频采样率
      status,
      audioSrc,
      timeslice: 1000, // 时间切片（https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/start#Parameters）
      startCallback: e => {
        console.log("succ start", e);
      },
      pauseCallback: e => {
        console.log("succ pause", e);
      },
      stopCallback: e => {
        this.setState({
          audioSrc: window.URL.createObjectURL(e)
        });
        console.log("succ stop", e);
      },
      onRecordCallback: e => {
        console.log("recording", e);
      },
      errorCallback: err => {
        console.log("error", err);
      }
    };
    return (
      <div>
        <div>
          <AudioAnalyser {...audioProps}>
            <div className="btn-box">
              {status !== "recording" && (
                <i title="开始" onClick={() => this.controlAudio("recording")}>
                  开始
                </i>
              )}
              {status === "recording" && (
                <i title="暂停" onClick={() => this.controlAudio("paused")}>
                  暂停
                </i>
              )}
              <i title="停止" onClick={() => this.controlAudio("inactive")}>
                停止
              </i>
            </div>
          </AudioAnalyser>
          <p>选择输出格式</p>
          <select
            name=""
            id=""
            onChange={e => this.changeScheme(e)}
            value={audioType}
          >
            <option value="audio/webm">audio/webm（default）</option>
            <option value="audio/wav">audio/wav</option>
            <option value="audio/mp3">audio/mp3</option>
          </select>
        </div>
      </div>
    );
  }
}

export default My;
