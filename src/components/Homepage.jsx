import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [data, setData] = useState({
    name: "",
    bio: "",
    about: "",
    schoolName: "",
    schoolDate: "",
    schoolGPA: "",
    collegeName: "",
    collegeYear: "",
    collegeGPA: "",
    universityName: "",
    universityYear: "",
    universityCGPA: "",
    experianceType: "",
    organization: "",
    experianceYear: "",
    coreSkills: "",
    familiarSkills: "",
    projectOne: {
      name: "",
      technology: "",
      desc: "",
    },
    projectTwo: {
      name: "",
      technology: "",
      desc: "",
    },
    projectThree: {
      name: "",
      technology: "",
      desc: "",
    },
    projectFour: {
      name: "",
      technology: "",
      desc: "",
    },
    number: "",
    email: "",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  });

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/download", { state: data });
  };

  return (
    <>
      <div className="grid place-items-center bg-blue-100 h-full px-8 font-sans">
        {/* Navbar */}
        <div className=" fixed top-0 left-0 text-center w-full header bg-violet-600 py-4 text-white font-bold text-lg shadow-lg">
          Personal Resume Maker Online!
        </div>

        {/* Container */}

        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 mt-12 bg-white">
          <h1 className="text-2xl font-bold text-slate-900 text-center mb-3">
            Fill Out The Requierments
          </h1>
          <form className="flex gap-5 flex-col items-center bg-gray-100 px-4 py-4 rounded-md">
            <input
              className="w-full text-lg px-2 py-3  border-none outline-none  text-gray-500"
              placeholder="Enter Your Name"
              value={data.name}
              onChange={(e) =>
                setData({
                  ...data,
                  name: e.target.value,
                })
              }
            />
            <input
              className="w-full text-lg px-2 py-3  border-none outline-none  text-gray-500"
              placeholder="Your Title ( Who are you )"
              value={data.bio}
              onChange={(e) =>
                setData({
                  ...data,
                  bio: e.target.value,
                })
              }
            />
            <input
              className="w-full text-lg px-2 py-3  border-none outline-none  text-gray-500"
              placeholder="Write about yourself"
              value={data.about}
              onChange={(e) =>
                setData({
                  ...data,
                  about: e.target.value,
                })
              }
            />
          </form>
          {/* Education */}
          <form className="flex gap-5 flex-col items-center bg-gray-100 px-4 py-4 rounded-md">
            <h1 className="text-2xl font-bold text-slate-900 text-center mb-2">
              About Your Education
            </h1>
            <div className="w-full flex gap-2 items-center justify-between">
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2 "
                placeholder="School Name"
                value={data.school}
                onChange={(e) =>
                  setData({
                    ...data,
                    schoolName: e.target.value,
                  })
                }
              />
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2 "
                placeholder="Passed Year"
                type="text"
                value={data.schoolDate}
                onChange={(e) =>
                  setData({
                    ...data,
                    schoolDate: e.target.value,
                  })
                }
              />
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2 "
                placeholder="GPA"
                type="number"
                value={data.schoolGPA}
                onChange={(e) =>
                  setData({
                    ...data,
                    schoolGPA: e.target.value,
                  })
                }
              />
            </div>

            {/* College Section */}

            <div className="w-full flex gap-2 items-center justify-between my-2">
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2 "
                placeholder="College Name"
                value={data.collegeName}
                onChange={(e) =>
                  setData({
                    ...data,
                    collegeName: e.target.value,
                  })
                }
              />
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2 "
                placeholder="Passed Year"
                type="text"
                value={data.collegeYear}
                onChange={(e) =>
                  setData({
                    ...data,
                    collegeYear: e.target.value,
                  })
                }
              />
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2 "
                placeholder="GPA"
                type="number"
                value={data.collegeGPA}
                onChange={(e) =>
                  setData({
                    ...data,
                    collegeGPA: e.target.value,
                  })
                }
              />
            </div>

            {/* University Section */}
            <div className="w-full flex gap-2 items-center justify-between">
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2 "
                placeholder="University Name"
                value={data.universityName}
                onChange={(e) =>
                  setData({
                    ...data,
                    universityName: e.target.value,
                  })
                }
              />
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2 "
                placeholder="Passed Year Only"
                type="text"
                value={data.universityYear}
                onChange={(e) =>
                  setData({
                    ...data,
                    universityYear: e.target.value,
                  })
                }
              />
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2 "
                placeholder="CGPA"
                type="number"
                value={data.universityCGPA}
                onChange={(e) =>
                  setData({
                    ...data,
                    universityCGPA: e.target.value,
                  })
                }
              />
            </div>
          </form>

          {/* Experiance Section */}

          <form className="flex gap-5 flex-col items-center bg-gray-100 px-4 py-4 rounded-md">
            <h1 className="text-2xl font-bold text-slate-900 text-center mb-2">
              Experiances
            </h1>
            <div className="w-full flex gap-2 items-center justify-between">
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2 "
                placeholder="Experiance Type"
                value={data.experianceType}
                onChange={(e) =>
                  setData({
                    ...data,
                    experianceType: e.target.value,
                  })
                }
              />
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2 "
                placeholder="Organization"
                value={data.organization}
                onChange={(e) =>
                  setData({
                    ...data,
                    organization: e.target.value,
                  })
                }
              />
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2"
                placeholder="Year"
                value={data.experianceYear}
                onChange={(e) =>
                  setData({
                    ...data,
                    experianceYear: e.target.value,
                  })
                }
              />
            </div>
          </form>

          {/* Skills Section */}

          <form className="flex gap-5 flex-col items-center bg-gray-100 px-4 py-4 rounded-md">
            <h1 className="text-2xl font-bold text-slate-900 text-center">
              Your Core Skills?
            </h1>
            <div className="w-full flex flex-col gap-3">
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Technology.... [NB: Seperate each technology with comma]"
                value={data.coreSkills}
                onChange={(e) =>
                  setData({
                    ...data,
                    coreSkills: e.target.value,
                  })
                }
              />
            </div>
          </form>

          {/* Familiar Skills Section */}

          <form className="flex gap-5 flex-col items-center bg-gray-100 px-4 py-4 rounded-md">
            <h1 className="text-2xl font-bold text-slate-900 text-center">
              Familiar Skills?
            </h1>
            <div className="w-full flex flex-col gap-3">
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Technology.... [NB: Seperate each technology with comma]"
                value={data.familiarSkills}
                onChange={(e) =>
                  setData({
                    ...data,
                    familiarSkills: e.target.value,
                  })
                }
              />
            </div>
          </form>

          {/* Project Section */}

          <form className="flex gap-5 flex-col items-center bg-gray-100 px-4 py-4 rounded-md">
            <h1 className="text-2xl font-bold text-slate-900 text-center">
              About Your Project (Top 4 Projects Only)
            </h1>

            {/* Project 1 Box */}
            <span className="text-xl font-semibold underline">Project 1</span>
            <div className="w-full flex gap-3">
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Project Name or Title"
                value={data.projectOne.name}
                onChange={(e) =>
                  setData({
                    ...data,
                    projectOne: {
                      ...data.projectOne,
                      name: e.target.value,
                    },
                  })
                }
              />
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Build by (Seperate Technology by comma)"
                value={data.projectOne.technology}
                onChange={(e) =>
                  setData({
                    ...data,
                    projectOne: {
                      ...data.projectOne,
                      technology: e.target.value,
                    },
                  })
                }
              />
            </div>
            <input
              className="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
              placeholder="Write Short Description About Your Project"
              value={data.projectOne.desc}
              onChange={(e) =>
                setData({
                  ...data,
                  projectOne: {
                    ...data.projectOne,
                    desc: e.target.value,
                  },
                })
              }
            />

            {/* Project 2 Box */}
            <span className="text-xl font-semibold underline">Project 2</span>
            <div className="w-full flex gap-3">
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Project Name or Title"
                value={data.projectTwo.name}
                onChange={(e) =>
                  setData({
                    ...data,
                    projectTwo: {
                      ...data.projectTwo,
                      name: e.target.value,
                    },
                  })
                }
              />
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Build by (Seperate Technology by comma)"
                value={data.projectTwo.technology}
                onChange={(e) =>
                  setData({
                    ...data,
                    projectTwo: {
                      ...data.projectTwo,
                      technology: e.target.value,
                    },
                  })
                }
              />
            </div>
            <input
              className="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
              placeholder="Write Short Description About Your Project"
              value={data.projectTwo.desc}
              onChange={(e) =>
                setData({
                  ...data,
                  projectTwo: {
                    ...data.projectTwo,
                    desc: e.target.value,
                  },
                })
              }
            />

            {/* Project 3 Box */}
            <span className="text-xl font-semibold underline">Project 3</span>
            <div className="w-full flex gap-3">
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Project Name or Title"
                value={data.projectThree.name}
                onChange={(e) =>
                  setData({
                    ...data,
                    projectThree: {
                      ...data.projectThree,
                      name: e.target.value,
                    },
                  })
                }
              />
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Build by (Seperate Technology by comma)"
                value={data.projectThree.technology}
                onChange={(e) =>
                  setData({
                    ...data,
                    projectThree: {
                      ...data.projectThree,
                      technology: e.target.value,
                    },
                  })
                }
              />
            </div>
            <input
              className="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
              placeholder="Write Short Description About Your Project"
              value={data.projectThree.desc}
              onChange={(e) =>
                setData({
                  ...data,
                  projectThree: {
                    ...data.projectThree,
                    desc: e.target.value,
                  },
                })
              }
            />

            {/* Project 4 Box */}
            <span className="text-xl font-semibold underline">Project 4</span>
            <div className="w-full flex gap-3">
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Project Name or Title"
                value={data.projectFour.name}
                onChange={(e) =>
                  setData({
                    ...data,
                    projectFour: {
                      ...data.projectFour,
                      name: e.target.value,
                    },
                  })
                }
              />
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Build by (Seperate Technology by comma)"
                value={data.projectFour.technology}
                onChange={(e) =>
                  setData({
                    ...data,
                    projectFour: {
                      ...data.projectFour,
                      technology: e.target.value,
                    },
                  })
                }
              />
            </div>
            <input
              className="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
              placeholder="Write Short Description About Your Project"
              value={data.projectFour.desc}
              onChange={(e) =>
                setData({
                  ...data,
                  projectFour: {
                    ...data.projectFour,
                    desc: e.target.value,
                  },
                })
              }
            />
          </form>

          {/* Additional Info Section */}
          <form className="flex gap-5 flex-col items-center bg-gray-100 px-4 py-4 rounded-md">
            <h1 className="text-2xl font-bold text-slate-900 text-center">
              Additional Info's?
            </h1>
            <div className="w-full flex flex-col gap-3">
              <div className="w-full flex gap-2 items-center justify-between">
                <input
                  className="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                  placeholder="Contact Number"
                  type="text"
                  value={data.number}
                  onChange={(e) =>
                    setData({
                      ...data,
                      number: e.target.value,
                    })
                  }
                />
                <input
                  className="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                  placeholder="Enter Main Email"
                  type="email"
                  value={data.email}
                  onChange={(e) =>
                    setData({
                      ...data,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Github Profile Link"
                type="text"
                value={data.github}
                onChange={(e) =>
                  setData({
                    ...data,
                    github: e.target.value,
                  })
                }
              />
              <input
                className="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Linekdin Profile Link"
                type="text"
                value={data.linkedin}
                onChange={(e) =>
                  setData({
                    ...data,
                    linkedin: e.target.value,
                  })
                }
              />
            </div>
          </form>
          <div className="mt-6 text-center">
            <button
              onClick={handleSubmit}
              className="bg-violet-600 text-white font-bold p-3  border-transparent hover:bg-transparent hover:text-black hover:border border-dotted hover:border-black duration-500"
            >
              Preview Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
