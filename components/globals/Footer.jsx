import { FaGithub, FaLinkedin } from "react-icons/fa";
import LiftedLogo from "../../public/favicon.ico";
import Image from "next/image";

const navigation = {
  social: [
    {
      name: "GitHub",
      href: "https://github.com/NikosKouroumpetsis/",
      icon: (props) => <FaGithub />,
    },

    {
      name: "LinkedIn",
      href: "https://gr.linkedin.com/in/nikolaos-kouroumpetsis-363819220",
      icon: (props) => <FaLinkedin />,
    },
  ],
};

const footerData = {
  message:
    "I hope you find this demo project helpful. If you ever need my services on your company, I'd love to contact me!",

  followMessage: "Follow me on Linkedin",
  callToActionURL:
    "https://gr.linkedin.com/in/nikolaos-kouroumpetsis-363819220",
  callToActionMessage: "Send me a message",
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <p className="text-center text-base text-gray-400">
          {footerData.followMessage}
        </p>
        <div className="mt-2 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center  text-lg text-gray-600">
          {footerData.message} <br />
          <a
            href={footerData.callToActionURL}
            className="text-blue-700 xl:text-xl hover:text-blue-800"
          >
            {footerData.callToActionMessage} <br />
            <Image
              src={LiftedLogo}
              height={60}
              width={60}
              alt={`LiftedWP - Headless Commerce & CMS Experts.`}
            />
          </a>
        </p>
      </div>
    </footer>
  );
}
