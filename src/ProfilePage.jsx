import React from "react";
import { useAuth } from "./auth";

const ProfilePage = () => {
  const auth = useAuth();
  return (
    <>
      <h1>Profile</h1>

      <h1>Hi! {auth.user.username}</h1>
    </>
  );
};

export default ProfilePage;
