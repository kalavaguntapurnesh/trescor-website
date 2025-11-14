import React, { useEffect, useState } from "react";
// import { TailSpin } from "react-loader-spinner";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const CalendarBooking = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [availableSlots, setAvailableSlots] = useState({});
  const [loading, setLoading] = useState(false);
  const [slotTime, setSlotTime] = useState("");
  const [activeTab, setActiveTab] = useState("calendar");

  const generateMockSlots = () => {
    setLoading(true);
    const tempSlots = {};
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    setTimeout(() => {
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentYear, currentMonth, day);
        if (date < today) continue;

        const key = date.toDateString();
        const slots = [];

        for (let h = 10; h <= 20; h += 1) {
          slots.push(`${h}:00`);
          slots.push(`${h}:30`);
        }

        tempSlots[key] = slots;
      }
      setAvailableSlots(tempSlots);
      setLoading(false);
    }, 500); // mock async delay
  };

  const handleMonthChange = (offset) => {
    const newDate = new Date(currentYear, currentMonth + offset);
    setCurrentMonth(newDate.getMonth());
    setCurrentYear(newDate.getFullYear());
    setSelectedDate(null);
    setSlotTime("");
  };

  useEffect(() => {
    generateMockSlots();
  }, [currentMonth, currentYear]);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  return (
    <div className="p-4 w-[100%] bg-[#ffffff] ">
      <div className="flex flex-row shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] py-2.5 justify-between rounded-full items-center my-4 px-2">
        <button
          onClick={() => setActiveTab("calendar")}
          className={`group bg-gradient-to-r px-[28px] from-[#0A3161] to-[#00A3EE] hover:from-[#00A3EE] hover:to-[#7EB900] py-3 rounded-full text-white items-center gap-3 transition-all duration-500 w-fit flex shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
            activeTab === "calendar" ? "" : "opacity-75"
          }`}
        >
          Book a Call
        </button>

        <button
          onClick={() => setActiveTab("form")}
          className={`group bg-gradient-to-r from-[#00A3EE] to-[#7EB900] hover:from-[#0A3161] hover:to-[#00A3EE] px-[28px] py-3 rounded-full text-white items-center gap-3 transition-all duration-500 w-fit flex shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
            activeTab === "form" ? "" : "opacity-75"
          }`}
        >
          Fill a Form
        </button>
      </div>

      {activeTab === "calendar" ? (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">
              {new Date(currentYear, currentMonth).toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </h2>
            <div className="space-x-3">
              <button
                onClick={() => handleMonthChange(-1)}
                className=" cursor-pointer text-gray-800 bg-white p-3 rounded-full shadow"
              >
                <FaAngleLeft />
              </button>

              <button
                onClick={() => handleMonthChange(1)}
                className=" cursor-pointer text-gray-800 bg-white p-3 rounded-full shadow"
              >
                <FaAngleRight />
              </button>
            </div>
          </div>

          <div className="border-b border-gray-100 mb-4"></div>

          {loading ? (
            <div className="flex justify-center items-center h-32">
              {/* <TailSpin height="40" width="40" color="#5f6FFF" /> */}
              <h1>Loading...</h1>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-7 gap-2 text-center font-semibold">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                  <div key={d} className="text-gray-800 ">
                    {d}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2 mt-2">
                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={"empty" + i}></div>
                ))}

                {Array.from({ length: daysInMonth }).map((_, index) => {
                  const day = index + 1;
                  const date = new Date(currentYear, currentMonth, day);
                  const dateKey = date.toDateString();
                  const isPast = date < today;
                  const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                  const isAvailable = availableSlots[dateKey];

                  return (
                    <div className="flex justify-center items-center">
                      <button
                        key={index}
                        disabled={!isAvailable || isPast}
                        className={`rounded-full p-4 text-center ${
                          !isAvailable || isPast
                            ? " text-gray-400 cursor-not-allowed"
                            : selectedDate === dateKey
                            ? "bg-[#0A3161] cursor-pointer text-white"
                            : isWeekend
                            ? " text-gray-800 cursor-pointer"
                            : "hover:bg-blue-50 text-gray-700"
                        }`}
                        onClick={() => {
                          setSelectedDate(dateKey);
                          setSlotTime("");
                        }}
                      >
                        {day}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Slots */}
              {selectedDate && availableSlots[selectedDate] && (
                <div className="mt-6 flex flex-col justify-center items-center">
                  <h4 className="mb-4 font-bold">
                    Available Slots for {selectedDate}
                  </h4>
                  <div className="grid lg:grid-cols-6 grid-cols-4  gap-2 mt-2">
                    {availableSlots[selectedDate].map((slot, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSlotTime(slot)}
                        className={`px-8 py-2.5 cursor-pointer text-sm rounded font-medium  ${
                          slotTime === slot
                            ? "bg-[#0A3161] text-white"
                            : "text-black bg-[#f2f2f3]"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      ) : (
        <div>
          <div className="mx-2">
            <form
              // onSubmit={handleSubmit}
              className="mt-8 lg:p-6 lg:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded"
            >
              <div className="w-full grid grid-cols-1 md:gap-4">
                <div className="mb-3 w-full">
                  <label
                    htmlFor="companyName"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    // onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your Company Name"
                    className="w-full rounded bg-[#f0f0f0] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                  />
                </div>
              </div>

              <div className="mb-5 w-full">
                <label
                  htmlFor="businessEmail"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Business Email
                </label>
                <input
                  type="email"
                  name="businessEmail"
                  id="businessEmail"
                  // onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Business Email"
                  className="w-full rounded bg-[#f0f0f0] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                />
              </div>

              <div className="mb-5 w-full">
                <label
                  htmlFor="phoneNumber"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  // onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Your Phone Number"
                  className="w-full rounded bg-[#f0f0f0] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                />
              </div>

              <div className="mb-3 w-full">
                <label
                  htmlFor="message"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  // onChange={(e) => setMessage(e.target.value)}
                  placeholder="Let us know if you’d like to schedule a meeting, discuss opportunities, or have any questions. We're here to help!"
                  className="w-full resize-none rounded bg-[#f0f0f0] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group bg-gradient-to-r from-[#0A3161] to-[#00A3EE] hover:from-[#00A3EE] hover:to-[#7EB900] px-6 py-3 rounded-full text-white items-center gap-3 transition-all duration-500 w-full flex justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="relative z-10">Submit</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarBooking;
