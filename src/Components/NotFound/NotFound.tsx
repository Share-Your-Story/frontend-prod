import React, { useEffect } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";

const NotFound = () => {
  const navigate: NavigateFunction = useNavigate();
  useEffect(() => {
    navigate("/home");
  });
  return <></>;
};

export default NotFound;
