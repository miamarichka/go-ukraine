import { createPortal } from "react-dom";
import { Modal } from "../ModalOverlay/ModalOverlay.styled";
import { CityLink, NotificWrapper, StyledBackDrop } from "./CityInfoNotification.styled";

const modalRoot = document.querySelector("#modal-root");

export const CityInfoNotification = () => {

    return createPortal(
      <StyledBackDrop>
        <Modal>
          <NotificWrapper>
            Info about this city still in progress, you may have a look on
            <CityLink to={"/lutsk/overview"}>Lutsk</CityLink>
            <CityLink to={"/rivne/overview"}>Rivne</CityLink>
            <CityLink to={"/lviv/overview"}>Lviv</CityLink>
            <CityLink to={"/ternopil/overview"}>Ternopil</CityLink>
            <CityLink to={"/kmelnytskiy/overview"}>Kmelnytskiy</CityLink>
            or back to the
            <CityLink to={"/"}>Main Page</CityLink>
          </NotificWrapper>
        </Modal>
      </StyledBackDrop>,
      modalRoot
    );
}