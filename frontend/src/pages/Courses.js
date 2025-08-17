import React, { useState } from 'react';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
import './Courses.css';
import { Helmet } from 'react-helmet';


// Sample data for courses
const coursesData = [
  {
    category: "POPULAR COURSES",
    courses: [
      { id: 1, img: "/images/webdev.jpg", title: "Web Development", duration: "08 Weeks", price: "₹899" },
      { id: 2, img: "/images/revit.jpg", title: "Revit", duration: "08 Weeks", price: "₹899" },
      { id: 3, img: "/images/scada.jpg", title: "SCADA", duration: "08 Weeks", price: "₹899" },
      { id: 4, img: "/images/ansys.jpg", title: "ANSYS", duration: "08 Weeks", price: "₹899" },
      { id: 5, img: "/images/chat.jpg", title: "Chatbot", duration: "06 Weeks", price: "₹899" },
      { id: 6, img: "/images/data.WebP", title: "Data Science", duration: "08 Weeks", price: "₹899" },
      { id: 7, img: "/images/ai.jpg", title: "Artificial Intelligence", duration: "08 Weeks", price: "₹899" },
      { id: 8, img: "/images/cyber.jpg", title: "Cybersecurity", duration: "08 Weeks", price: "₹899" },
      { id: 9, img: "/images/base.jpg", title: "Database Management", duration: "08 Weeks", price: "₹899" },
      { id: 10, img: "/images/python.jpg", title: "Python", duration: "08 Weeks", price: "₹899" },
      { id: 11, img: "/images/java.jpg", title: "Java", duration: "08 Weeks", price: "₹899" },
      { id: 12, img: "/images/cp.jpg", title: "C++", duration: "08 Weeks", price: "₹899" },
      { id: 13, img: "/images/c.jpg", title: "C Programming", duration: "08 Weeks", price: "₹899" },
      { id: 14, img: "/images/script.jpg", title: "JavaScript", duration: "08 Weeks", price: "₹899" },
      { id: 15, img: "/images/staad.jpg", title: "STAAD PRO", duration: "08 Weeks", price: "₹899" },
      { id: 16, img: "/images/etabs.jpg", title: "ETABS", duration: "08 Weeks", price: "₹899" },
      { id: 17, img: "/images/bim.jpg", title: "BIM", duration: "08 Weeks", price: "₹899" },
      { id: 18, img: "/images/autocad-2016-1.jpg", title: "AutoCAD", duration: "08 Weeks", price: "₹899" },
      { id: 19, img: "/images/mat.jpg", title: "MATLAB", duration: "08 Weeks", price: "₹899" },
      { id: 20, img: "/images/iot.jpg", title: "IOT", duration: "08 Weeks", price: "₹899" },
      { id: 21, img: "/images/ansys.jpg", title: "ANSYS", duration: "08 Weeks", price: "₹899" },
      { id: 22, img: "/images/hvac.jpg", title: "HVAC", duration: "08 Weeks", price: "₹899" },
      { id: 23, img: "/images/catia.jpg", title: "CATIA", duration: "08 Weeks", price: "₹899" },
      { id: 24, img: "/images/solid.jpg", title: "SOLIDWORKS", duration: "08 Weeks", price: "₹899" }
    ]
  },
  {
    category: "Computer Science and Engineering",
    courses: [
      { id: 25, img: "/images/webdev.jpg", title: "Web Development", duration: "08 Weeks", price: "₹899" },
      { id: 26, img: "/images/data.WebP", title: "Data Science", duration: "08 Weeks", price: "₹899" },
      { id: 27, img: "/images/ai.jpg", title: "Artificial Intelligence", duration: "08 Weeks", price: "₹899" },
      { id: 28, img: "/images/cyber.jpg", title: "Cybersecurity", duration: "08 Weeks", price: "₹899" },
      { id: 29, img: "/images/base.jpg", title: "Database Management", duration: "08 Weeks", price: "₹899" },
      { id: 30, img: "/images/python.jpg", title: "Python", duration: "08 Weeks", price: "₹899" },
      { id: 31, img: "/images/java.jpg", title: "Java", duration: "08 Weeks", price: "₹899" },
      { id: 32, img: "/images/cp.jpg", title: "C++", duration: "08 Weeks", price: "₹899" },
      { id: 33, img: "/images/c.jpg", title: "C Programming", duration: "08 Weeks", price: "₹899" },
      { id: 34, img: "/images/script.jpg", title: "JavaScript", duration: "08 Weeks", price: "₹899" }
    ]
  },
  {
    category: "Civil Engineering",
    courses: [
      { id: 35, img: "/images/revit.jpg", title: "Revit", duration: "08 Weeks", price: "₹899" },
      { id: 36, img: "/images/staad.jpg", title: "STAAD PRO", duration: "08 Weeks", price: "₹899" },
      { id: 37, img: "/images/etabs.jpg", title: "ETABS", duration: "08 Weeks", price: "₹899" },
      { id: 38, img: "/images/bim.jpg", title: "BIM", duration: "08 Weeks", price: "₹899" },
      { id: 39, img: "/images/autocad-2016-1.jpg", title: "AutoCAD", duration: "08 Weeks", price: "₹899" }
    ]
  },
  {
    category: "EE / ECE",
    courses: [
      { id: 40, img: "/images/scada.jpg", title: "SCADA", duration: "08 Weeks", price: "₹899" },
      { id: 41, img: "/images/mat.jpg", title: "MATLAB", duration: "08 Weeks", price: "₹899" },
      { id: 42, img: "/images/iot.jpg", title: "IOT", duration: "08 Weeks", price: "₹899" },
      { id: 43, img: "/images/webdev.jpg", title: "Web Development", duration: "08 Weeks", price: "₹899" },
      { id: 44, img: "/images/data.WebP", title: "Data Science", duration: "08 Weeks", price: "₹899" },
      { id: 45, img: "/images/ai.jpg", title: "Artificial Intelligence", duration: "08 Weeks", price: "₹899" },
      { id: 46, img: "/images/cyber.jpg", title: "Cybersecurity", duration: "08 Weeks", price: "₹899" },
      { id: 47, img: "/images/base.jpg", title: "Database Management", duration: "08 Weeks", price: "₹899" },
      { id: 48, img: "/images/python.jpg", title: "Python", duration: "08 Weeks", price: "₹899" },
      { id: 49, img: "/images/java.jpg", title: "Java", duration: "08 Weeks", price: "₹899" },
      { id: 50, img: "/images/cp.jpg", title: "C++", duration: "08 Weeks", price: "₹899" },
      { id: 51, img: "/images/c.jpg", title: "C Programming", duration: "08 Weeks", price: "₹899" },
      { id: 52, img: "/images/script.jpg", title: "JavaScript", duration: "08 Weeks", price: "₹899" }
    ]
  },
  {
    category: "Mechanical Engineering",
    courses: [
      { id: 53, img: "/images/ansys.jpg", title: "ANSYS", duration: "08 Weeks", price: "₹899" },
      { id: 54, img: "/images/hvac.jpg", title: "HVAC", duration: "08 Weeks", price: "₹899" },
      { id: 55, img: "/images/catia.jpg", title: "CATIA", duration: "08 Weeks", price: "₹899" },
      { id: 56, img: "/images/solid.jpg", title: "SOLIDWORKS", duration: "08 Weeks", price: "₹899" }
    ]
  },

{
  category: "Artificial Intelligence (AI)",
  courses: [
    {id: 57, img: "/images/chat.jpg", title: "Chatbot", duration: "06 Weeks", price: "₹899" },
    { id: 58, img: "/images/iot.jpg", title: "IOT", duration: "08 Weeks", price: "₹899" },
    {id: 59, img: "/images/webdev.jpg", title: "Web Development", duration: "08 Weeks", price: "₹899" },
    {id: 60, img: "/images/data.WebP", title: "Data Science", duration: "08 Weeks", price: "₹899" },
    { id: 61,img: "/images/ai.jpg", title: "Artificial Intelligence", duration: "08 Weeks", price: "₹899" },
    {id: 62, img: "/images/cyber.jpg", title: "Cybersecurity", duration: "08 Weeks", price: "₹899" },
    { id: 63,img: "/images/base.jpg", title: "Database Management", duration: "08 Weeks", price: "₹899" },
    { id: 64,img: "/images/python.jpg", title: "Python", duration: "08 Weeks", price: "₹899" },
    {id: 65, img: "/images/java.jpg", title: "Java", duration: "08 Weeks", price: "₹899" },
    { id: 66,img: "/images/cp.jpg", title: "C++", duration: "08 Weeks", price: "₹899" },
    {id: 67, img: "/images/c.jpg", title: "C Programming", duration: "08 Weeks", price: "₹899" },
    {id: 68, img: "/images/script.jpg", title: "JavaScript", duration: "08 Weeks", price: "₹899" }
  ]
}

  
];


