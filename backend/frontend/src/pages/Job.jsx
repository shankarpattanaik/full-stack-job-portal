import React from "react";
import { Button } from "../components/ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="p-5 rounded-lg shadow-lg bg-white border border-gray-300 transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl w-full min-h-[350px] flex flex-col justify-between cursor-pointer">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-700">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-3 my-3">
        <Avatar className="w-12 h-12">
          <AvatarImage src={job?.company?.logo} />
        </Avatar>
        <div>
          <h1 className="font-medium text-lg text-gray-800">
            {job?.company?.name}
          </h1>
          <p className="text-sm">India</p>
        </div>
      </div>

      <div className="flex-1">
        <h1 className="font-bold text-lg my-2 text-gray-900">{job?.title}</h1>
        <p className="text-sm text-gray-700 line-clamp-3">{job?.description}</p>
      </div>

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

      <div className="flex flex-wrap gap-5 mt-5">
        <Button onClick={() => navigate(`/description/${job?._id}`)}>
          Details
        </Button>
        <Button className="bg-[#A4161A] text-white hover:bg-[#660708]">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
