import { useState } from "react";
import { Icons } from "../icons";

function DashboardTable() {
  const datas = [
    {
      avatar: Icons.avatar,
      name: "Sisyphus",
      email: "sisyphus.com",
      date: "22 Jan 2022",
      status: "Active",
      type: "Customer data",
      role: "Admin",
    },
    {
      avatar: Icons.avatar,
      name: "Sisyphus",
      email: "sisyphus.com",
      date: "24 Jan 2022",
      status: "Active",
      type: "Customer data",
      role: "Admin",
    },
    {
      avatar: Icons.avatar,
      name: "Sisyphus",
      email: "sisyphus.com",
      date: "26 Jan 2022",
      status: "Active",
      type: "Customer data",
      role: "Admin",
    },
    {
      avatar: Icons.avatar,
      name: "Sisyphus",
      email: "sisyphus.com",
      date: "28 Jan 2022",
      status: "Active",
      type: "Customer data",
      role: "Admin",
    },
    {
      avatar: Icons.avatar,
      name: "Sisyphus",
      email: "sisyphus.com",
      date: "28 Jan 2022",
      status: "Active",
      type: "Customer data",
      role: "Admin",
    },
    {
      avatar: Icons.avatar,
      name: "Sisyphus",
      email: "sisyphus.com",
      date: "16 Jan 2022",
      status: "Active",
      type: "Customer data",
      role: "Admin",
    },
    {
      avatar: Icons.avatar,
      name: "Sisyphus",
      email: "sisyphus.com",
      date: "16 Jan 2022",
      status: "Active",
      type: "Customer data",
      role: "Admin",
    },
    {
      avatar: Icons.avatar,
      name: "Sisyphus",
      email: "sisyphus.com",
      date: "16 Jan 2022",
      status: "Active",
      type: "Customer data",
      role: "Admin",
    },
    {
      avatar: Icons.avatar,
      name: "Sisyphus",
      email: "sisyphus.com",
      date: "16 Jan 2022",
      status: "Active",
      type: "Customer data",
      role: "Admin",
    },
  ];

  return (
      <div className="bg-black rounded-2xl mr-2 pb-4 mb-2">
        <table className="min-w-full bg-slate-950 text-white rounded-2xl">
          <thead>
            <tr>
              <th className="text-[#B6F09C] text-[14px] pl-3 text-left"><input type="checkbox" className="text-[#B6F09C]" /></th>
              <th className="text-[#6F767E] text-[14px] p-3 text-left">Project</th>
              <th className="text-[#6F767E] text-[14px] p-3 text-left">Last assessed</th>
              <th className="text-[#6F767E] text-[14px] p-3 text-left">License use</th>
              <th className="text-[#6F767E] text-[14px] p-3 text-left"></th>
              <th className="text-[#6F767E] text-[14px] p-3 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="pl-3">
                  <input type="checkbox" className="text-[#B6F09C]" />
                </td>
                <td className="flex items-center p-3">
                  <img src={data.avatar} alt="Sisyphus" className="mr-3 rounded-full" />
                  <div className="">
                    <h1 className="text-white-default text-[14px]">
                      {data.name}
                    </h1>
                    <h1 className="text-[14px] text-[#6F767E]">
                      {data.email}
                    </h1>
                  </div>
                </td>
                <td className="text-[#6F767E] p-3">{data.date}</td>
                <td className="flex gap-x-2 p-3">
                  <span className="flex flex-row gap-1 rounded-2xl bg-[#0E5A3A] px-4 py-1 text-[#46E8A5]">
                    <img src={Icons.dot} alt="dot" className="rounded-full text-[#46E8A5]" />{data.status}
                  </span>{" "}
                  <span className="rounded-2xl bg-[#423419] px-4 py-1 text-[#FFD666]">
                    {data.type}
                  </span>{" "}
                  <span className="rounded-2xl bg-[#422721] px-4 py-1 text-[#FFAC82]">
                    {data.role}
                  </span>{" "}
                </td>
                <td><img src={Icons.deleteIcon} alt="deleteIcon" /></td>
                <td><img src={Icons.edit} alt="edit" /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
        <button
          className={`mx-2 px-3 py-1 bg-gray-700 border-gray-500 text-white border border-1 rounded-lg`}
        >
          Previous
        </button>
        <p className="text-[#6F767E]">Page 1 of 10</p>
        <button
          className={`mx-2 px-3 py-1 bg-gray-700 border-gray-500 text-white border border-1 rounded-lg`}
        >
          Next
        </button>
      </div>
      </div>
  );
}
export default DashboardTable;
