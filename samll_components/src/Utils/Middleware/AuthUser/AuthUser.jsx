import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import useUser from "../../../Contexts/UserProvider/useUser";

export default function AuthUser({ children }) {
  // const [isLoading, setIsLoading] = useState(true);

  const [thisUser, setThisUser] = useUser();

  // useEffect(() => {
  //   if (thisUser) {
  //     setIsLoading(false);
  //   }
  // }, [thisUser]);

  // if (isLoading) {
  //   return (
  //     <div>
  //       <h1>User is loading..</h1>
  //     </div>
  //   );
  // }
  return !thisUser.isAdmin ? children : <Navigate to="/dashboard" />;
}
