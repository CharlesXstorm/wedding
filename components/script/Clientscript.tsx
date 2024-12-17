"use client";

import { formatparagraph } from "@/script";
import React, { useEffect } from "react";

const Clientscript = () => {
  useEffect(() => {
    formatparagraph();
  }, []);
  return null
};

export default Clientscript;
