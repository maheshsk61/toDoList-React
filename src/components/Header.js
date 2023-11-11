import React from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";
function Header() {
  return (
    <div className="col-xs-12">
      <header>
        <h1 className="text-center bg-success py-2">
          <ListAltIcon />
          ToDoList
        </h1>
      </header>
    </div>
  );
}
export default Header;
