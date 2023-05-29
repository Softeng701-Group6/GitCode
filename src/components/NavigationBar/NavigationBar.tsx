import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  LinearProgress,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/logout";
import styles from "./NavigationBar.module.css";

export default function NavigationBar() {
  var experience: number = 2;
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Box className={styles.root}>
      <AppBar position="static" style={{ background: "#252525" }}>
        <Toolbar className={styles["toolbar"]}>
          <Typography
            variant="h6"
            component="a"
            href="/home"
            className={styles["title"]}
            sx={{ fontSize: 32, fontWeight: "bold", py: 4, paddingLeft: 4 }}
          >

            Git
          </Typography>
          <Typography
            variant="h6"
            component="a"
            href="/home"
            className={styles["subTitle"]}
            sx={{ fontSize: 32, fontWeight: "bold" }}
          >
            Code.
          </Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open profile settings">
              <IconButton onClick={handleLogout} sx={{ p: 0 }}>
                <LogoutIcon
                  className={styles["userIcon"]}
                  sx={{ fontSize: 48 }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
        <Box sx={{ width: "100%" }}>
          <LinearProgress
            variant="determinate"
            value={experience}
            sx={{
              backgroundColor: "#343434",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#31884F",
              },
            }}
          />
        </Box>
      </AppBar>
    </Box>
  );
}
