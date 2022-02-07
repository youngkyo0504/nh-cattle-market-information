import React, { ReactEventHandler, useEffect } from "react";
// import styled from "styled-components/macro";
// import { flex, FlexboxProps } from "styled-system";
// import { ContainerProps } from "react-select";

// const StyledIframe = styled.iframe<FlexboxProps>`
//   ${flex};
//   overflow-x: auto;
// `;

const Iframe = ({ src, className }: { src: string; className: string }) => {
  const resizeIframe: ReactEventHandler<HTMLIFrameElement> = (event) => {
    const iframeElement = event.currentTarget;
    if (iframeElement.contentWindow) {
      iframeElement.height =
        iframeElement.contentWindow.document.body.scrollHeight + "px";
    }
  };

  return (
    <>
      <iframe
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
