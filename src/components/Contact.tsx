import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://sendmail-api-rust.vercel.app/api/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      });

      if (!response.ok) {
      throw new Error("Failed to submit the form");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      // Reset form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsLoading(false);

    }
  };

  return (
    <section id="contact">
      <div className="flex flex-col md:flex-row gap-8 bg-white xl:px-[150px] lg:px-[100px] md:px-[60px] px-[30px]">
        {/* Left side with contact info */}
        <div className="w-full md:w-1/2">
          <div className="text-[var(--blue-1)] subheading-2 mb-1 md:text-left text-center">
            CONTACT US
          </div>
          <h2 className="heading-2 text-[var(--dark-blue-1)] mb-8 md:text-left text-center">
            TAKE THE FIRST STEP TO STREAMLINED SERVICES
          </h2>

          {/* Contact information boxes */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 border-b border-dashed pb-5">
              <div className="bg-blue-700 p-4 rounded">
                <Phone className="text-white" size={32} />
              </div>
              <div>
                <div className="text-gray-600 body-1">Call Us</div>
                <div className="heading-6">+94 77 790 1504</div>
              </div>
            </div>

            <div className="flex items-center space-x-4 border-b border-dashed pb-5">
              <div className="bg-blue-700 p-4 rounded">
                <Mail className="text-white" size={32} />
              </div>
              <div>
                <div className="text-gray-600 body-1">Email</div>
                <div className="heading-6">ops@lahirumarine.com</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-700 p-4 rounded">
                <MapPin className="text-white" size={32} />
              </div>
              <div>
                <div className="text-gray-600 body-1">Office</div>
                <div className="heading-6 uppercase">
                  No 251/4 Circular Road, Magalle ,Galle , Sri Lanka
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side with contact form */}
        <div className="w-full md:w-1/2 relative">
          <div className="bg-[var(--grey-1)] rounded-2xl p-8">
            <h3 className="heading-5 text-[var(--dark-blue-1)] mb-6">
              REQUEST A QUOTE TODAY
            </h3>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block subheading-2 text-[var(--dark-blue-2)] mb-1"
                >
                  YOUR NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ex: Jhon Dee"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border caption border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block subheading-2 text-[var(--dark-blue-2)] mb-1"
                >
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ex: jhondee@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border caption border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block subheading-2 text-[var(--dark-blue-2)] mb-1"
                >
                  PHONE
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Ex: +1 (333) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border caption border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block subheading-2 text-[var(--dark-blue-2)] mb-1"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Writing your message here..."
                  value={formData.message}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  rows={4}
                  className="w-full p-3 border caption border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className={`w-full bg-[var(--orange)] hover:bg-[var(--dark-blue-1)] cursor-pointer text-white font-bold py-3 px-4 rounded transition duration-300 ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "SUBMITTING..." : "SUBMIT"}
              </button>
            </div>
          </div>

          {/* Loading overlay - Now positioned absolutely over the form */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[var(--grey-1)] opacity-70 rounded-2xl">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[var(--orange)]"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
