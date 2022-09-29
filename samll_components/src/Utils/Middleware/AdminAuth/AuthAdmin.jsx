import React from "react";
import { useState } from "react";
import useUser from "../../../Contexts/UserProvider/useUser";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

export default function AuthAdmin({ children }) {
  // const [isLoading, setIsLoading] = useState(true);
  const [thisuser, setThisUser] = useUser();
  // useEffect(() => {
  //   if (thisuser) {
  //     setIsLoading(false);
  //   }
  // }, [thisuser]);

  // if (isLoading) {
  //   return (
  //     <div>
  //       <h1>Loading... please wait...</h1>
  //     </div>
  //   );
  // }
  return thisuser.isAdmin ? children : <Navigate to="/dashboard" />;
}
