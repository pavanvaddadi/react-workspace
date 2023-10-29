import { createContext } from "react";

const AuthContext = createContext({ loggedInUser: "defaultUser" });

export default AuthContext;
