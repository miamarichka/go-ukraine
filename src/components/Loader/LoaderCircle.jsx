import { ColorRing } from "react-loader-spinner";

export const LoaderCircle = () => {
    return (
      <ColorRing
        visible={true}
        height='400'
        width='400'
        ariaLabel='blocks-loading'
        wrapperStyle={{}}
        wrapperClass='blocks-wrapper'
        colors={["#025ABB", "#FCD800", "#025ABB", "#FCD800", "#025ABB"]}
      >Please, wait few seconds</ColorRing>
    );
}