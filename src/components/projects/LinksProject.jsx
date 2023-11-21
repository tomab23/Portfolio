import React, { Suspense } from "react";

const LinksProject = ({ github, site, siteUrl }) => {
  const handleGithub = () => {
    window.open(github);
  };

  const handleSite = () => {
    window.open(siteUrl);
  };

  return (
    <div className="flex gap-1 mt-5">
      <div
        className="w-24 h-10 rounded-full bg-[#171515] flex justify-center items-center cursor-pointer hover:scale-110"
        onClick={handleGithub}
      >
        <p className="text-white">Github</p>
      </div>
      {site && (
        <div
          className="w-24 h-10 rounded-full bg-gray-500  flex justify-center items-center cursor-pointer hover:scale-110"
          onClick={handleSite}
        >
          <p className="text-white">Site</p>
        </div>
      )}
    </div>
  );
};

export default LinksProject;
