import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
  TextField,
  AppBar,
  Toolbar
} from "@mui/material";

import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function Feed() {

  const username =
    localStorage.getItem("username") || "janet";

  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");

  const fetchPosts = async () => {
    try {
      const res = await api.get("/posts");
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePost = async () => {
    if (!text.trim()) return;

    try {
      await api.post("/posts", {
        username,
        text
      });

      setText("");
      fetchPosts();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async (id) => {
  try {
    await api.put(`/posts/${id}/like`, {
      username
    });

    fetchPosts();
  } catch (err) {
    console.log(err);
  }
};

const handleComment = async (id) => {

  const text = prompt("Enter comment");

  if (!text) return;

  try {

    await api.post(`/posts/${id}/comment`, {
      username,
      text
    });

    fetchPosts();

  } catch (err) {
    console.log(err);
  }
};

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F4F6F8",
        p: 3
      }}
    >
      
      {/* Navbar */}

      <Navbar />

      <Box
  sx={{
    maxWidth: "800px",
    mx: "auto"
  }}
>

      {/* Create Post */}

      <Card
  sx={{
    borderRadius: 4,
    mb: 4,
    boxShadow: 3
  }}
>
  <CardContent>

    <Typography
      variant="h6"
      mb={2}
      fontWeight="bold"
    >
      What's on your mind?
    </Typography>

    <TextField
      fullWidth
      multiline
      rows={4}
      placeholder="Share something..."
      value={text}
      onChange={(e) =>
        setText(e.target.value)
      }
    />

    {/* Upload Image Button */}

    <Button
      component="label"
      variant="outlined"
      sx={{ mt: 2, mr: 2 }}
    >
      📷 Upload Image
      <input
        hidden
        type="file"
      />
    </Button>

    <Button
      variant="contained"
      sx={{
        mt: 2,
        borderRadius: 3
      }}
      onClick={handlePost}
    >
      POST
    </Button>

  </CardContent>
</Card>

      {/* Feed */}

      {posts.map((post) => (
        <Card
          key={post._id}
          sx={{
            mb: 3,
            borderRadius: 4,
            boxShadow: 2
          }}
        >
          <CardContent>

            {/* User Info */}

            <Box
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Avatar
                sx={{
                  bgcolor: "#1976d2"
                }}
              >
                {post.username?.[0]?.toUpperCase()}
              </Avatar>

             <Box>
  <Typography
    fontWeight="bold"
  >
    {post.username}
  </Typography>

  <Typography
    variant="caption"
    color="text.secondary"
  >
    {new Date(post.createdAt).toLocaleString()}
  </Typography>
</Box>
            </Box>

            {/* Post Content */}

            <Typography
              sx={{
                mt: 2,
                fontSize: "1rem"
              }}
            >
              {post.text}
            </Typography>

            {/* Like & Comment */}

            <Box
              sx={{
                mt: 3,
                display: "flex",
                gap: 2
              }}
            >
              <Button
  variant="outlined"
  onClick={() => handleLike(post._id)}
>
  ❤️ {post.likes?.length || 0}
</Button>

             <Button
  variant="outlined"
  onClick={() => handleComment(post._id)}
>
  💬 {post.comments?.length || 0}
</Button>
            </Box>

          </CardContent>
        </Card>
      ))}
      </Box>
    </Box>
  );
}

