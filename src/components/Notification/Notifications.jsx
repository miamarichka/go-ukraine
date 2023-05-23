import Notiflix from "notiflix";

Notiflix.Notify.init({
  width: "480px",
  position: "center-center",
  distance: "10px",
  opacity: 1,
  borderRadius: "5px",
  rtl: false,
  timeout: 1500,
  messageMaxLength: 110,
  backOverlay: false,
  backOverlayColor: "rgba(0,0,0,0.5)",
  plainText: true,
  showOnlyTheLastOne: true,
  clickToClose: true,
  pauseOnHover: true,
  ID: "NotiflixNotify",
  className: "notiflix-notify",
  zindex: 0,
  fontFamily: "Quicksand",
  fontSize: "26px",
  cssAnimation: true,
  cssAnimationDuration: 400,
  cssAnimationStyle: "fade",
  closeButton: true,
  useIcon: false,
  useFontAwesome: false,
  fontAwesomeIconStyle: "basic",
  fontAwesomeIconSize: "34px",
  success: {
    background: "#32c682",
    textColor: "#fff",
    childClassName: "notiflix-notify-success",
    notiflixIconColor: "rgba(0,0,0,0.2)",
    fontAwesomeClassName: "fas fa-check-circle",
    fontAwesomeIconColor: "rgba(0,0,0,0.2)",
    backOverlayColor: "rgba(50,198,130,0.2)",
  },
  failure: {
    background: "#ff5549",
    textColor: "#fff",
    childClassName: "notiflix-notify-failure",
    notiflixIconColor: "#fff",
    fontAwesomeClassName: "fas fa-times-circle",
    fontAwesomeIconColor: "rgba(0,0,0,0.2)",
    backOverlayColor: "rgba(255,85,73,0.2)",
  },
  warning: {
    background: "#eebf31",
    textColor: "#fff",
    childClassName: "notiflix-notify-warning",
    notiflixIconColor: "rgba(0,0,0,0.2)",
    fontAwesomeClassName: "fas fa-exclamation-circle",
    fontAwesomeIconColor: "rgba(0,0,0,0.2)",
    backOverlayColor: "rgba(238,191,49,0.2)",
  },
  info: {
    background: "#025ABB",
    textColor: "#fff",
    childClassName: "notiflix-notify-info",
    notiflixIconColor: "#fff",
    fontAwesomeClassName: "fas fa-info-circle",
    fontAwesomeIconColor: "rgba(0,0,0,0.2)",
    backOverlayColor: "rgba(38,192,211,0.2)",
  },
});

export const NotificationFailed = ({message}) => {
    return Notiflix.Notify.failure(message);
}

export const NotificationInfo = ({ message }) => {
    return Notiflix.Notify.info(message);
}