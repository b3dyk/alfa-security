import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <ThreeDots
      height="19"
      width="116"
      color="#fff"
      wrapperClass=""
      visible={true}
      ariaLabel="three-dots-pulsating"
    />
  );
};

export default Loader;
