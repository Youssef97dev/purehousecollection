"use client";
import React, { useState } from "react";

const SendMessage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    // You can integrate with Mailchimp, SendGrid, etc.
  };

  return (
    <section className="w-full flex justify-center px-5 md:px-20 lg:px-28 py-12">
      <div className="w-full bg-[#DED9D3] p-8">
        <h2 className="uppercase text-center text-[28px] leading-[30.8px] font-thin tracking-widest text-white mb-8">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="font-lora">
            <label className="block text-[13.8px] leading-[17.94px] text-white mb-2">
              Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-white px-3 py-2 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="font-lora">
            <label className="block text-[13.8px] leading-[17.94px] text-white mb-2">
              Email *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white px-3 py-2 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div className="font-lora">
            <label className="block text-[13.8px] leading-[17.94px] text-white mb-2">
              Message *
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full bg-white px-3 py-2 focus:outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-32 bg-[#a89986] text-white uppercase tracking-widest py-2 px-4 hover:bg-[#8c7c68] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default SendMessage;
