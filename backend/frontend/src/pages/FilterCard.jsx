import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: ["Bengaluru", "Hyderabad", "Delhi", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Full Stack Developer", "Backend Developer", "Frontend Developer"],
  },
  {
    filterType: "Salary",
    array: ["0 - 5LPA", "5LPA - 10LPA", "10LPA - 20LPA"],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);

  return (
    <div className="w-full bg-white dark:bg-gray-800 p-4 sm:p-6 sm:mb-6 rounded-lg shadow-md">
      <h1 className="font-bold text-xl mb-3 text-gray-800 dark:text-gray-100">
        Filter Jobs
      </h1>
      <hr className="border-gray-300 dark:border-gray-600 mb-2" />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data, index) => (
          <div key={index} className="mb-2">
            <h1 className="font-semibold text-md mb-2 text-gray-700 dark:text-gray-200">
              {data.filterType}
            </h1>
            <div className="flex flex-col">
              {data.array.map((item, idx) => {
                const itemId = `id${index}-${idx}`;
                return (
                  <div
                    key={itemId}
                    className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    <RadioGroupItem value={item} id={itemId} />
                    <Label htmlFor={itemId}>{item}</Label>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
