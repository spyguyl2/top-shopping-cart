import PropTypes from "prop-types";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

const SideBar = ({ stateToggleOpen, children }) => {
  const nodeRef = useRef(null);
  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={stateToggleOpen}
        timeout={2000}
        classNames={"my-node"}
        appear
        mountOnEnter
        unmountOnExit
      >
        <SideBarWrapper ref={nodeRef}>{children}</SideBarWrapper>
      </CSSTransition>
    </>
  );
};

export default SideBar;

const SideBarWrapper = styled.div`
  width: 25%;
  height: 100vh;
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  background-color: black;
  overflow-x: hidden;
  padding-top: 1rem;

  &.my-node-enter {
    transform: translateX(100%);
  }

  &.my-node-enter-active {
    transform: translateX(0);
    transition: transform 450ms ease-out;
  }

  &.my-node-exit {
    transform: translateX(0);
  }

  &.my-node-exit-active {
    transform: translateX(100%);
    transition: transform 450ms ease-out;
  }
`;

SideBar.propTypes = {
  stateToggleOpen: PropTypes.bool.isRequired,
  children: PropTypes.any,
};
