import React from "react";

const Contact = () => {
  return (
    <section className="w-full bg-farmhouse_background">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* Left side - Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:py-12 py-5 font-montserrat">
          <h2 className="text-5xl md:text-[90px] mb-8 leading-tight font-vanitas text-riad_primary">
            HOW TO <br /> GET HERE?
          </h2>

          <div className="space-y-4 text-[13px] lg:text-[14px] leading-[23px] text-farmhouse_text ">
            <p>
              📍 Lalla Takerkoust, Marrakech <br />
              40000 Morocco
            </p>
            <p>📞 +212 641-173841</p>
            <p>✉️ info@purehousecollection.com</p>
          </div>
        </div>

        {/* Right side - Map */}
        <div className="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3406.7349159984155!2d-8.1320902!3d31.3662935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafefa08c33c3d7%3A0x523807815af902ec!2sPure%20Farm%20House!5e0!3m2!1sfr!2sma!4v1759484699481!5m2!1sfr!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
