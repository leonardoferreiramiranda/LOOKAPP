import React from "react";
import { Box, ScrollView, Text } from "../../styles";
import Post from ".";

const PostList = () => {
  return (
    <Box fluid>
      <Box>
        {Array.from(Array(20))?.map((item) => (
          <Post />
        ))}
      </Box>
    </Box>
  );
};

export default PostList;
