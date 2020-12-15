const LaunchDetails = ({launch}) => {

  // Don't render LaunchDetails unless launch has some data
  if (!launch) {
    return null;
  }

  return (
    <>
      <h3>{launch.mission_name}</h3>
      <p>Rocket: {launch.rocket.rocket_name}</p>
    </>
  )
};

export default LaunchDetails;