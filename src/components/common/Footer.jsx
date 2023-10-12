import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="p-2">
      <div className="pt-5 dark:text-[#e9e9e9] flex justify-between text-[.6rem] md:text-[1rem] inter">
        <p className="">
          Designed and built by{" "}
          <span className="font-semibold text-[1.2em]">Oracle</span>
        </p>
        <p>© {year} Oracle. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
