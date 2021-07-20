import React from "react";

const Notification = ({ notification, message }) =>
  notification && (
    <div className={notification === "error" ? "error" : "success"}>
      {message}
    </div>
);

export default Notification;
