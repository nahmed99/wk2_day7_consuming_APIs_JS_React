import {useState, useEffect} from 'react';
import LaunchSelector from "../components/LaunchSelector";
import LaunchDetails from "../components/LaunchDetails";

const LaunchContainer = () => {

  const [launch, setLaunch] = useState(null);

  const getLaunch = () => {
    console.log("Getting launch info...");

    // One argument, then a GET request, and returns a 'promise' - the '.then'. More than one argument it does a POST request.
    fetch(`https://api.spacexdata.com/v3/launches/1`).then((res) => {
        return res.json().then((data) => {
          setLaunch(data);
        });
    });
  }

  useEffect(() => {
    getLaunch();
  }, []) // The empty array will mean that this will only run once...

  return (
    <>
      <h1>SpaceX Launch Details</h1>
      <LaunchSelector />
      <LaunchDetails launch={launch} />
    </>
  )

}

export default LaunchContainer;