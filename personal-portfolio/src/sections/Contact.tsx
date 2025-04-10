import { useEffect, useRef, useState } from "react";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import emailjs from "@emailjs/browser";

// Type for form values
interface Form {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const serviceId = "service_r5l7hto";
  const publicKey = "BejXeBrRL-SvIzWUN";
  const templateId = "template_ehllzqs";

  const formRef = useRef<HTMLFormElement | null>(null); // Typing the formRef correctly

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<Form>({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Rohan Sivam",
          from_email: form.email,
          to_email: "rohan72562@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert();
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 3000); // Removed the array wrapping 3000
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  // Handling time formatting
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    timeZone: "Australia/Melbourne",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <section className="h-auto pb-16">
      {alert.show && <Alert {...alert} />}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 p-8 px-[10%] h-auto">
        <div className="md:col-span-2 p-5 h-auto">
          <h1 className="special-font uppercase font-zentry font-black text-3xl sm:right-10 sm:text-3xl md:text-4xl lg:text-5xl text-[#676c82] mb-20">
            Let's build something great together!
          </h1>
          <form action="" onSubmit={handleSubmit} ref={formRef} className="mt-12 space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-transparent border-b-2 border-[#676c82]/50 focus:outline-none focus:border-[#676c82] transition duration-200 p-2 text-[#676c82] mb-8"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-transparent border-b-2 border-[#676c82]/50 focus:outline-none focus:border-[#676c82] transition duration-200 p-2 text-[#676c82] mb-8"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-[#676c82]/50 focus:outline-none focus:border-[#676c82] transition duration-200 p-2 text-[#676c82] mb-8"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="rounded-full border-2 border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none mt-4"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        <div className="col-span-1 flex-col text-[#676c82] py-4 pl-4 h-auto">
          <div className="flex-col mb-10">
            <h1 className="text-xl font-bold font-zentry uppercase py-2">Contact Details</h1>
            <p className="py-2">rohan72562@gmail.com</p>
            <p className="py-2">+61448706033</p>
          </div>
          <div className="flex-col mb-10">
            <h1 className="text-xl font-bold font-zentry uppercase py-2">My Platforms</h1>
            <div className="py-2 inline-flex gap-2 w-full">
              <img src="/contact-assets/linkedin.svg" alt="" className="size-7" />
              <a
                href="https://linkedin.com/in/rohan-sivam"
                className="relative font-general uppercase after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#676c82] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-[#676c82] cursor-pointer"
              >
                LinkedIn
              </a>
            </div>
            <div className="py-2 inline-flex gap-2 w-full">
              <img src="/contact-assets/github.svg" alt="" className="size-7" />
              <a
                href="https://github.com/RoRo2562"
                className="relative font-general uppercase after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#676c82] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-[#676c82] cursor-pointer"
              >
                GitHub
              </a>
            </div>
            <div className="py-2 inline-flex gap-2 w-full">
              <img src="/contact-assets/leetcode.svg" alt="" className="size-7" />
              <a
                href="https://leetcode.com/u/RoRo2562/"
                className="relative font-general uppercase after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#676c82] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-[#676c82] cursor-pointer"
              >
                LeetCode
              </a>
            </div>
          </div>
          <div className="flex-col">
            <h1 className="text-xl font-bold font-zentry uppercase py-2">Location</h1>
            <p className="py-2">Melbourne, Australia</p>
            <p className="py-2">{formattedTime}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
