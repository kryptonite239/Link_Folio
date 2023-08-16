import "./globals.css";
import Provider from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToasterContext />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
