import "./Select.css";
import browser from "webextension-polyfill";

export const Select = ({ currentTabUrl, instances }) => {
  const onInstanceChange = (event) => {
    const { value } = event.target;
    currentTabUrl.hostname = value;
    browser.tabs.update({ url: currentTabUrl.href });
  };

  return (
    <select className="Select" onChange={onInstanceChange}>
      {instances.map(([name, { flag }]) => (
        <option key={name} value={name}>
          {flag} - {name}
        </option>
      ))}
    </select>
  );
};
