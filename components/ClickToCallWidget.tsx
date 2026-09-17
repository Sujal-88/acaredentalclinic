"use client";

import React from "react";
import Script from "next/script";

export default function ClickToCallWidget() {
  return (
    <>
      {/* The Elfsight Widget Container */}
      {/* data-elfsight-app-lazy is set to "true" to satisfy strict React/JSX rules */}
      <div 
        className="elfsight-app-344fa100-9ac7-44bb-820d-ea0d48b64723" 
        data-elfsight-app-lazy="true"
      ></div>

      {/* Next.js Optimized Script Loader */}
      <Script 
        src="https://elfsightcdn.com/platform.js" 
        strategy="lazyOnload" 
      />
    </>
  );
}