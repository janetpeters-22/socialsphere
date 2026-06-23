import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box
} from "@mui/material";

import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        borderRadius: 3,
        mb: 3
      }}
    >
      <Toolbar>

        <Typography
          variant="h6"
          fontWeight="bold"
        >
          🌐 SocialSphere
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <IconButton color="inherit">
          <DarkModeIcon />
        </IconButton>

      </Toolbar>
    </AppBar>
  );
}