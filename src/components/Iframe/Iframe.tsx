import React, { ReactEventHandler, useEffect, useRef, useState } from "react";
const Iframe = ({ src, className }: { src: string; className: string }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const onLoadIframe: ReactEventHandler<HTMLIFrameElement> = (event) => {
    console.log(event);
    const iframeElement = event.currentTarget;
    if (iframeElement.contentWindow) {
      console.log(iframeElement.contentWindow.document.body.scrollHeight);
      iframeElement.height =
        iframeElement.contentWindow.document.body.scrollHeight + "px";
      iframeElement.style.display = "block";
      // 원래 iframe 내부의 content height 을 불러온다.
    }
    if (loadingRef.current) {
      loadingRef.current.style.display = "none";
    }
  };

  const onResizeIframe = (event: Event) => {
    const iframeElement = iframeRef.current;
    if (iframeElement?.contentWindow) {
      iframeElement.height =
        iframeElement.contentWindow.document.body.scrollHeight + "px";
      // 원래 iframe 내부의 content height 을 불러온다.
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResizeIframe);

    return () => {
      window.removeEventListener("resize", onResizeIframe);
    };
  }, []);
  return (
    <>
      <div ref={loadingRef} className="w-full flex justify-center items-center">
        <div className={"lds-dual-ring"}></div>
      </div>
      <iframe
        hidden
        loading="lazy"
        ref={iframeRef}
        className={className}
        src={src}
        frameBorder="0"
        scrolling="no"
        onLoad={onLoadIframe}
      ></iframe>
    </>
  );
};

export default Iframe;
