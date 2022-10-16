import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import HomeCard from "../components/HomeCard";
import JoinMeeting from "../components/JoinMeeting";
import { v4 as uuid } from "uuid";

// icons
import { MdVideoCall as NewCallIcon } from "react-icons/md";
import { MdAddBox as JoinCallIcon } from "react-icons/md";
import { BsCalendarDate as CalenderIcon } from "react-icons/bs";
import { MdScreenShare as ScreenShareIcon } from "react-icons/md";
import { Link } from "react-router-dom";

// const roomId = uuid();

function makeid(length) {
  var result           = '';
  var characters       = 'abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result.match(/.{1,3}/g).join("-");
}
const roomId = makeid(9)

const Home = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  const onSubmit = code => {
    console.log(code);
    navigate(`/room/${code}`);
  };

  return (
    <div className="bg-darkBlue1 min-h-screen text-slate-400">
      <div className="flex h-full md:gap-2 flex-col md:flex-row">
        <div className="p-3 w-auto h-auto items-center">
          <div className="flex gap-2 md:gap-6 mb-3 md:mb-6">
            <Link to={`/room/${roomId}`} className="block w-full">
              <HomeCard
                title="New Meeting"
                desc="Create a new meeting"
                icon={<NewCallIcon />}
                iconBgColor="lightYellows"
                bgColor="bg-yellow"
                route={`/room/`}
              />
            </Link>
            <HomeCard
              title="Schedule"
              desc="schedule your meeting"
              icon={<CalenderIcon size={20} />}
              bgColor="bg-blue"
            />
          </div>
          <div className="flex gap-2 md:gap-6">

            <HomeCard
              title="Screen Share"
              desc="show your work"
              icon={<ScreenShareIcon size={22} />}
              bgColor="bg-blue"
            />
          </div>
        </div>
        <div className="flex-grow md:h-screen md:border-l-2 border-lightGray p-3 md:p-4">
          <div className="relative md:h-52 w-full bg-slate-500 rounded md:rounded-2xl p-3">
            <div className="md:absolute bottom-2 left-2 md:bottom-6 md:left-6">
              <p className="md:text-7xl text-4xl text-white">
                {`${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
                  }:${date.getMinutes() < 10
                    ? `0${date.getMinutes()}`
                    : date.getMinutes()
                  }`}
              </p>
              <p className="text-slate-300 font-thin my-1">
                {`${days[date.getDay()]},${date.getDate()} ${months[date.getMonth()]
                  } ${date.getFullYear()}`}
              </p>
            </div>
          </div>
          <JoinMeeting onSubmit={onSubmit} />
        </div>

      </div>
    </div>
  );
};

export default Home;
