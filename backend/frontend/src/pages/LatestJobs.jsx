import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-6">
      <h1
        className="text-center font-bold leading-tight mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-5xl lg:text-5xl"
      >
        <span className="text-[#A4161A]">Latest & Top </span>
        <span className="text-[#0B090A]">Career Opportunities</span>
      </h1>

      {allJobs.length <= 0 ? (
        <span className="text-[#0B090A]">No Job Available</span>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {allJobs?.slice(0, 6).map((job) => (
            <LatestJobCards key={job._id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestJobs;
