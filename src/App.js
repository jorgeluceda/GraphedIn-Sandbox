import React, { useState } from "react";
import "./styles.css";

// connections pictures
import conn_l from "../public/connection-left.jpg";
import conn_m from "../public/connection-middle.jpg";
import conn_r from "../public/connection-right.jpg";

// options icons (unfulled)
import { ReactComponent as HomeUnfilled } from "../public/options-icons-unfilled/home.svg";
import { ReactComponent as NetworkUnfilled } from "../public/options-icons-unfilled/network.svg";
import { ReactComponent as PostUnfilled } from "../public/options-icons-unfilled/post.svg";
import { ReactComponent as NotifsUnfilled } from "../public/options-icons-unfilled/notifs.svg";
import { ReactComponent as JobsUnfilled } from "../public/options-icons-unfilled/jobs.svg";

// options icons (filled)
import { ReactComponent as HomeFilled } from "../public/options-icons-filled/home.svg";
import { ReactComponent as NetworkFilled } from "../public/options-icons-filled/network.svg";
import { ReactComponent as PostFilled } from "../public/options-icons-filled/post.svg";
import { ReactComponent as NotifsFilled } from "../public/options-icons-filled/notifs.svg";
import { ReactComponent as JobsFilled } from "../public/options-icons-filled/jobs.svg";

export default function App() {
  const [currentOption, setCurrentOption] = useState("network");
  const [profile, setProfile] = useState({
    name: "Tim Cook",
    company: "CEO of Apple Inc.",
    degree: "2nd"
  });

  const [nodeLinks, setNodeLinks] = useState({
    leftToMiddle: true,
    middleToRight: true,
    rightToMain: true
  });

  let linkKeys = Object.keys(nodeLinks);
  let shownLinks = [];
  for (let i = 0; i < linkKeys.length; i++) {
    shownLinks.push(<div className={`link ${linkKeys[i]}`}>&nbsp;</div>);
  }

  return (
    <div className="App">
      <div className="searchBar" />
      <div className="profile">
        <div className="profileGraph">
          <div className="smallPicture spLeft">
            <img
              src={conn_l}
              alt="conn-l"
              className="embeddedPicture epSmall"
            />
          </div>
          <div className="smallPicture spMiddle">
            <img
              src={conn_m}
              alt="conn-m"
              className="embeddedPicture epSmall"
            />
          </div>
          <div className="smallPicture spRight">
            <img
              src={conn_r}
              alt="conn-r"
              className="embeddedPicture epSmall"
            />
          </div>

          {shownLinks}
        </div>

        <div className="profileSummary">
          <div className="summaryName">{profile.name}</div>
          <div className="summaryCompany">{profile.company}</div>
        </div>
        <div className="bigPicture">
          <div className="embeddedPicture epLarge" />
        </div>
        <div className="profileExtraInfo">Extra Info goes here</div>
        <div className="profileExtraInfo">Extra Info goes here</div>
        <div className="profileExtraInfo">Extra Info goes here</div>
        <div className="profileExtraInfo">Extra Info goes here</div>
      </div>
      <div className="options">
        <button>
          {currentOption === "home" ? (
            <>
              <HomeFilled className="optionsIcon" />
              <div className="optionsTextFilled">Home</div>
            </>
          ) : (
            <>
              <HomeUnfilled className="optionsIcon" />
              <div>Home</div>
            </>
          )}
        </button>
        <button>
          {currentOption === "network" ? (
            <>
              <NetworkFilled className="optionsIcon" />
              <div className="optionsTextFilled">My Network</div>
            </>
          ) : (
            <>
              <NetworkUnfilled className="optionsIcon" />
              <div>My Network</div>
            </>
          )}
        </button>

        <button>
          {currentOption === "post" ? (
            <>
              <PostFilled className="optionsIcon" />
              <div className="optionsTextFilled">Post</div>
            </>
          ) : (
            <>
              <PostUnfilled className="optionsIcon" />
              <div>Post</div>
            </>
          )}
        </button>
        <button>
          {currentOption === "notifications" ? (
            <>
              <NotifsFilled className="optionsIcon" />
              <div className="optionsTextFilled">Notifications</div>
            </>
          ) : (
            <>
              <NotifsUnfilled className="optionsIcon" />
              <div>Notifications</div>
            </>
          )}
        </button>
        <button>
          {currentOption === "jobs" ? (
            <>
              <JobsFilled className="optionsIcon" />
              <div className="optionsTextFilled">Jobs</div>
            </>
          ) : (
            <>
              <JobsUnfilled className="optionsIcon" />
              <div>Jobs</div>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
