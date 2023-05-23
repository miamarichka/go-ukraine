import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { FrameWrapper } from "./EntertainmentSection.styled";
import { useParams } from "react-router";
import { Loader } from "../../Loader/Loader";
import { NotificationFailed } from "../../Notification/Notifications";
import axios from "axios";

const videoOptions = {
  width: "1400",
  height: "800",
};

export const EntertainmentSection = ({city}) => {
  const { city: cityParam } = useParams();
  const selectedCity = city || cityParam;
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    const loadEntertainmentInfo = async () => {
      const cityInLowerCase = selectedCity.toLowerCase();

      try {
        setIsError(false);
        const entertainmentInfoFromServer = await axios.get(
          "https://64521253bce0b0a0f73bdbe4.mockapi.io/city/entertainment"
        );

        if (entertainmentInfoFromServer.data.length) {
          const findVideo = entertainmentInfoFromServer.data.find(
            (video) => video.city === cityInLowerCase
          );
          if (findVideo) {
            setVideoId(findVideo.videoId);
          };
        }
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
        setIsError(false);
      }
    };

    loadEntertainmentInfo();

    return () => {
      setVideoId(null);
    };
  }, [selectedCity]);

  return (
    <>
      {isError && (
        <NotificationFailed message={"Can't get entertainment information"} />
      )}
      {!videoId && isLoading && <Loader />}
      {videoId && (
        <div>
          <FrameWrapper>
            <YouTube videoId={videoId} opts={videoOptions} />
          </FrameWrapper>
        </div>
      )}
    </>
  );
};
