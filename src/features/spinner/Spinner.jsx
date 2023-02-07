import { ThreeCircles } from 'react-loader-spinner';

export default function Spinner() {
  return (
    <ThreeCircles
      height="100"
      width="100"
      color="#4fa94d"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor="red"
      innerCircleColor="blue"
      middleCircleColor="green"
    />
  );
}
