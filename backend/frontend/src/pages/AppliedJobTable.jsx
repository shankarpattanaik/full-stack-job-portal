import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Badge } from "../components/ui/badge";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);
  return (
    <div className="overflow-x-auto w-full">
      <Table className="min-w-full border border-gray-200 dark:border-gray-700">
        <TableHeader className="bg-gray-100 dark:bg-gray-800">
          <TableRow>
            <TableHead className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
              Date
            </TableHead>
            <TableHead className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
              Job Role
            </TableHead>
            <TableHead className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
              Company
            </TableHead>
            <TableHead className="px-4 py-2 text-right text-gray-700 dark:text-gray-300">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.length <= 0 ? (
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-center py-4 text-gray-500 dark:text-gray-400"
              >
                You haven't applied any job yet.
              </TableCell>
            </TableRow>
          ) : (
            allAppliedJobs.map((appliedJob) => (
              <TableRow
                key={appliedJob._id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <TableCell className="px-4 py-2">
                  {appliedJob?.createdAt?.split("T")[0]}
                </TableCell>
                <TableCell className="px-4 py-2">
                  {appliedJob.job?.title}
                </TableCell>
                <TableCell className="px-4 py-2">
                  {appliedJob.job?.company?.name}
                </TableCell>
                <TableCell className="px-4 py-2 text-right">
                  <Badge
                    className={`px-3 py-2 rounded-full text-white pointer-events-none ${
                      appliedJob?.status === "rejected"
                        ? "bg-red-600"
                        : appliedJob.status === "pending"
                          ? "bg-gray-600"
                          : "bg-green-600"
                    }`}
                  >
                    {appliedJob.status.toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
