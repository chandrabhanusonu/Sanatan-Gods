import React from "react";
import Testimonials from "./Component/Testimonials";
import reviews from "./data";

const App = () => {
  return(
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testmonial</h1>
        <div className="h-[4px] w-[1/5] mt-1 bg-violet-400"></div>
        <Testimonials reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
