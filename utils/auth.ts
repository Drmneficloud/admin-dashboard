import { auth } from "../firebase/config";

export function isAdmin() {
  const user = auth.currentUser;
  return user?.email === "mnefal3nzi@gmail.com";
}
