"use client";

import { Crisp } from "crisp-sdk-web";
import React, { useEffect } from "react";

export default function CrispChat() {
  useEffect(() => {
    Crisp.configure("0543939e-ee7b-4c41-81fe-f7b949508237");
  }, []);

  return null;
}
