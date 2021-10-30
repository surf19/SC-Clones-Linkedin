import React from "react";
import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";

function Sidebar() {
  
    // function for dynamic feed into sidebar__bottom
  const recentItem = (topic) => {
      return(
    <div className="sidebar__recentItem">
      <span className="sidebar__hash" >#</span>
      <p>{topic}</p>
    </div>
      );
  }

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media.istockphoto.com/photos/water-splash-and-wave-on-white-background-picture-id943372530?k=6&m=943372530&s=170667a&w=0&h=NuYCCCwz9UlL5MTxOAysmb1-nEKZEV1e4KCmtOX1fP8="
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Tintin T</h2>
        <h4>abcc7777.fahbfjha@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statnumber">2,453</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on your post</p>
          <p className="sidebar__statnumber">2,448</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem ("ReactJS")}
        {recentItem ("Firebase")}
        {recentItem ("Apps")}
      </div>
    </div>
  );
}

export default Sidebar;
