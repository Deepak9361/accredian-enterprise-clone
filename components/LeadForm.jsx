"use client";
import { useState } from "react";

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Lead submitted!");
  };

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Book a Demo</h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          placeholder="Name"
          className="w-full border p-3"
          onChange={(e)=>setForm({...form,name:e.target.value})}
        />
        <input
          placeholder="Email"
          className="w-full border p-3"
          onChange={(e)=>setForm({...form,email:e.target.value})}
        />
        <input
          placeholder="Company"
          className="w-full border p-3"
          onChange={(e)=>setForm({...form,company:e.target.value})}
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded w-full">
          Submit
        </button>
      </form>
    </section>
  );
}