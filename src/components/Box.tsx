"use client";

import { useCallback, useEffect, useState } from "react";

interface BoxProps {
  children: React.ReactNode;
  title: string;
  color: string;
  subtitle: string;
  openLink: string;
  demoLink?: string;
  analyticsLinkRef?: string;
}

export function Box(props: BoxProps) {
  const [open, setOpen] = useState(true);

  const detailsState = useCallback(() => {
    if (window.innerWidth <= 1024) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", detailsState);
    return () => window.removeEventListener("resize", detailsState);
  }, [detailsState]);

  const textColor = props.color ? `text-${props.color}` : "text-neutral-800";
  return (
    <details
      open={open}
      className="m-2 mb-6 rounded-md border bg-white p-2 drop-shadow-sm hover:border-gray-300 hover:drop-shadow-md lg:m-4 lg:p-4"
    >
      <summary className="lg:list-none">
        <h1 className={`inline text-lg font-medium ${textColor} lg:text-2xl`}>
          {props.title}
        </h1>
        <h2 className="text-sm text-neutral-600 lg:text-xl">{props.subtitle}</h2>
        <a
          href={props.openLink}
          target="_blank"
          rel="noreferrer"
          className={`text-sm font-bold uppercase underline hover:decoration-4 text-${props.color}`}
          data-analytics={`OpenRegister${props.analyticsLinkRef}`}
        >
          Open register
        </a>
        {props.demoLink && (
          <>
            &#8212;
            <a
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              className={`text-xs font-bold uppercase underline hover:decoration-4 text-${props.color}`}
              data-analytics={`OpenDemo${props.analyticsLinkRef}`}
            >
              Demo version
            </a>
          </>
        )}
      </summary>
      <div className="my-2 text-xs text-neutral-800 md:text-sm md:leading-6">
        {props.children}
      </div>
    </details>
  );
}
