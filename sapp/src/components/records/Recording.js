import React, { useState, useRef } from "react";
import style from "./style";

let recordVideo;
let newVideo = null;
function Recording() {
  const videoRef = useRef(null);
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(null);
  const name = useRef();
  const id = useRef();
  const annoType = useRef();
  const comment = useRef();

  const getVideo = async () => {
    if (newVideo) {
      newVideo = null;
    }
    if (url) {
      setUrl(null);
    }
    console.log("start button clicked!");
    const response = await navigator.mediaDevices.getUserMedia({
      video: { width: 1920, height: 1080 },
      audio: true,
    });
    let video = videoRef.current;
    video.srcObject = response;
    video.play();
    recordVideo = new MediaRecorder(response);
    recordVideo.start(1000);
    recordVideo.ondataavailable = (e) => {
      setData((preData) => {
        return [...preData, e.data];
      });
    };
  };
  const stopVideo = () => {
    console.log("stop button clicked!");
    recordVideo.stop();
    const blob = new Blob(data, { type: "video/webm" });
    setUrl(URL.createObjectURL(blob));
  };

  const saveVideo = () => {
    console.log("save button clicked!");
    setData([]);
    newVideo = (
      <video autoPlay controls className="w-11/12 h-9/12 mx-auto">
        <source src={url} type="video/mp4" />
      </video>
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
    const pName = name.current.value;
    const pId = id.current.value;
    const pAnnoType = annoType.current.value;
    const pComment = comment.current.value;
    const pUrl = url;
    console.log(pName, pId, pAnnoType, pComment, pUrl);
  };

  return (
    <div>
      <h1 className={style.heading}>Session Detail</h1>
      <form onSubmit={submitHandler}>
        <main>
          <div className="w-full h-auto border py-3 shadow-md">
            <header className={style.header}>
              <label htmlFor="name">Patient Name:</label>
              <input ref={name} type="text" id="name" className={style.input} />
              <label htmlFor="sessioId">Session Id:</label>
              <input
                ref={id}
                type="text"
                id="sessioId"
                className={style.input}
              />
            </header>
          </div>
          <section className="flex mt-5">
            <div className={style.feedback}>
              <div className="flex justify-center border-b py-2">
                <h2 className="text-2xl py-1">Annotation Panel</h2>
              </div>
              <select
                ref={annoType}
                className={style.select}
                name="select id select"
              >
                <option value="type-1">type-1</option>
                <option value="type-2">type-2</option>
                <option value="type-3">type-3</option>
                <option value="type-4">type-4</option>
                <option value="type-5">type-5</option>
                <option value="type-6">type-6</option>
                <option value="type-7">type-7</option>
              </select>
              <textarea ref={comment} className={style.texterea} />
            </div>
            <div className="w-6/12 border rounded-md shadow-md h-80">
              <div className="flex">
                <div className="flex justify-center border-b py-2 w-6/12">
                  <h2 className="text-2xl py-1">Live Streaming</h2>
                </div>
                <div className="flex justify-center gap-3 border-b py-2 w-6/12">
                  <input
                    type="button"
                    className={style.btnstart}
                    onClick={getVideo}
                    value="Start"
                  />

                  <input
                    type="button"
                    value="Stop"
                    className={style.btnstart}
                    onClick={stopVideo}
                  />

                  <button
                    type="submit"
                    className={style.btnstart}
                    onClick={saveVideo}
                  >
                    Save
                  </button>
                </div>
              </div>
              <div className="w-full flex mt-6">
                <div className="w-6/12 border-r-2">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    className="bg-slate-600 w-11/12 h-11/12 mx-auto"
                  />
                </div>
                <div className="w-6/12">{newVideo && newVideo}</div>
              </div>
            </div>
          </section>
        </main>
      </form>
    </div>
  );
}

export default Recording;
