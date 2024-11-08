'use client'

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function CreateTodo() {
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"Doing" | "Pending" | "Done">("Pending");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("https://66e3d100d2405277ed11ef3e.mockapi.io/api/todo", {
        label,
        description,
        status,
      });
      alert("Todo created successfully.");
      router.push("/"); // Redirect to the main page
    } catch (error) {
      console.error("Failed to create todo", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-4">
        <Link href="/">
          <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700">
            Back
          </button>
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Create Todo</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Label</label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
            style={{ resize: "none" }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as "Doing" | "Pending" | "Done")}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          >
            <option value="Pending">Pending</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
          Create
        </button>
      </form>
    </div>
  );
}