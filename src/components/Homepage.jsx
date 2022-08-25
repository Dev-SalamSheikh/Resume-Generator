import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="grid place-items-center bg-blue-100 h-full px-8 font-sans">
        {/* Navbar */}
        <div class=" fixed top-0 left-0 text-center w-full header bg-violet-600 py-4 text-white font-bold text-lg shadow-lg">
          Personal Resume Maker Online!
        </div>

        {/* Container */}

        <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 mt-12 bg-white">
          <h1 className="text-2xl font-bold text-slate-900 text-center mb-3">
            Fill Out The Requierments
          </h1>
          <form class="flex gap-5 flex-col items-center bg-gray-100 px-4 py-4 rounded-md">
            <input
              class="w-full text-lg px-2 py-3  border-none outline-none  text-gray-500"
              placeholder="Enter Your Name"
            />
            <input
              class="w-full text-lg px-2 py-3  border-none outline-none  text-gray-500"
              placeholder="Enter Your Bio"
            />
            <input
              class="w-full text-lg px-2 py-3  border-none outline-none  text-gray-500"
              placeholder="Write about yourself"
            />
          </form>
          {/* Education */}
          <form className="flex gap-5 flex-col items-center bg-gray-100 px-4 py-4 rounded-md">
            <h1 className="text-2xl font-bold text-slate-900 text-center mb-2">
              About Your Education
            </h1>
            <div className="w-full flex gap-2 items-center justify-between">
              <input
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2 "
                placeholder="School Name"
              />
              <input
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2 "
                placeholder="Passing Year"
                type="date"
              />
              <input
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2 "
                placeholder="GPA"
                type="number"
              />
            </div>

            <div className="w-full flex gap-2 items-center justify-between my-2">
              <input
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2 "
                placeholder="College Name"
              />
              <input
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2 "
                placeholder="Passing Year"
                type="date"
              />
              <input
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2 "
                placeholder="GPA"
                type="number"
              />
            </div>

            <div className="w-full flex gap-2 items-center justify-between">
              <input
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2 "
                placeholder="University Name"
              />
              <input
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2 "
                placeholder="Passing Year"
                type="date"
              />
              <input
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2 "
                placeholder="CGPA"
                type="number"
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
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2 "
                placeholder="Experiance Type"
              />
              <input
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2 "
                placeholder="Organization"
              />
              <input
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 border-solid border-2"
                placeholder="Year"
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
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Technology.... [NB: Seperate each technology with comma]"
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
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Technology.... [NB: Seperate each technology with comma]"
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
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Project Name or Title"
              />
              <input
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Build by (Seperate Technology by comma)"
              />
            </div>
            <input
              class="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
              placeholder="Write Short Description About Your Project"
            />

            {/* Project 2 Box */}
            <span className="text-xl font-semibold underline">Project 2</span>
            <div className="w-full flex gap-3">
              <input
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Project Name or Title"
              />
              <input
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Build by (Seperate Technology by comma)"
              />
            </div>
            <input
              class="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
              placeholder="Write Short Description About Your Project"
            />

            {/* Project 3 Box */}
            <span className="text-xl font-semibold underline">Project 3</span>
            <div className="w-full flex gap-3">
              <input
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Project Name or Title"
              />
              <input
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Build by (Seperate Technology by comma)"
              />
            </div>
            <input
              class="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
              placeholder="Write Short Description About Your Project"
            />

            {/* Project 4 Box */}
            <span className="text-xl font-semibold underline">Project 4</span>
            <div className="w-full flex gap-3">
              <input
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Project Name or Title"
              />
              <input
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Build by (Seperate Technology by comma)"
              />
            </div>
            <input
              class="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
              placeholder="Write Short Description About Your Project"
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
                  class="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                  placeholder="Contact Number"
                  type="text"
                />
                <input
                  class="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                  placeholder="Enter Main Email"
                  type="email"
                />
              </div>
              <input
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Github Profile Link"
                type="text"
              />
              <input
                class="w-full text-lg px-2 py-3  outline-none  text-gray-500 "
                placeholder="Linekdin Profile Link"
                type="text"
              />
            </div>
          </form>
          <div className="mt-6 text-center">
            <button className="bg-violet-600 text-white font-bold p-3 hover:bg-transparent hover:text-black hover:border border-dotted border-black">
              Preview Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
