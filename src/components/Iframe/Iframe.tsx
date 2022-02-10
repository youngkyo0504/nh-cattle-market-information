import React, { ReactEventHandler, useEffect, useRef, useState } from "react";

const Iframe = ({ src, className }: { src: string; className: string }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const resizeIframe: ReactEventHandler<HTMLIFrameElement> = (event) => {
    const iframeElement = event.currentTarget;
    if (iframeElement.contentWindow) {
      iframeElement.height =
        iframeElement.contentWindow.document.body.scrollHeight + "px";
      // 원래 iframe 내부의 content height 을 불러온다.
    }
  };
  return (
    <>
      <iframe
        ref={iframeRef}
        className={className}
        src={src}
        frameBorder="0"
        scrolling="no"
        onLoad={resizeIframe}
      ></iframe>
    </>
  );
};

export default Iframe;
