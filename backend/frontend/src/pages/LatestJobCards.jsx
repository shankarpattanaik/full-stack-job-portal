import React from "react";
import { Badge } from "../components/ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="mt-6 sm:mt-10 p-5 sm:p-6 rounded-xl shadow-lg bg-white border border-gray-100 cursor-pointer 
                 hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 ease-in-out"
    >
      {/* Company Info */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <h1 className="font-medium text-lg sm:text-xl text-gray-900">
          {job?.company?.name}
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mt-1 sm:mt-0">India</p>
      </div>

      {/* Job Title & Description */}
      <div className="mt-3 sm:mt-4">
        <h1 className="font-bold text-lg sm:text-xl my-1 sm:my-2 text-gray-800">
          {job?.title}
        </h1>
        <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
          {job?.description}
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="text-[#7209b7] font-bold" variant="ghost">
          {job?.salary}LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
