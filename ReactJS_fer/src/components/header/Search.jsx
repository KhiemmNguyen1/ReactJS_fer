import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 330,
        height: 45,
      }}
    >
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <IconButton
              sx={{ p: "10px" }}
              aria-label="menu"
              {...bindTrigger(popupState)}
            >
              <MenuIcon />
            </IconButton>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>Thời trang</MenuItem>
              <MenuItem onClick={popupState.close}>
                Công nghệ và điện tử
              </MenuItem>
              <MenuItem onClick={popupState.close}>Thức ăn</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search ..."
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
