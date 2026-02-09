import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios";

const shortlistingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
  const { applicants } = useSelector((store) => store.application);

  const statusHandler = async (status, id) => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        { status },
      );
      if (res.data.success) toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const applications = applicants?.applications || [];

  return (
    <div className="w-full">
      <div className="hidden sm:block">
        <Table>
          <TableCaption>A list of your recent applied users</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Full Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Resume</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item?.applicant?.fullname}</TableCell>
                <TableCell>{item?.applicant?.email}</TableCell>
                <TableCell>{item?.applicant?.phoneNumber}</TableCell>
                <TableCell>
                  {item?.applicant?.profile?.resume ? (
                    <a
                      className="text-blue-600 cursor-pointer"
                      href={item?.applicant?.profile?.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item?.applicant?.profile?.resumeOriginalName}
                    </a>
                  ) : (
                    <span>NA</span>
                  )}
                </TableCell>
                <TableCell>
                  {item?.applicant?.createdAt.split("T")[0]}
                </TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal className="cursor-pointer" />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      {shortlistingStatus.map((status, index) => (
                        <div
                          onClick={() => statusHandler(status, item?._id)}
                          key={index}
                          className="flex w-fit items-center my-2 cursor-pointer"
                        >
                          <span>{status}</span>
                        </div>
                      ))}
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Vertical Cards */}
      <div className="sm:hidden flex flex-col gap-4">
        {applications.map((item) => (
          <div
            key={item._id}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
          >
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-600">Full Name:</span>
              <span className="text-gray-800">{item?.applicant?.fullname}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-600">Email:</span>
              <span className="text-gray-800 truncate max-w-[60%]">
                {item?.applicant?.email}
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-600">Contact:</span>
              <span className="text-gray-800">
                {item?.applicant?.phoneNumber}
              </span>
            </div>
            <div className="flex justify-between mb-2 items-center">
              <span className="font-semibold text-gray-600">Resume:</span>
              {item?.applicant?.profile?.resume ? (
                <a
                  className="text-blue-600 cursor-pointer truncate max-w-[60%]"
                  href={item?.applicant?.profile?.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item?.applicant?.profile?.resumeOriginalName}
                >
                  {item?.applicant?.profile?.resumeOriginalName}
                </a>
              ) : (
                <span className="text-gray-800">NA</span>
              )}
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-600">Date:</span>
              <span className="text-gray-800">
                {item?.applicant?.createdAt.split("T")[0]}
              </span>
            </div>
            <div className="flex justify-end mt-2 gap-2 flex-wrap">
              {shortlistingStatus.map((status, index) => (
                <button
                  key={index}
                  onClick={() => statusHandler(status, item?._id)}
                  className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm whitespace-nowrap"
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicantsTable;
