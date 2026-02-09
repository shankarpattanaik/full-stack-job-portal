import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <div className="text-center max-w-7xl mx-auto mt-4 mb-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
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
