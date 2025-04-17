interface TailBallProps {
  n: number; // 숫자만 와야 한다.
}

// export type BgColorT = {
//   "n0" : string;
//   "n1" : string;
//   "n2" : string;
//   "n3" : string;
//   "n4" : string;
// }

export type BgColorT = Record<`n${0 | 1 | 2 | 3 | 4}`, string>;

export default function TailBall({ n }: TailBallProps) {
  const bgColor: BgColorT = {
    n0: " bg-amber-700",
    n1: " bg-emerald-700",
    n2: " bg-blue-700",
    n3: " bg-fuchsia-700",
    n4: " bg-pink-700",
  };

  const group = Math.floor(n / 10);
  const key = `n${group}` as keyof BgColorT;
  const color = bgColor[key] ?? "bg-gray-500"; // bgColor[key]가 존재하지 않으면 "bg-gray-500" 사용

  return (
    <div
      className={`w-16 h-16 flex justify-center items-center
                   text-white font-bold text-2xl 
                   p-10 m-2 rounded-full ${color}`}
    >
      {n}
    </div>
  );
}
