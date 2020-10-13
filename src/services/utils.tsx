export const getCityName = (item: any) => {
  return item.split("/")[1].split("_").join(" ");
};

export const formatTime12h = () => {
  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? 0 + minutes : minutes;
  return (hours + ":" + minutes + " " + ampm).toUpperCase();
};

export const formatDayTag = (stamp: number) => {
  return new Date(stamp * 1000).toDateString().split(" ")[0];
};
