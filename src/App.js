import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/SearchFeed";

const App = () => (
  <div>
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed></Feed>} />
          <Route
            path="/video/:id"
            exact
            element={<VideoDetail></VideoDetail>}
          />
          <Route
            path="/channel/:id"
            exact
            element={<ChannelDetail></ChannelDetail>}
          />
          <Route
            path="/search/:searchTerm"
            exact
            element={<SearchFeed></SearchFeed>}
          />
        </Routes>
      </Box>
    </BrowserRouter>
  </div>
);

export default App;
