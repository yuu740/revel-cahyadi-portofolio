import React, { useState } from "react";
import { CONTACT_DATA } from "../../constants/contact";

type ClientType = "default" | "gmail" | "outlook" | "yahoo";

const Contact: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState<ClientType>("default");

  const email = "revelcahyadi2004@gmail.com";
  const subject = "Contact from Portfolio";
  const body = "Hello, I would like to get in touch regarding...";

  const clientLinks: Record<ClientType, string> = {
    default: `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    yahoo: `https://compose.mail.yahoo.com/?to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  };

  const handleClientSelect = (client: ClientType) => {
    setSelectedClient(client);
  };

  const handleEmailClick = () => {
    window.open(clientLinks[selectedClient], "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20 bg-[#2a323a] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#d9c179]">
          {CONTACT_DATA.title}
        </h2>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {["default", "gmail", "outlook", "yahoo"].map((client) => (
              <button
                key={client}
                onClick={() => handleClientSelect(client as ClientType)}
                className={`px-4 py-2 rounded ${
                  selectedClient === client
                    ? "bg-[#d9c179] text-[#2a323a]"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                } transition-colors duration-300`}
              >
                {client.charAt(0).toUpperCase() + client.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {CONTACT_DATA.methods.map((method) => (
              <a
                key={method.name}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2a323a] hover:bg-gray-700 hover:scale-105 transition-all duration-300 text-white font-medium py-4 px-6 rounded-lg border border-gray-600 w-full sm:w-auto md:min-w-[250px]"
              >
                <div className="text-[#d9c179] text-lg font-semibold">
                  {method.name}
                </div>
                <div className="text-gray-300">{method.value}</div>
              </a>
            ))}

            <button
              onClick={handleEmailClick}
              className="bg-[#2a323a] hover:bg-gray-700 hover:scale-105 transition-all duration-300 text-white font-medium py-4 px-6 rounded-lg border border-gray-600 w-full sm:w-auto md:min-w-[250px]"
            >
              <div className="text-[#d9c179] text-lg font-semibold">
                Email (via {selectedClient})
              </div>
              <div className="text-gray-300">{email}</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
