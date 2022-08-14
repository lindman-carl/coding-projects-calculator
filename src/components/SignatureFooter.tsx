import React from "react";

// icons
import { MdOpenInNew } from "react-icons/md";

const SignatureFooter = () => {
  return (
    <div className="font-normal inline-flex gap-4">
      @lindman
      <a
        href="https://github.com/yoga-python/coding-projects-calculator"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 underline decoration-sky-800 dark:decoration-purple-100"
      >
        GitHub
        <MdOpenInNew />
      </a>
    </div>
  );
};

export default SignatureFooter;
