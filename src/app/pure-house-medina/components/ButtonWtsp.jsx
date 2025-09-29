import React from "react";
import { TbBrandWhatsappFilled } from "react-icons/tb";

import Link from "next/link";

const ButtonWtsp = () => {
  return (
    <Link href="https://wa.me/212682225235">
      <TbBrandWhatsappFilled size={50} />
    </Link>
  );
};

export default ButtonWtsp;
