import { useEffect, useRef, useState } from "react";
import { NavBarItem } from "./NavBarItem.jsx";
import "./navBar.scss";
import TabletNavBar from "./TabletNavBar.jsx";

export const NavBar = () => {
  const navBar = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Scroll Position with Nav Bar:
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(
      currentScrollPos > 0 && prevScrollPos < currentScrollPos ? false : true
    );
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <>
      <div id="navBar" ref={navBar} style={{ top: visible ? "0" : "-100px" }}>
        <div className="wrapper">
          <nav id="innerNavBar">
            <NavBarItem
              name="IT-Sikkerhed"
              toId={""}
              containerId={"innerNavBar"}
            />
            <NavBarItem
              name="Kampagnespil"
              toId={"kampagnespil"}
              containerId={"innerNavBar"}
            />
            <NavBarItem
              name="Innovation"
              toId={"innovation"}
              containerId={"innerNavBar"}
            />
            <NavBarItem
              name="Programmering"
              toId={"programmering"}
              containerId={"innerNavBar"}
            />
            <NavBarItem
              name="Interaktionsdesign"
              toId={"interaktionsdesign"}
              containerId={"innerNavBar"}
            />
          </nav>
        </div>

        <TabletNavBar />
      </div>
    </>
  );
};
