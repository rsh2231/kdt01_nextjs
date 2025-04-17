'use client'

import FoodCard from "./FoodCard";
import FoodData from "./fooddata.json";
import TailButton from "@/components/ui/TailButton";
import { useState } from "react";

export default function FoodMain() {
  const [tags, setTags] = useState<React.ReactNode[]>([]);

  let category:string[] = FoodData.map((item) =>
    item["운영주체 분류"].replaceAll(" ", "")
  ); // 공백 제거
  category = [...new Set(category)]; // Set : 중복 제거
  console.log(category);

  const handleCategory = (c) => {
    console.log("handleCategory", c);

    let tm = FoodData.filter(
      (item) => item["운영주체 분류"].replaceAll(" ", "") == c
    ).map((item) => <FoodCard key={item["사업장명"]} obj={item} />);
    setTags(tm);
  };

  const bts = category.map((item) => (
    <TailButton
      key={item}
      caption={item}
      color="lime"
      onClick={() => handleCategory(item)}
    />
  ));

  return (
    <div className="w-11/12">
      <div
        className="w-full flex justify-center items-center
                      p-5 border border-lime-800"
      >
        {bts}
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">{tags}</div>
    </div>
  );
}
