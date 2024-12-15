import React from "react";
import { toast } from "react-toastify";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "06048aa2-da7b-4eae-9d99-378f799d3105");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Form Submitted Succesfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
          Contact
          <span className="underline underline-offset-4 decoration-1 font-light">
            With Us
          </span>
        </h1>
        <p className="text-gray-500 max-w-80 mb-8 text-center">
          Ready to Make a Move? Let’s Build Your Future Together{" "}
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 mb-2"
              type="text"
              name="Name"
              required
              placeholder="Your Name"
            />
          </div>
          <div className="w-full md:w-1/2 text-left sm:pt-4  lg:pl-4 lg:pt-0">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="Email"
              required
              placeholder="Your Email"
            />
          </div>
        </div>
        {/* text area */}
        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder=" Your Message"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded ">
            {result ? result : "send message"}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
