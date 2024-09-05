const About = () => {
  return (
    <div className="align-element">
      {/* RIGHT */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          Welcome to
        </h1>
        <div className="shadow stats bg-secondary">
          <div className="stat">
            <div className="text-4xl font-bold tracking-widest text-secondary-content stat-title">
              comfy
            </div>
          </div>
        </div>
      </div>

      {/* LEFT */}
      <p className="max-w-2xl mx-auto mt-6 text-lg leading-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
        quae mollitia quia veniam sint deleniti, error impedit a repudiandae
        optio in est soluta odit animi omnis dolore ullam vel inventore at ipsum
        non ipsa numquam. Expedita eius quisquam rem maxime.
      </p>
    </div>
  );
};

export default About;
