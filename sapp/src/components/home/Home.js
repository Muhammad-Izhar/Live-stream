import React from "react";
import style from "./style";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateToRecording = () => {
    navigate("/recording");
  };
  const userData = [
    {
      id: "p1",
      name: "asdf",
      session: 1234567890,
      date: "Oct 20,2022",
      title: "video-3",
    },
    {
      id: "p2",
      name: "asdf",
      session: 1234567890,
      date: "Oct 20,2022",
      title: "video-3",
    },
    {
      id: "p3",
      name: "asdf",
      session: 1234567890,
      date: "Oct 20,2022",
      title: "video-3",
    },
  ];

  return (
    <div className={style.mainDiv}>
      <h1 className={style.heading}>All Patient Data</h1>
      <table className={style.table}>
        <thead>
          <tr className={style.tableTr}>
            <th className="w-1/12 text-center">#</th>
            <th className="w-1/12 text-center">id</th>
            <th className="w-2/12 text-center">Name</th>
            <th className="w-2/12 text-center">Session</th>
            <th className="w-2/12 text-center">Consultation Date</th>
            <th className="w-1/12 text-center"></th>
            <th className="w-3/12 text-center">
              <button onClick={navigateToRecording} className={style.newBtn}>
                New Analysis
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {userData.map((data, index) => {
            return (
              <tr className={style.tableTr} key={index + 1}>
                <td className="w-1/12 text-center">{index + 1}</td>
                <td className="w-1/12 text-center">{data.id}</td>
                <td className="w-2/12 text-center">{data.name}</td>
                <td className="w-2/12 text-center">{data.session}</td>
                <td className="w-2/12 text-center">{data.date}</td>
                <td className="w-2/12 text-center">
                  <button className={style.detailbtn}>Details</button>
                </td>
                <td className="w-2/12 text-center">
                  <button className={style.deletebtn}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
