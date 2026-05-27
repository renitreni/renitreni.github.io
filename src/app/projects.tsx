"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

type ProjectEntry = {
  img: string;
  title: string;
  desc: string;
  href?: string;
};

const PROJECTS: ProjectEntry[] = [
  {
    img: "/project-screenshots/health-insurance/1-member-gateway.png",
    title: "Member Gateway for Health Insurance",
    desc: "Member Gateway also streamlines the claims process, allowing users to submit and track claims in real-time, reducing paperwork and administrative hassles. Additionally, members can seamlessly communicate with insurance providers, ask questions, and receive timely assistance, fostering a transparent and supportive relationship between insurers and policyholders.",
  },
  {
    img: "/project-screenshots/government/1-dmw.png",
    title: "Embassy Portal",
    desc: "The Official Embassy Portal serves as the digital gateway to connect citizens, visitors, and stakeholders with embassy services and information, fostering efficient communication and enhancing diplomatic relations. Through this portal, users can access a wide range of essential services and resources, including visa applications, consular assistance, cultural events, and travel advisories.",
  },
  {
    img: "/project-screenshots/corporate/1-bondeed.png",
    title: "Corporate Community Website",
    desc: "A centralized digital hub for fostering engagement, collaboration, and communication within a company's community of employees, partners, and stakeholders. It provides a platform for sharing information, resources, and updates relevant to the organization's mission, values, and initiatives.",
  },
  {
    img: "/project-screenshots/TMS.png",
    title: "Transport Management System (TMS)",
    desc: "A transport management system built to help operators scale fleet activity without adding operational drag. It unifies planning and execution with integrations that keep back-office, dispatch, and yard systems in sync, while dashboards and job-level detail give teams clear visibility into status, locations, and exceptions. Mobile-first driver flows support accepting assignments, following pickup and delivery instructions, and staying aligned with dispatch—so the business can coordinate port, depot, and over-the-road work from a single control surface, wherever people are working.",
  },
  {
    img: "/project-screenshots/government/1-ksa-appointment.png",
    title: "Appointment System",
    desc: "Digital platform designed to streamline the process of scheduling appointments, managing bookings, and optimizing resource allocation for businesses and service providers across various industries. This system leverages advanced technology to enhance efficiency, convenience, and customer satisfaction while reducing administrative burdens and minimizing scheduling conflicts.",
  },
  {
    img: "/project-screenshots/education/1-nemsu.png",
    title: "School Management System",
    desc: "Tailored to meet the diverse needs of educational institutions, facilitating seamless administration, communication, and collaboration among stakeholders including administrators, teachers, students, and parents. This system integrates various modules to streamline administrative tasks, enhance academic management, and improve overall efficiency within the school ecosystem.",
  },
  {
    img: "/project-screenshots/education/1-nyc.png",
    title: "Learning Management System (LMS)",
    desc: "Digital platform designed to revolutionize the way educational content is delivered, managed, and accessed by learners and instructors. It serves as a comprehensive solution for educational institutions, corporations, and training providers to streamline the administration, delivery, and tracking of learning activities and resources.",
  },
  {
    img: "/project-screenshots/ecommerce/1-budget-pet.png",
    title: "E-commerce",
    desc: "An e-commerce website that focuses on pet products. These websites typically feature product listings, shopping cart functionality, secure payment processing, and often include additional features such as customer reviews, order tracking, and personalized recommendations.",
  },
  {
    img: "/project-screenshots/beeauty-books/1-beauty-books.png",
    title: "Beauty Books",
    href: "https://beautybooks.io/",
    desc: "Studio management and booking software made for lash artists—not generic salon software. It helps stylists and salons run day-to-day operations with tailored client profiles and preferences, online booking, waitlists and deposits, payments and retail, analytics, and multi-location support so the business can scale from a solo chair to a team.",
  },
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
        {PROJECTS.map((project, idx) => (
          <ProjectCard
            key={idx}
            img={project.img}
            title={project.title}
            desc={project.desc}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
