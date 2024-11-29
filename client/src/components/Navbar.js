import React from "react";

import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4"></div>

      <div className="flex gap-2 items-center"></div>
    </div>
  );
};

export default Navbar;
