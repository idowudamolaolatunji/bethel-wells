"use client";
import Script from 'next/script'
import React from 'react'

function WhatsappWidget() {
  return (
    <>
        <Script src="https://static.elfsight.com/platform/platform.js" async></Script>
        <div className="elfsight-app-c5a8a8b3-2131-42c1-9616-c8fc32e55664" data-elfsight-app-lazy></div>
    </>
  )
}

export default WhatsappWidget