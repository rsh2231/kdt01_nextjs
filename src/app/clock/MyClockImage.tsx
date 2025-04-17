import Image from "next/image";
function MyClockImage() {
  return <Image src="/clock.png" alt="clock" width={300} height={10} className="animate-bounce"/>;
}
export default MyClockImage;
