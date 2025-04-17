import MyClockImage from "./MyClockImage";
import MyClockTime from "./MyClockTime";

function MyClock() {
  return (
    <div className="w-full h-full flex flex-col items-center p-30">
      <MyClockImage />
      <MyClockTime />
    </div>
  );
}
export default MyClock;
