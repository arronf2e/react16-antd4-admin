import { useState } from "react";
import { createContainer } from "unstated-next";

function useUser() {
  const [user, setUser] = useState();
  return {
    user,
    setUser
  };
}

export const User = createContainer(useUser);
