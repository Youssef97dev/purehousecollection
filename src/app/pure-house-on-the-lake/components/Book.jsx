import React from "react";
import Link from "next/link";

const Book = () => {
  return (
    <>
      <section
        className="relative h-[70vh] hidden bg-fixed bg-center bg-cover lg:flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dz7wroord/image/upload/v1760018828/PureHouseOnTheLake/IMG_9241_gdoxhl.jpg')",
        }}
      >
        {/* Overlay 
      <div className="absolute inset-0 h-full bg-black/20" />*/}

        {/* Content 
      <div className="relative text-center text-white  font-thin space-y-12">
        <div className="text-[20px] leading-[27.5px] sm:text-[30px] sm:leading-[33px] md:text-[35px] md:leading-[38px] mb-6 uppercase">
          Step inside, feel at home
        </div>
        <div>
          
        </div>
      </div>*/}
      </section>
      <section
        className="relative lg:hidden h-[70vh] bg-bottom bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dz7wroord/image/upload/v1760018829/PureHouseOnTheLake/IMG_9358_sgssol.jpg')",
        }}
      >
        {/* Overlay 
      <div className="absolute inset-0 h-full bg-black/20" />*/}

        {/* Content 
      <div className="relative text-center text-white  font-thin space-y-12">
        <div className="text-[20px] leading-[27.5px] sm:text-[30px] sm:leading-[33px] md:text-[35px] md:leading-[38px] mb-6 uppercase">
          Step inside, feel at home
        </div>
        <div>
          
        </div>
      </div>*/}
      </section>
    </>
  );
};

export default Book;
