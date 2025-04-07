const Contact = () => {
  return (
    <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 px-25">
            <div className="md:col-span-2 p-5">
                <h1 className="special-font uppercase font-zentry font-black text-3xl sm:right-10 sm:text-3xl md:text-4xl lg:text-5xl text-blue-75">Let's build something great together!</h1>
                <form action="" className="mt-12 space-y-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <input
                        type="text"
                        id="name"
                        className="w-full bg-transparent border-b-2 border-white/50 focus:outline-none focus:border-white transition duration-200 p-2"
                        placeholder="Your name"
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        className="w-full bg-transparent border-b-2 border-white/50 focus:outline-none focus:border-white transition duration-200 p-2"
                        placeholder="Your email"
                        required
                    />
                    </div>
                    <div>
                    <textarea
                        id="message"
                        rows={4}
                        className="w-full bg-transparent border-b-2 border-white/50 focus:outline-none focus:border-white transition duration-200 p-2"
                        placeholder="Your message"
                    />
                    </div>

                    <button className="rounded-full border-2 border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none mt-4">
                        Hover me
                    </button>
 


                </form>
            </div>
            <div className="col-span-1">

            </div>

        </div>
    </section>
  )
}

export default Contact