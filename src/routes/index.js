import React from "react";
import { Routes, Route } from "react-router-dom";
import Post from "../containers/post";

const Index = () => {
  return (
    <Routes>
      <Route path="/*" element={<Post />} />
    </Routes>
  );
};

export default Index;
