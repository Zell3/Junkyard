'use client'

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Todo {
  id: string;
  label: string;
  description: string;
  status: "Doing" | "Pending" | "Done";
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const response = await axios.get<Todo[]>("https://66e3d100d2405277ed11ef3e.mockapi.io/api/todo");
    setTodos(response.data);
  };

  const deleteTodo = async (id: string) => {
    axios.delete(`https://66e3d100d2405277ed11ef3e.mockapi.io/api/todo/${id}`);
    alert(`Todo with id ${id} deleted successfully.`);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-4">
        <Link href="/create">
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
          Create
        </button>
        </Link>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-2 px-4 border-r">Id</th>
            <th className="py-2 px-4 border-r">Label</th>
            <th className="py-2 px-4 border-r">Description</th>
            <th className="py-2 px-4 border-r">Status</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4 border-r">{todo.id}</td>
              <td className="py-2 px-4 border-r">{todo.label}</td>
              <td className="py-2 px-4 border-r">{todo.description}</td>
              <td className="py-2 px-4 border-r">{todo.status}</td>
              <td className="py-2 px-4 flex space-x-2">
                <Link href={`/edit/${todo.id}`}>
                <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700">Edit</button>
                </Link>
                <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700" onClick={() => deleteTodo(todo.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
