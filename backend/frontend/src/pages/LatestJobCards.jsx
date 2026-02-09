import React from "react";
import { Badge } from "../components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarImage } from "../components/ui/avatar";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="w-full p-5 md:p-6 rounded-2xl bg-white border border-gray-100 shadow-md cursor-pointer transition-all duration-300 hover:shadow-2xl hover:bg-gray-50"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src={job?.company?.logo} />
          </Avatar>

          <div>
            <h1 className="font-medium text-base md:text-lg text-gray-900">
              {job?.company?.name}
            </h1>
            <p className="text-sm text-gray-500">India</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h1 className="font-bold text-lg md:text-xl text-gray-800">
          {job?.title}
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-600 line-clamp-3">
          {job?.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        <Badge
          variant="ghost"
          className="rounded-full text-blue-700 font-semibold"
        >
          {job?.position} Positions
        </Badge>
        <Badge
          variant="ghost"
          className="rounded-full text-[#F83002] font-semibold"
        >
          {job?.jobType}
        </Badge>
        <Badge
          variant="ghost"
          className="rounded-full text-[#7209b7] font-semibold"
        >
          {job?.salary} LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
