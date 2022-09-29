// /* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Post } from "./pages";

export const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Post />} />
    </Routes>
  );
};

export default Index;
