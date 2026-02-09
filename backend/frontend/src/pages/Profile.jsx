import React, { useState } from "react";
import Navbar from "../components/shared/Navbar";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Label } from "../components/ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

const isResume = true;

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Profile Info */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl my-5 p-6 sm:p-8 shadow-md px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={
                  user?.profile?.profilePhoto ||
                  "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                }
                alt={user?.fullname || "profile"}
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl text-gray-900 dark:text-gray-100">
                {user?.fullname}
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                {user?.profile?.bio || "No bio provided"}
              </p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            variant="outline"
            className="self-start sm:self-center"
          >
            <Pen />
          </Button>
        </div>

        {/* Contact Info */}
        <div className="my-5 space-y-2">
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <Mail />
            <span>{user?.email || "NA"}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <Contact />
            <span>{user?.phoneNumber || "NA"}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="my-5">
          <h1 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Skills
          </h1>
          <div className="flex flex-wrap gap-2">
            {user?.profile?.skills && user?.profile?.skills.length > 0 ? (
              user.profile.skills.map((skill, index) => (
                <Badge
                  key={index}
                  className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200"
                >
                  {skill}
                </Badge>
              ))
            ) : (
              <span className="text-gray-500 dark:text-gray-400">NA</span>
            )}
          </div>
        </div>

        {/* Resume */}
        <div className="grid w-full max-w-sm items-start gap-1.5">
          <Label className="text-md font-bold text-gray-800 dark:text-gray-100">
            Resume
          </Label>
          {isResume && user?.profile?.resume ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={user.profile.resume}
              className="text-blue-500 dark:text-blue-400 w-full hover:underline cursor-pointer break-all"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span className="text-gray-500 dark:text-gray-400">NA</span>
          )}
        </div>
      </div>

      {/* Applied Jobs */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-md mt-6 px-4 sm:px-6 lg:px-8">
        <h1 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-4">
          Applied Jobs
        </h1>
        <AppliedJobTable />
      </div>

      {/* Update Profile Dialog */}
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
