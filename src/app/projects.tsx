"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/1-member-gateway.png",
    title: "Member Gateway for Health Insurance",
    desc: "Member Gateway also streamlines the claims process, allowing users to submit and track claims in real-time, reducing paperwork and administrative hassles. Additionally, members can seamlessly communicate with insurance providers, ask questions, and receive timely assistance, fostering a transparent and supportive relationship between insurers and policyholders.",
  },
  {
    img: "/image/1-dmw.png",
    title: "Embassy Portal",
    desc: "The Official Embassy Portal serves as the digital gateway to connect citizens, visitors, and stakeholders with embassy services and information, fostering efficient communication and enhancing diplomatic relations. Through this portal, users can access a wide range of essential services and resources, including visa applications, consular assistance, cultural events, and travel advisories.",
  },
  {
    img: "/image/1-bondeed.png",
    title: "Corporate Community Website",
    desc: "A centralized digital hub for fostering engagement, collaboration, and communication within a company's community of employees, partners, and stakeholders. It provides a platform for sharing information, resources, and updates relevant to the organization's mission, values, and initiatives.",
  },
  {
    img: "/image/1-ksa-appointment.png",
    title: "Appointment System",
    desc: "Digital platform designed to streamline the process of scheduling appointments, managing bookings, and optimizing resource allocation for businesses and service providers across various industries. This system leverages advanced technology to enhance efficiency, convenience, and customer satisfaction while reducing administrative burdens and minimizing scheduling conflicts.",
  },
  {
    img: "/image/1-nemsu.png",
    title: "School Management System",
    desc: "Tailored to meet the diverse needs of educational institutions, facilitating seamless administration, communication, and collaboration among stakeholders including administrators, teachers, students, and parents. This system integrates various modules to streamline administrative tasks, enhance academic management, and improve overall efficiency within the school ecosystem.",
  },
  {
    img: "/image/1-nyc.png",
    title: "Learning Management System (LMS)",
    desc: "Digital platform designed to revolutionize the way educational content is delivered, managed, and accessed by learners and instructors. It serves as a comprehensive solution for educational institutions, corporations, and training providers to streamline the administration, delivery, and tracking of learning activities and resources.",
  },
  {
    img: "/image/1-budget-pet.png",
    title: "E-commerce",
    desc: "An e-commerce website that focuses on pet products. These websites typically feature product listings, shopping cart functionality, secure payment processing, and often include additional features such as customer reviews, order tracking, and personalized recommendations.",
  },
  // beauty books
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography placeholder={''} variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography placeholder={''}
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
