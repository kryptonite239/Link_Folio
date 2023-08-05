"use client";
const { SessionProvider } = require("next-auth/react");

const Providers = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default Providers;
