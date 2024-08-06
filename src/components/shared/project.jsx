function Project() {
  return (
    <div className="py-5">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <p className="mt-4 text-lg">
        Here are some of the projects I’ve worked on:
      </p>
      <div className="mt-4 space-y-6">
        <div className="border border-gray-300 p-4 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold text-underlay-2">HirelyAI</h2>
          <h3 className="text-sm font-extralight">Industry Level Project</h3>
          <p className="mt-2">
            HirelyAI is an innovative application designed to streamline the
            hiring process using advanced AI technologies. This project
            showcases my skills in TypeScript, Tailwind, React, Node.js,
            Express, MongoDB, and OpenAI. It includes features such as
            intelligent candidate matching, automated resume screening, and
            real-time notifications.
          </p>
          <a
            href="https://aidf-front-end-dulran.netlify.app/"
            className="text-blue-500 mt-2 inline-block"
          >
            View Project
          </a>
        </div>

        <div className="border border-gray-300 p-4 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold">AuraFashion</h2>
          <h3 className="text-sm font-extralight">University Level Project</h3>
          <p className="mt-2">
            AuraFashion is a modern e-commerce platform designed to provide a
            seamless shopping experience. This project showcases my skills in
            HTML, CSS, PHP and MySQL. It
            includes features such as a personalized shopping experience,
            advanced product filtering, and secure payment processing.
          </p>
          <a
            href="https://aurafashion.rf.gd/"
            className="text-blue-500 mt-2 inline-block"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
