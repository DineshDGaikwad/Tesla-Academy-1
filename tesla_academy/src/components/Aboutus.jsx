import React from "react";

const Aboutus = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */} 
      <section className="bg-indigo-400 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Tesla Academy</h1>
          <p className="text-lg">
            Leading the future of education in technology and innovation.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            About Tesla Academy
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-8">
            Tesla Academy is dedicated to providing top-tier education and
            training in cutting-edge technologies. Our mission is to empower
            individuals and organizations by providing the knowledge and skills
            needed to succeed in today’s fast-paced world of innovation.
          </p>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg">
              At Tesla Academy, we envision a future where technological
              expertise is accessible to everyone. We strive to bridge the gap
              between academic knowledge and real-world application through
              industry-relevant courses and expert mentorship.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://images.ctfassets.net/9sy2a0egs6zh/5w0q0fWbGtmiSts6oIDJ5x/6746f0e6d562c0e8315d841eb4c85f87/Explore-illo.svg"
              alt="Vision"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">Why Choose Tesla Academy?</h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="w-full md:w-1/3">
              <h4 className="text-xl font-semibold mb-2">Industry Leaders</h4>
              <p>
                Our courses are designed and taught by experts from leading
                industries, ensuring you learn the most up-to-date skills.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-xl font-semibold mb-2">Hands-on Training</h4>
              <p>
                We believe in practical learning. Our training sessions are
                designed to provide real-world experience and skills.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-xl font-semibold mb-2">Flexible Learning</h4>
              <p>
                We offer flexible learning options, including self-paced and
                instructor-led courses, to fit your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Shubham"
              title="Backend Devloper"
              image="https://images.pexels.com/photos/4603239/pexels-photo-4603239.jpeg?cs=srgb&dl=pexels-anthony-raphael-4603239.jpg&fm=jpg"
            />
            <TeamMember
              name="Dinesh"
              title="Frontend Devloper"
              image="https://images.pexels.com/photos/4603239/pexels-photo-4603239.jpeg?cs=srgb&dl=pexels-anthony-raphael-4603239.jpg&fm=jpg"
            />
            <TeamMember
              name="Niraj"
              title="Frontend Devloper"
              image="https://images.pexels.com/photos/4603239/pexels-photo-4603239.jpeg?cs=srgb&dl=pexels-anthony-raphael-4603239.jpg&fm=jpg"
            />
            <TeamMember
              name="Kedar"
              title="Website Analysist "
              image="https://images.pexels.com/photos/4603239/pexels-photo-4603239.jpeg?cs=srgb&dl=pexels-anthony-raphael-4603239.jpg&fm=jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const TeamMember = ({ name, title, image }) => (
  <div className="text-center">
    <img
      className="w-32 h-32 rounded-full mx-auto mb-4"
      src={image}
      alt={name}
    />
    <h4 className="text-lg font-bold">{name}</h4>
    <p>{title}</p>
  </div>
);

export default Aboutus;
