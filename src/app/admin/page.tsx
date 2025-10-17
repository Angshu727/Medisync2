"use client";
import React from "react";
import Navbar from "../Components/Navbar";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen" style={{backgroundImage:"url('/assets/Background.jpg')"}}>
        {/* Sidebar */}
        <aside
          className="w-20 flex flex-col items-center py-6 space-y-6 bg-cover bg-center bg-no-repeat"
          // style={{ backgroundImage: "url('/assets/Background.jpg')" }}
        >
          <div className="text-white text-2xl font-bold mt-48">🏠</div>
          <div>📅</div>
          <div>💬</div>
          <div>⚙️</div>
          <div>📄</div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 mt-24 bg-cover bg-center bg-[#CAF0F8]" >
          {/* Header */}
          <div className="flex justify-between items-center px-6">
            <h2 className="text-4xl font-bold tracking-wide">
              Good Morning <span className="text-[#0076B6] text-5xl font-extrabold">Dr. Kim!</span>
            </h2>
            {/* <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 px-6 py-3 rounded-full w-[400px] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#007C82]"
            /> */}
          </div>


          {/* Dashboard Top Section */}
          <div className="mt-6 flex gap-6">
            {/* Visits Card */}
            <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm overflow-hidden hover:border-[#0076B6] hover:border-2 transition-all">
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Visits for Today
              </h3>
              <h1 className="text-4xl font-bold">104</h1>
              <div className="flex gap-4 mt-4">
                <div className="bg-[#E6F7F5] rounded-xl px-4 py-3 flex-1 transition-transform transform hover:-translate-y-1 hover:scale-105 hover:shadow-md">
                  <h4 className="font-semibold">New Patients</h4>
                  <p className="text-2xl font-bold">40</p>
                  <p className="text-green-500 text-sm">↑ 51%</p>
                </div>
                <div className="bg-[#FDECEC] rounded-xl px-4 py-3 flex-1 transition-transform transform hover:-translate-y-1 hover:scale-105 hover:shadow-md">
                  <h4 className="font-semibold">Old Patients</h4>
                  <p className="text-2xl font-bold">64</p>
                  <p className="text-red-500 text-sm">↓ 20%</p>
                </div>
              </div>
            </div>

            {/* Doctor Image */}
            <div className="w-[300px] h-[200px] rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src="/assets/doctor2.jpg"
                alt="Dr. Kim"
                width={300}
                height={200}
                className="object-cover"
              />
            </div>
          </div>

          {/* Patient List + Consultation Section */}
          <div className="mt-8 flex gap-6 ">
            {/* Patient List */}
            <div className="w-1/2 bg-white p-6 rounded-2xl shadow-sm hover:border-[#0076B6] hover:border-2 transition-all">
              <h3 className="font-semibold text-lg mb-4">Patient List</h3>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span className="text-gray-400">Stacy Mitchell</span>
                  <span className="text-pink-500">9:15 AM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Amy Dunham</span>
                  <span className="text-blue-500">9:30 AM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Demi Joan</span>
                  <span className="text-green-500">9:50 AM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Susan Myers</span>
                  <span className="text-pink-500">10:15 AM</span>
                </li>
              </ul>
            </div>

            {/* Consultation */}
            <div className="w-1/2 bg-white p-6 rounded-2xl shadow-sm hover:border-[#0076B6] hover:border-2 transition-all">
              <h3 className="font-semibold text-lg mb-4">Consultation</h3>
              <div className="border rounded-xl p-4">
                <h4 className="font-semibold text-gray-700">Denzel White</h4>
                <p className="text-sm text-gray-500">Male - 28 Years 3 Months</p>
                <div className="flex gap-3 mt-3 text-purple-700">
                  <span>🌡️ Fever</span>
                  <span>🤧 Cough</span>
                  <span>❤️ Heart Burn</span>
                </div>
                <div className="mt-3 text-sm text-gray-600">
                  <p>
                    <b>Observation:</b> High fever and cough at normal hemoglobin
                    levels.
                  </p>
                  <p>
                    <b>Prescription:</b> Paracetamol - 2 times a day. Dizopam -
                    Day & Night before meal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
