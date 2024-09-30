import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { FC, ReactNode } from "react";

// Define Types for Social Media Links
interface SocialMediaLink {
  href: string;
  label: string;
  icon: ReactNode;
}

// Define Types for Footer Links
interface FooterLink {
  href: string;
  label: string;
  icon?: ReactNode;
  extra?: ReactNode;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

// Social Media Links Data
const socialMediaLinks: SocialMediaLink[] = [
  { href: "#", label: "Facebook", icon: <Facebook /> },
  { href: "#", label: "Instagram", icon: <Instagram /> },
  { href: "#", label: "Twitter", icon: <Twitter /> },
  { href: "#", label: "GitHub", icon: <Github /> },
  { href: "#", label: "Linkedin", icon: <Linkedin /> },
];

// Footer Links Data
const footerLinks: FooterSection[] = [
  {
    title: "About Us",
    links: [
      { href: "#", label: "Company History" },
      { href: "#", label: "Meet the Team" },
      { href: "#", label: "Employee Handbook" },
      { href: "#", label: "Careers" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { href: "#", label: "Web Development" },
      { href: "#", label: "Web Design" },
      { href: "#", label: "Marketing" },
      { href: "#", label: "Google Ads" },
    ],
  },
  {
    title: "Helpful Links",
    links: [
      { href: "#", label: "FAQs" },
      { href: "#", label: "Support" },
      {
        href: "#",
        label: "Live Chat",
        extra: (
          <span className="relative flex h-2 w-2 ml-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
          </span>
        ),
      },
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        href: "#",
        label: "info@example.com",
        icon: <Mail className="h-5" />,
      },
      {
        href: "#",
        label: "9876543210",
        icon: <Phone className="h-5" />,
      },
      {
        href: "#",
        label: "Rajasthan India",
        icon: <MapPin className="h-5" />,
      },
    ],
  },
];

const Footer: FC = () => {
  return (
    <footer>
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Company Info */}
          <div>
            <div className="flex justify-center text-teal-600 dark:text-teal-400 sm:justify-start">
              <Image src="/logo.png" alt="Logo" width={200} height={150} />
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400 sm:max-w-xs sm:text-left">
              This E-shop is created for learning purposes. You can use this for
              personal or commercial use. Using MERN stack.
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialMediaLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-400 dark:hover:text-teal-400/75"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            {footerLinks.map((section) => (
              <div key={section.title} className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  {section.title}
                </p>
                <ul className="mt-8 space-y-4 text-sm">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="flex items-center gap-1.5 text-gray-700 transition hover:text-gray-700/75 dark:text-gray-300 dark:hover:text-gray-400"
                      >
                        {link.icon}
                        <span>{link.label}</span>
                        {link.extra}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-100 pt-6 dark:border-gray-800">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="block sm:inline">All rights reserved.</span>
              <a
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75 dark:text-teal-400 dark:hover:text-teal-300"
                href="#"
              >
                Terms & Conditions
              </a>
              <span> &middot; </span>
              <a
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75 dark:text-teal-400 dark:hover:text-teal-300"
                href="#"
              >
                Privacy Policy
              </a>
            </p>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:order-first sm:mt-0">
              © NITISH_SINGH
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
