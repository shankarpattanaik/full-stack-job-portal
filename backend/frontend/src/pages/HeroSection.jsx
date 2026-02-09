import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center flex flex-col gap-8 md:gap-12 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight md:tracking-wide">
          Discover Opportunities
          <span className="block mt-4">
            Get <span className="text-[#A4161A]">Hired Faster</span>
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center w-full sm:w-4/5 md:w-3/5 lg:w-4/5 mx-auto shadow-lg border border-gray-200 rounded-full overflow-hidden mt-6 sm:mt-8">
          <input
            type="text"
            placeholder="Explore your dream career"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full px-4 py-3 text-gray-700 text-base sm:text-lg"
          />
          <Button
            onClick={searchJobHandler}
            className="w-full sm:w-auto sm:px-6 py-3 sm:py-3 bg-[#A4161A] hover:bg-[#660708] rounded-full sm:rounded-r-full"
          >
            <Search className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
