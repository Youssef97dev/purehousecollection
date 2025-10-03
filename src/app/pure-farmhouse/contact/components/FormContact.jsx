import React from "react";

const FormContact = () => {
  return (
    <section className="w-full bg-farmhouse_background">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* Left side - Title */}
        <div className="flex items-start justify-start px-8 md:px-16 py-12">
          <h2 className="text-6xl md:text-[90px] pt-0 lg:pt-12 leading-tight font-vanitas text-riad_primary">
            GET IN <br /> TOUCH!
          </h2>
        </div>

        {/* Right side - Form */}
        <div className="flex items-center px-8 md:px-16 py-12">
          <form className="w-full max-w-lg space-y-6 ">
            <h3 className="text-xl lg:text-2xl text-riad_primary  mb-4">
              How can we help you?
            </h3>

            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b border-black bg-transparent focus:outline-none py-2 font-light"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-black bg-transparent focus:outline-none py-2 font-light"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border-b border-black bg-transparent focus:outline-none py-2 font-light"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                placeholder="Message"
                className="w-full border-b border-black bg-transparent focus:outline-none py-2 font-light"
                rows={3}
              ></textarea>
            </div>

            {/* Privacy Policy 
            <div className="flex items-center gap-2">
              <input type="checkbox" className="border border-black" />
              <label className="text-sm">
                I have read and accept the{" "}
                <span className="font-semibold">privacy policy*</span>
              </label>
            </div>*/}

            {/* Submit button */}
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 uppercase font-vanitas tracking-widest hover:bg-gray-900 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormContact;
