// CServices.js
import React, { useState } from 'react';
import '../styles/CServices.css';
import {
  FaUsers,
  FaLaptopCode,
  FaGraduationCap,
  FaLightbulb,
  FaUniversity,
  FaGlobe,
  FaTools,
  FaUserFriends,
  FaUserTie,
  FaProjectDiagram,
  FaMoneyCheckAlt,
  FaClipboardList,
  FaChartBar,
} from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaUsers />,
    title: 'Mass Hiring Solutions',
    description:
      'High-volume recruitment drives aimed at helping businesses scale their teams quickly and efficiently.',
    benefits: [
      'Rapid team scaling',
      'Lower cost per hire',
      'Efficient onboarding support',
    ],
  },
  {
    icon: <FaLaptopCode />,
    title: 'Fresher Tech Talent Program',
    description:
      'Comprehensive recruitment program specifically designed for hiring and training fresh engineering graduates for tech roles.',
    benefits: [
      'Access to top campus talent',
      'Ready-to-train engineers',
      'Structured onboarding support',
    ],
  },
  {
    icon: <FaGraduationCap />,
    title: 'Graduate Development Program',
    description:
      'Structured program for identifying, hiring, and developing fresh graduates across various disciplines.',
    benefits: [
      'Diverse talent sourcing',
      'Training and mentorship plans',
      'Faster productivity ramp-up',
    ],
  },
  {
    icon: <FaLightbulb />,
    title: 'Innovation Hiring Program',
    description:
      'Specialized recruitment for R&D and innovation roles, targeting fresh minds with creative potential.',
    benefits: [
      'Creative problem solvers',
      'R&D specific assessments',
      'Culture-fit matching',
    ],
  },
  {
    icon: <FaUniversity />,
    title: 'Campus Drive Recruitment',
    description:
      'We organize and manage placement drives at top colleges and universities, connecting businesses with fresh talent.',
    benefits: [
      'On-campus branding',
      'Streamlined event logistics',
      'Pre-screened candidate pools',
    ],
  },
  {
    icon: <FaGlobe />,
    title: 'Global Remote Talent Hiring',
    description:
      'Tap into a global talent pool with our pre-vetted professionals ready for remote and hybrid roles.',
    benefits: [
      'Global sourcing networks',
      'Compliance and payroll support',
      'Flexible hiring models',
    ],
  },
  {
    icon: <FaTools />,
    title: 'GCC Hiring & Setup Support',
    description:
      'Specialized recruitment and staffing solutions for setting up and scaling Global Capability Centers (GCCs).',
    benefits: [
      'Talent market insights',
      'End-to-end GCC setup advisory',
      'Scale-up hiring teams quickly',
    ],
  },
  {
    icon: <FaUserFriends />,
    title: 'Staff Augmentation',
    description:
      'Expand your team with on-demand skilled professionals to quickly scale with the talent you need.',
    benefits: [
      'Zero bench cost',
      'Quick onboarding',
      'Access to niche skills',
    ],
  },
  {
    icon: <FaUserTie />,
    title: 'Direct Placements',
    description:
      'End-to-end hiring for permanent, full-time roles, ensuring candidates match your organization’s culture and needs.',
    benefits: [
      'High retention candidates',
      'Cultural fit focus',
      'Cost-effective hiring',
    ],
  },
  {
    icon: <FaProjectDiagram />,
    title: 'Managed Talent Services',
    description:
      'Our services cover the entire workforce management lifecycle, from sourcing to onboarding to administration.',
    benefits: [
      'Lifecycle talent management',
      'Unified service stack',
      'Scalable support model',
    ],
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: 'Third-Party Payroll Services',
    description:
      'Hire and manage your workforce on CRTD’s payroll while reducing administrative overhead.',
    benefits: [
      'Regulatory compliance',
      'Reduced admin burden',
      'Faster onboarding',
    ],
  },
  {
    icon: <FaClipboardList />,
    title: 'On-Payroll Staffing Solutions',
    description:
      'Employees are onboarded directly under your company’s payroll, with complete compliance support.',
    benefits: [
      'Custom contracts',
      'Policy alignment',
      'Local regulation support',
    ],
  },
  {
    icon: <FaChartBar />,
    title: 'Recruitment Process Outsourcing',
    description:
      'Outsource your entire recruitment cycle to our expert team for scalable and efficient results.',
    benefits: [
      'Process automation',
      'Performance tracking',
      'Talent pipeline ownership',
    ],
  },
];

const CServices = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleBenefits = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <section className="services">
      <div className="services__header">
        <h2>
          Our <span className="services__highlight">Comprehensive</span> Services
        </h2>
        <p>
          From mass hiring solutions to specialized fresher recruitment programs, we deliver end-to-end talent solutions for organizations of all sizes. Whether you're scaling your tech team or building a fresh graduate workforce, our services
          are designed to meet your unique hiring needs.
        </p>
      </div>
      <div className="services__grid">
        {servicesData.map((service, index) => (
          <div
            className={`services__card ${visibleIndex === index ? 'active' : ''}`}
            key={index}
          >
            <div className="services__icon">{service.icon}</div>
            <h3 className="services__title">{service.title}</h3>
            <p className="services__description">{service.description}</p>
            <a
              href="#"
              className="services__link"
              onClick={(e) => {
                e.preventDefault();
                toggleBenefits(index);
              }}
            >
              {visibleIndex === index ? 'Hide Benefits ▲' : 'Show Benefits ▼'}
            </a>
            <div
              className="services__benefits-wrapper"
              style={{ height: visibleIndex === index ? 'auto' : 0, overflow: 'hidden' }}
            >
              {visibleIndex === index && (
                <ul className="services__benefits">
                  {service.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CServices;