const CourseCard = ({ img, title, duration, price, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("Modal is opening");
    setIsModalOpen(true);
  };
  
  const closeModal = () => setIsModalOpen(false);

  return (

    
    <div className="course-item">


<Helmet>
        <title>InternCourse - Learn Programming</title>
        <meta name="description" content="Explore online courses at InternCourse. Learn software development, Java, Python, web development, and more with expert-led training. Start your learning journey today!" />
        <meta name="keywords" content="InternCourse courses, online learning, software development courses, Java courses, Python courses, web development courses, e-learning, programming courses, digital education" />

        {/* Open Graph Meta Tags (For Social Media) */}
        <meta property="og:title" content="InternCourse - Best Online Courses in Software & Web Development" />
        <meta property="og:description" content="Join InternCourse and learn programming, software development, Java, Python, web development, and more with expert instructors." />
        <meta property="og:image" content="https://interncourse.online/images/dig.WebP" />
        <meta property="og:url" content="https://interncourse.online/courses" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Online Courses at InternCourse - Learn & Grow" />
        <meta name="twitter:description" content="Upgrade your skills with expert-led online courses in Java, Python, software development, and more. Enroll now!" />
        <meta name="twitter:image" content="https://interncourse.online/images/dig.WebP" />
        <meta name="twitter:site" content="@InternCourse" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://interncourse.online/courses" />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "InternCourse",
            "url": "https://interncourse.online",
            "logo": {
              "@type": "ImageObject",
              "url": "https://interncourse.online/images/logo.png"
            },
            "description": "InternCourse provides online courses in software development, web development, Java, Python, and more to help learners upskill.",
            "course": [
              {
                "@type": "Course",
                "name": "Java Programming Course",
                "description": "Learn Java from scratch with hands-on projects.",
                "provider": {
                  "@type": "Organization",
                  "name": "InternCourse"
                }
              },
              {
                "@type": "Course",
                "name": "Python for Beginners",
                "description": "Master Python programming with real-world applications.",
                "provider": {
                  "@type": "Organization",
                  "name": "InternCourse"
                }
              },
              {
                "@type": "Course",
                "name": "Web Development Bootcamp",
                "description": "Learn HTML, CSS, JavaScript, and React to build modern websites.",
                "provider": {
                  "@type": "Organization",
                  "name": "InternCourse"
                }
              }
            ]
          })}
        </script>
      </Helmet>


      <img src={img} alt={title} className="course-image" />
      <h4>{title}</h4>
      <p>Duration: {duration}</p>
      <p>{price}</p>
      {/* Enroll Now Button */}
      <NavLink to={`/enrollment`} state={{ courseId: id }}>
        <button>Enroll Now</button>
      </NavLink>
      
      {/* Modal for enrollment */}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Enrollment Form">
        <h2>Enroll Now in {title}</h2>
        {/* Enrollment form or other content goes here */}
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <button type="submit">Submit</button>
        </form>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

const Courses = () => {
  return (

    <div className="courses-container">      
      {coursesData.map((category, index) => (
        <section key={index} className="courses">
          <h2>{category.category}</h2>
          <div className="course-list">
            {category.courses.map((course) => (
              <CourseCard
                key={course.id}
                img={course.img}
                title={course.title}
                duration={course.duration}
                price={course.price}
                id={course.id} // Pass the course id
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Courses;