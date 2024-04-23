import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Welcome = () => {
  return (
    <div className="flex relative">
      {/* Hi, welcome Jai */}
      <div className="fixed">
        <Sidebar />
      </div>
      <div className="mx-auto">
        <Content />
      </div>
    </div>
  );
};

export default Welcome;
