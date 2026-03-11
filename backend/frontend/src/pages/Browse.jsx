import React, { useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        <h1 className="font-bold text-2xl sm:text-3xl mb-8 text-gray-800 dark:text-gray-100">
          Search Results ({allJobs.length})
        </h1>
        {allJobs.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No jobs found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allJobs.map((job) => (
              <div
                key={job._id}
                className="transform transition-transform duration-300 hover:scale-[1.01]"
              >
                <Job className="w-full h-full min-h-[200px]" job={job} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
