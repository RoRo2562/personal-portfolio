import { useEffect, useState } from "react"

const Contact = () => {

    const [time,setTime] = useState(new Date())
    useEffect(() =>{
        const timer = setInterval(() =>{
            setTime(new Date())
        },1000);

        return () => {
            clearInterval(timer);
        }
    },[]);

    const formattedTime = time.toLocaleTimeString('en-US',{
        timeZone:'Australia/Melbourne',
        hour12:true,
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit'
    })

  return (
    <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 p-8 px-[10%]">
            <div className="md:col-span-2 p-5">
                <h1 className="special-font uppercase font-zentry font-black text-3xl sm:right-10 sm:text-3xl md:text-4xl lg:text-5xl text-[#676c82]">Let's build something great together!</h1>
                <form action="" className="mt-12 space-y-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <input
                        type="text"
                        id="name"
                        className="w-full bg-transparent border-b-2 border-[#676c82]/50 focus:outline-none focus:border-[#676c82] transition duration-200 p-2 text-[#676c82]"
                        placeholder="Your name"
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        className="w-full bg-transparent border-b-2 border-[#676c82]/50 focus:outline-none focus:border-[#676c82] transition duration-200 p-2 text-[#676c82]"
                        placeholder="Your email"
                        required
                    />
                    </div>
                    <div>
                    <textarea
                        id="message"
                        rows={4}
                        className="w-full bg-transparent border-b-2 border-[#676c82]/50 focus:outline-none focus:border-[#676c82] transition duration-200 p-2 text-[#676c82]"
                        placeholder="Your message"
                    />
                    </div>

                    <button className="rounded-full border-2 border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none mt-4">
                        Hover me
                    </button>
 


                </form>
            </div>
            <div className="col-span-1 flex-col  text-[#676c82] py-4 pl-4">
                <div className="flex-col mb-4">
                    <h1 className="text-xl font-bold font-zentry uppercase py-2">Contact Details</h1>
                    <p className="py-2">rohan72562@gmail.com</p>
                    <p className="py-2">+61448706033</p>
                </div>
                <div className="flex-col">
                    <h1 className="text-xl font-bold font-zentry uppercase py-2">My Platforms</h1>
                    <div className="py-2 inline-flex gap-2 w-full">
                        <img src="/contact-assets/linkedin.svg" alt="" className="size-7" />
                        <a href="https://linkedin.com/in/rohan-sivam" className="relative font-general uppercase after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#676c82] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-[#676c82] cursor-pointer">LinkedIn</a>
                    </div>
                    <div className="py-2 inline-flex gap-2 w-full">
                        <img src="/contact-assets/github.svg" alt="" className="size-7" />
                        <a href="https://github.com/RoRo2562" className="relative font-general uppercase after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#676c82] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-[#676c82] cursor-pointer">
                        GitHub
                        </a>
                    </div>
                    <div className="py-2 inline-flex gap-2 w-full">
                        <img src="/contact-assets/leetcode.svg" alt="" className="size-7" />
                        <a href="https://leetcode.com/u/RoRo2562/" className="relative font-general uppercase after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#676c82] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-[#676c82] cursor-pointer">
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
  )
}

export default Contact