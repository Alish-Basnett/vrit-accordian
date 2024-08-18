import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faLaptop,
  faHistory,
  faCogs,
  faShieldAlt,
  faExclamationTriangle,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const items = [
    {
      title: "Connected devices",
      content:
        "Manage all devices connected to your account. You can view, disconnect, or troubleshoot devices that you don't recognize. This section ensures your account's security and helps you stay in control of all your devices.",
      icon: faLaptop,
    },
    {
      title: "Version history",
      content:
        "Track the changes made to your documents over time. Version history allows you to revert to previous versions or compare changes. This is useful for collaborative projects and keeping a record of edits.",
      icon: faHistory,
    },
    {
      title: "Integrations",
      content:
        "Explore and manage integrations with third-party applications. Connect your account with popular services like Google Drive, Slack, or Dropbox to streamline your workflow and enhance productivity.",
      icon: faCogs,
    },
    {
      title: "Application permissions",
      content:
        "Control which apps have access to your data. Review and revoke permissions for any application that you've connected to your account. Ensure your privacy and security by keeping an eye on app access.",
      icon: faShieldAlt,
    },
    {
      title: "We want your attention",
      content:
        "Important alerts regarding your account activity or security. This section includes notifications about unusual sign-ins, payment issues, or policy updates that require your immediate action.",
      icon: faExclamationTriangle,
    },
    {
      title: "Card expired *5318",
      content:
        "Your payment card ending in *5318 has expired. Please update your payment information to continue enjoying our services without interruption. This ensures your subscriptions and purchases remain active.",
      icon: faCreditCard,
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-r from-indigo-500 to-blue-500 shadow-xl overflow-hidden">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className={`w-full flex items-center justify-between text-left px-4 py-4 bg-gray-50 hover:bg-indigo-100 focus:outline-none transition-colors duration-300 ${
              openIndex === index ? "bg-blue-100" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={item.icon} className="text-blue-600" />
              <span className="font-semibold text-gray-700">{item.title}</span>
            </div>
            <FontAwesomeIcon
              icon={openIndex === index ? faChevronUp : faChevronDown}
              className={`text-gray-500 transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className={`overflow-hidden transition-all duration-700 ease-in-out ${
              openIndex === index ? "max-h-40" : "max-h-0"
            }`}
            style={{
              maxHeight:
                openIndex === index
                  ? `${contentRefs.current[index]?.scrollHeight}px`
                  : "0px",
            }}
          >
            <div className="px-6 py-4 text-gray-600 bg-white">
              <p className="leading-relaxed">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
