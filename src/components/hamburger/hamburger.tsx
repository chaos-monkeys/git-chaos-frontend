import React from "react";
import * as styles from "./hamburger.module.scss";
import { useAppState, useAppDispatch } from "../../context/appContext";
import toggleSidebar from "../../utils/toggleSidebar";

// NOTE: SOMEHOW 'require' stops a path error with typescript and svg (and all non-code assets?)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const OpenIcon = require("../../images/icons/open.inline.svg");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CloseIcon = require("../../images/icons/closed.inline.svg");

const hamburgerIcon = (open: boolean): JSX.Element =>
  open ? (
    <OpenIcon className={styles.icon} />
  ) : (
    <CloseIcon className={styles.icon} />
  );

const Hamburger = ({ isAnimating }: { isAnimating: boolean }): JSX.Element => {
  const dispatch = useAppDispatch();
  const { sidebar } = useAppState();

  return (
    <button
      type="button"
      aria-label="Menu"
      data-testid="Menu"
      data-open={sidebar.open}
      aria-expanded={sidebar.open}
      className={styles.hamburger}
      onClick={(): void =>
        toggleSidebar({
          isAnimating,
          isOpen: sidebar.open,
          dispatch,
        })
      }
    >
      {hamburgerIcon(sidebar.open)}
    </button>
  );
};

export default Hamburger;
