import React from "react";
import { useLocation } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

const Download = () => {
  const location = useLocation();
  const data = location.state;

  const componentRef = useRef();
  const handleDownload = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "personal-resume",
    onAfterPrint: () => alert("Print Success"),
  });

  return (
    <div className="grid place-items-center bg-blue-100 h-full px-8 font-sans ">
      {/* Navbar */}
      <div className=" fixed top-0 left-0 text-center w-full header bg-violet-600 py-4 text-white font-bold text-lg shadow-lg mb-16">
        Download Your Resume From Here
      </div>

      {/* Contaienr */}

      <div
        ref={componentRef}
        className="container mt-16 w-full max-w-5xl shadow-lg rounded-lg px-14 py-6 bg-white"
      >
        <div className="header flex items-center justify-between mb-14">
          <div className="w-8/12">
            <h1 className="text-6xl font-semibold">
              {data.name ? data.name : "Your Name"}
            </h1>
            <h2 className="my-6 text-2xl font-semibold">
              {data.bio ? data.bio : "Who You are?"}
            </h2>
          </div>
          <div className="w-4/12 flex flex-col text-start items-start gap-2">
            <div className="flex items-center justify-center">
              <i className="fa-solid fa-mobile-screen-button text-2xl mr-3"></i>
              <span className="font-bold text-base">
                {data.number ? data.number : "Contact Number Missing"}
              </span>
            </div>
            <div className="flex items-center justify-center">
              <i className="fa-solid fa-envelope text-2xl mr-3"></i>
              <span className="font-bold text-base">
                {data.email ? data.email : "Email Missing"}
              </span>
            </div>
            <div className="flex items-center justify-center">
              <i className="fa-brands fa-github text-2xl mr-3"></i>
              <span className="font-bold text-base">
                <a href="*">
                  {data.github ? data.github : "No Github Link added"}
                </a>
              </span>
            </div>
            <div className="flex items-center justify-center">
              <i className="fa-brands fa-linkedin  text-2xl mr-3"></i>
              <span className="font-bold text-base">
                <a href="*">
                  {data.linkedin ? data.linkedin : "Linkedin Not Added"}
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="about flex items-center justify-between mb-14">
          <div className="w-full">
            <h1 className="text-4xl font-semibold">About Me</h1>
            <div className="bg-black h-0.5 w-60 my-3"></div>
            <div className="desc-box pr-16">
              <p className="font-semibold">
                {data.about ? data.about : "No About has Been Added"}
              </p>
            </div>
          </div>
          <div className="w-full" style={{ borderLeft: "4px solid #000" }}>
            <div className="education-content pl-36 flex flex-col gap-3">
              <h1 className="text-4xl font-semibold">Education</h1>
              <div className="bg-black h-0.5 w-60 my-3 font-bold"></div>
              <div className="university">
                <span className="font-bold">
                  {data.universityYear ? data.universityYear : "Year Missing"}
                </span>{" "}
                ·{" "}
                <span>
                  {data.universityName
                    ? data.universityName
                    : "University Name Missing"}
                </span>
                <p>
                  <strong>
                    CGPA :{" "}
                    {data.universityCGPA ? data.universityCGPA : "Not Added"}
                  </strong>
                </p>
              </div>
              <div className="college">
                <span className="font-bold">
                  {data.collegeYear ? data.collegeYear : "Year Missing"}
                </span>{" "}
                ·{" "}
                <span>
                  {data.collegeName
                    ? data.collegeName
                    : "College Name Not Added"}
                </span>
                <p>
                  <strong>
                    GPA : {data.collegeGPA ? data.collegeGPA : "Not Added"}
                  </strong>
                </p>
              </div>
              <div className="university">
                <span className="font-bold">
                  {data.schoolDate ? data.schoolDate : "Date Not Added"}
                </span>{" "}
                ·{" "}
                <span>
                  {data.schoolName ? data.schoolName : "School Name Not Added"}
                </span>
                <p>
                  <strong>
                    GPA : {data.schoolGPA ? data.schoolGPA : "Not Added"}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experiance Sections */}

        <div className="skills w-full mb-14">
          <h1 className="text-4xl font-semibold">Experiance</h1>
          <div className="bg-black h-0.5 w-60 my-3"></div>
          <div className="type">
            <h3 className="text-2xl font-semibold">
              {data.experianceType ? data.experianceType : "Type Not Added"}
            </h3>
          </div>
          <div className="organization">
            <p>
              {" "}
              <strong>Organization : </strong>{" "}
              {data.organization
                ? data.organization
                : "Organization Name Not Added"}
            </p>
          </div>
          <div className="exYear mt-1">
            <p className="font-bold">
              <strong> Joining Date : </strong>{" "}
              {data.experianceYear ? data.experianceYear : "Year Not Added"}
            </p>
          </div>
        </div>

        {/* Core Skills Sections */}

        <div className="coreSkills w-full mb-14">
          <h1 className="text-4xl font-semibold">Core Skills</h1>
          <div className="bg-black h-0.5 w-60 my-3"></div>
          <div className="core-skill">
            <p className="font-medium">
              <strong>
                {data.coreSkills ? data.coreSkills : "No Skill Added"}
              </strong>
            </p>
          </div>
        </div>

        {/* Familiar Skills Sections */}

        <div className="familiarSkills w-full mb-14">
          <h1 className="text-4xl font-semibold">Familiar With</h1>
          <div className="bg-black h-1 w-64 my-3"></div>
          <div className="core-skill">
            <p className="font-medium">
              <strong>
                {data.familiarSkills
                  ? data.familiarSkills
                  : "No Familiar Skills added"}
              </strong>
            </p>
          </div>
        </div>

        {/* Project Sections */}

        <div className="familiarSkills w-full mb-14">
          <h1 className="text-4xl font-semibold tracking-widest">Projects</h1>
          <div className="bg-black h-1 w-60 my-3"></div>
          <div className="flex items-center justify-between">
            <div className="project-1 pr-10 w-6/12">
              <div className="title">
                <h4 className="text-2xl font-semibold mb-2">
                  {data.projectOne.name
                    ? data.projectOne.name
                    : "Project Name Not Added"}
                </h4>
                <span>Technologies : </span>
                <p className="font-bold mb-2">
                  {data.projectOne.technology
                    ? data.projectOne.technology
                    : "Project Technologies Not Added"}
                </p>
                <span>
                  {" "}
                  <strong>Overview: </strong>
                  {data.projectOne.desc
                    ? data.projectOne.desc
                    : "Project Description Not Added"}
                </span>
              </div>
            </div>
            <div className="project-2 w-6/12">
              <div className="title">
                <h4 className="text-2xl font-semibold mb-2">
                  {data.projectTwo.name
                    ? data.projectTwo.name
                    : "Project Name Not Added"}
                </h4>
                <span>Technologies : </span>
                <p className="font-bold mb-2">
                  {" "}
                  {data.projectTwo.technology
                    ? data.projectTwo.technology
                    : "Project Technologies Not Added"}
                </p>
                <span>
                  {" "}
                  <strong>Overview: </strong>
                  {data.projectTwo.desc
                    ? data.projectTwo.desc
                    : "Project Description Not Added"}
                </span>
              </div>
            </div>
          </div>

          {/* Second Row */}

          <div className="flex items-center justify-between mt-16">
            <div className="project-3 pr-10 w-6/12">
              <div className="title">
                <h4 className="text-2xl font-semibold mb-2">
                  {" "}
                  {data.projectThree.name
                    ? data.projectThree.name
                    : "Project Name Not Added"}
                </h4>
                <span>Technologies : </span>
                <p className="font-bold mb-2">
                  {data.projectThree.technology
                    ? data.projectThree.technology
                    : "Project Technologies Not Added"}
                </p>
                <span>
                  {" "}
                  <strong>Overview: </strong>
                  {data.projectThree.desc
                    ? data.projectThree.desc
                    : "Project Description Not Added"}
                </span>
              </div>
            </div>
            <div className="project-4 w-6/12">
              <div className="title">
                <h4 className="text-2xl font-semibold mb-2">
                  {data.projectFour.name
                    ? data.projectFour.name
                    : "Project Name Not Added"}
                </h4>
                <span>Technologies : </span>
                <p className="font-bold mb-2">
                  {data.projectFour.technology
                    ? data.projectFour.technology
                    : "Project Technologies Not Added"}
                </p>
                <span>
                  {" "}
                  <strong>Overview: </strong>
                  {data.projectFour.desc
                    ? data.projectFour.desc
                    : "Project description Not Added"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={handleDownload}
        className="bg-violet-600 py-2 px-6 text-white font-semibold mt-10 mb-16 border border-transparent hover:bg-transparent hover:text-black hover:border hover:border-black ease-linear duration-300 shadow-lg hover:border-dotted"
      >
        Save as PDF
      </button>
    </div>
  );
};

export default Download;
