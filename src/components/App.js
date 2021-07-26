import "./App.css";
import { useEffect, useState } from "react";
import { getCurrentTabUrl } from "../utils/getCurrentTabUrl";
import { getInvidiousInstance } from "../utils/getInvidiousInstance";
import { Loading } from "./Loading";
import { Select } from "./Select";

export const App = () => {
  const [instances, setInstances] = useState([]);
  const [instancesName, setInstancesName] = useState([]);
  const [currentTabUrl, setCurrentTabUrl] = useState(null);

  useEffect(() => {
    Promise.all([getInvidiousInstance(), getCurrentTabUrl()]).then(
      ([{ data, dataName }, tabUrl]) => {
        setCurrentTabUrl(new URL(tabUrl));
        setInstances(data);
        setInstancesName(dataName);
      }
    );
  }, []);

  if (currentTabUrl === null) {
    return <Loading />;
  }

  const isInvidiousPublicHostname = instancesName.includes(
    currentTabUrl.hostname
  );

  if (!isInvidiousPublicHostname) {
    return (
      <div className="App">
        <b>This is not invidious public instance</b>
      </div>
    );
  }

  return (
    <div className="App">
      <p class="Text">Choose your Invidious instance :</p>
      <Select currentTabUrl={currentTabUrl} instances={instances} />
    </div>
  );
};
