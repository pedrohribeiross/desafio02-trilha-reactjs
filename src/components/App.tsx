import { Content } from "./Content";
import { SideBar } from "./SideBar";

import { GenreContextProvider } from "../contexts/GenreIdContext";

import "../styles/global.scss";
import "../styles/sidebar.scss";
import "../styles/content.scss";

export function App() {
  return (
    <GenreContextProvider>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <Content />
      </div>
    </GenreContextProvider>
  );
}
