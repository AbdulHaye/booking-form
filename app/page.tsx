"use client";

import { useState } from "react";

type TripType = "one-way" | "hourly";
type LocationType = "location" | "airport";

export default function Home() {
  const [tripType, setTripType] = useState<TripType>("one-way");
  const [pickupType, setPickupType] = useState<LocationType>("location");
  const [dropoffType, setDropoffType] = useState<LocationType>("location");

  const [date, setDate] = useState("05/13/2023");
  const [time, setTime] = useState("3:00 PM");
  const [pickupLocation, setPickupLocation] = useState(
    "Clintons Bar & Grille, High Street, Clinton, MA, USA"
  );
  const [dropoffLocation, setDropoffLocation] = useState(
    "Logan Airport Terminal B, Boston, MA, USA"
  );
  const [phone, setPhone] = useState("+1 774 415 3244");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passengers, setPassengers] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="min-h-screen bg-white py-6 px-4">
      <div className="max-w-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <LogoIcon />
          <span className="text-2xl font-bold text-[#5a3fa0] tracking-tight">
            ExampleIQ
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-medium text-[#2a1f5c] mb-5">
            Let&apos;s get you on your way!
          </h1>

          {/* Trip type toggle: 2 joined pills, full width */}
          <div className="grid grid-cols-2 mb-6">
            <button
              type="button"
              onClick={() => setTripType("one-way")}
              className={`flex items-center justify-center gap-2 py-2.5 text-sm font-medium border ${
                tripType === "one-way"
                  ? "bg-[#fdf6e3] text-[#c9a227] border-[#d4af37] rounded-md z-10"
                  : "bg-white text-gray-600 border-gray-300 rounded-l-md border-r-0"
              }`}
            >
              <ArrowCircleIcon
                className={tripType === "one-way" ? "text-[#c9a227]" : "text-gray-500"}
              />
              One-way
            </button>
            <button
              type="button"
              onClick={() => setTripType("hourly")}
              className={`flex items-center justify-center gap-2 py-2.5 text-sm font-medium border ${
                tripType === "hourly"
                  ? "bg-[#fdf6e3] text-[#c9a227] border-[#d4af37] rounded-md z-10 -ml-px"
                  : "bg-white text-gray-600 border-gray-300 rounded-r-md border-l-0"
              }`}
            >
              <HourglassIcon
                className={tripType === "hourly" ? "text-[#c9a227]" : "text-gray-600"}
              />
              Hourly
            </button>
          </div>

          {/* Pickup */}
          <h2 className="text-base font-bold text-[#1a1a1a] mb-3">Pickup</h2>

          {/* Date and Time row */}
          <div className="flex gap-3 mb-4">
            {/* Date wrapper (outer card containing icon and inner bordered input) */}
            <div className="flex-1 flex items-center border border-gray-300 rounded-md px-3 py-2.5">
              <CalendarIcon className="text-[#c9a227] mr-3 shrink-0" />
              <div className="flex-1 border border-gray-300 rounded px-3 py-1.5">
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full outline-none text-[#5a3fa0] text-sm bg-transparent"
                />
              </div>
            </div>
            {/* Time */}
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2.5 w-36">
              <ClockIcon className="text-[#c9a227] mr-2 shrink-0" />
              <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full outline-none text-[#5a3fa0] text-sm bg-transparent"
              />
            </div>
          </div>

          {/* Location/Airport toggle */}
          <div className="pill-group mb-3">
            <button
              type="button"
              onClick={() => setPickupType("location")}
              className={pickupType === "location" ? "active" : ""}
            >
              Location
            </button>
            <button
              type="button"
              onClick={() => setPickupType("airport")}
              className={pickupType === "airport" ? "active" : ""}
            >
              Airport
            </button>
          </div>

          {/* Location dropdown */}
          <div className="mfield mb-3">
            <span className="floating-label">Location</span>
            <div className="control">
              <MapPinIcon className="leading-icon" />
              <select
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="appearance-none cursor-pointer pr-6"
              >
                <option>{pickupLocation}</option>
                <option>Boston Common, Boston, MA, USA</option>
                <option>Harvard Square, Cambridge, MA, USA</option>
              </select>
              <ChevronDownIcon className="trailing-icon" />
            </div>
          </div>

          {/* Add a stop */}
          <button
            type="button"
            className="text-[#c9a227] text-sm font-medium mb-6 hover:underline"
          >
            + Add a stop
          </button>

          {/* Drop off */}
          <h2 className="text-base font-bold text-[#1a1a1a] mb-3 mt-2">
            Drop off
          </h2>

          <div className="pill-group mb-3">
            <button
              type="button"
              onClick={() => setDropoffType("location")}
              className={dropoffType === "location" ? "active" : ""}
            >
              Location
            </button>
            <button
              type="button"
              onClick={() => setDropoffType("airport")}
              className={dropoffType === "airport" ? "active" : ""}
            >
              Airport
            </button>
          </div>

          <div className="mfield mb-8">
            <span className="floating-label">Location</span>
            <div className="control">
              <MapPinIcon className="leading-icon" />
              <select
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                className="appearance-none cursor-pointer pr-6"
              >
                <option>{dropoffLocation}</option>
                <option>Boston Logan International Airport, Boston, MA, USA</option>
                <option>JFK International Airport, NY, USA</option>
              </select>
              <ChevronDownIcon className="trailing-icon" />
            </div>
          </div>

          {/* Contact Information */}
          <h2 className="text-base font-bold text-[#1a1a1a] mb-3">
            Contact Information
          </h2>

          <div className="flex items-center border border-gray-300 rounded-md px-3 py-3 mb-2">
            <USFlagIcon className="mr-3 shrink-0" />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 outline-none text-[#5a3fa0] text-sm bg-transparent"
            />
          </div>

          <p className="text-xs text-[#5a3fa0] mb-4">
            We don&apos;t have that phone number on file. Please provide additional
            contact information.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="mfield">
              <span className="floating-label">First name</span>
              <div className="control">
                <UserIcon className="leading-icon text-gray-500" />
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                />
              </div>
            </div>
            <div className="mfield">
              <span className="floating-label">Last name</span>
              <div className="control">
                <UserIcon className="leading-icon text-gray-500" />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                />
              </div>
            </div>
          </div>

          <div className="mfield mb-5">
            <span className="floating-label">Email</span>
            <div className="control">
              <AtIcon className="leading-icon text-gray-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
              />
            </div>
          </div>

          <p className="text-sm text-[#5a3fa0] mb-3">
            How many passengers are expected for the trip?
          </p>

          <div className="mfield mb-8 w-40">
            <span className="floating-label"># Passengers</span>
            <div className="control">
              <HashIcon className="leading-icon text-gray-500" />
              <input
                type="number"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#c9a227] hover:bg-[#b8941f] text-white font-medium py-3 rounded-md transition-colors"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

/* === Icons === */

function LogoIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5a3fa0"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 14a9 9 0 0 1 18 0" />
      <path d="M12 14l5-4" />
      <circle cx="12" cy="14" r="1" fill="#5a3fa0" />
    </svg>
  );
}

function ArrowCircleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <circle cx="12" cy="12" r="10" />
      <path
        d="M10 8l4 4-4 4"
        stroke="#fff"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HourglassIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2h12" />
      <path d="M6 22h12" />
      <path d="M6 2v4a6 6 0 0 0 12 0V2" />
      <path d="M6 22v-4a6 6 0 0 1 12 0v4" />
    </svg>
  );
}

function CalendarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function ChevronDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function UserIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}

function AtIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
    </svg>
  );
}

function USFlagIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="26"
      height="18"
      viewBox="0 0 60 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="US flag"
      role="img"
    >
      <rect width="60" height="40" fill="#fff" />
      {/* 13 stripes */}
      {Array.from({ length: 13 }).map((_, i) => (
        <rect
          key={i}
          x="0"
          y={i * (40 / 13)}
          width="60"
          height={40 / 13}
          fill={i % 2 === 0 ? "#b22234" : "#fff"}
        />
      ))}
      {/* Canton */}
      <rect width="24" height={(40 / 13) * 7} fill="#3c3b6e" />
      {/* Stars (simplified 5x4 grid) */}
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 6 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={2 + col * 3.6}
            cy={2 + row * 4}
            r="0.7"
            fill="#fff"
          />
        ))
      )}
    </svg>
  );
}

function HashIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="9" x2="20" y2="9" />
      <line x1="4" y1="15" x2="20" y2="15" />
      <line x1="10" y1="3" x2="8" y2="21" />
      <line x1="16" y1="3" x2="14" y2="21" />
    </svg>
  );
}
