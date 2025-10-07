const Location = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center  pb-10 pt-28 tracking-widest px-8 lg:px-[300px] lg:text-[16px] text-[16px] text-center gap-8">
      <h1 className="text-lake_text font-light text-[22px] leading-[33px]">
        {"LOCATION"}
      </h1>
      <p className="font-lora text-[13px] leading-[21.45px] sm:text-[14px] sm:leading-[23.1px] ">
        {
          "A 45-minute drive from Marrakech, Pure House On The Lake is located near Lalla Takerkoust, offering scenic lake views and situated close to both the Agafay Desert and the spectacular Atlas Mountains."
        }
      </p>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425.9065606990741!2d-8.13111125952502!3d31.352011133871756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef4fcbd919cb%3A0x89922e232011bf59!2sCasa%20Lalla%20Takerkoust%20Vibe%20Agafay%20Desert!5e0!3m2!1sfr!2sma!4v1753181122522!5m2!1sfr!2sma"
          height="500"
          style={{ border: 0, width: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
