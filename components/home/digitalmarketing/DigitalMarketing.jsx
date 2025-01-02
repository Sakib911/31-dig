import { Button } from "@/components/ui/button";

export const DigitalMarketing = () => {
    return (
        <section className=" bg-gradient-to-br from-white to-blue-50/50 ">


            <div className="max-w-screen-2xl mx-auto   items-center min-h-max gap-1 ">
                <div className="flex">
                    {/* Left Div - Single Image */}
                    <div className="relative lg: w-[50%] flex items-center justify-center">
                        <img
                            src="/11.png"
                            alt="Main Visual"
                            className="rounded-lg  object-cover"
                        />
                    </div>

                    {/* Right Div - Two Blocks */}

                    <div className="space-y-2 lg:w-[50%]  lg: relative pb-24 mt-[10%]">
                        <div>

                            <h1 className="text-[#2F8EAA] pl-[1.5px] font-family-outfit font-[24px] font-semibold">
                                Digital Maketing
                            </h1>

                        </div>


                        <div className="">


                            <h2 className="text-[40px] lg:text-[55px] font-bold leading-tight text-gray-900">
                                Digital Marketing{" "}
                                <span className="text-[#5927E5]">
                                    Next Level Web Hosting
                                </span>{" "}
                                Services
                            </h2>
                        </div>

                        <div className="flex flex-col lg:flex-row items-start ">


                            <div className="flex-grow">
                                <p className="text-[#7C859E] font-outfit text-[20px] font-medium leading-[40px]">
                                    You are at the right place if you are looking for{" "}
                                    <a
                                        href="#"
                                        className="text-[#7C859E] underline decoration-solid decoration-auto underline-offset-auto"
                                    >
                                        web hosting in Pakistan
                                    </a>
                                    ,{" "}
                                    <a
                                        href="#"
                                        className="text-[#7C859E] underline decoration-solid decoration-auto underline-offset-auto"
                                    >
                                        PK domain
                                    </a>{" "}
                                    name, and Windows hosting services with complete reliability, security,
                                    affordability, and full 24/7 technical support. We don’t just aim to speed
                                    up your website with premium web hosting in Pakistan but also speed you up
                                    globally. With our ultra-reliable, fast, and super-secure
                                </p>

                                {/* Learn More Button */}
                                <button
                                    className="mt-4 text-[#FFFFFF] bg-[#2F8EAA] font-outfit hover:no-underline no-underline px-16 py-2 rounded-full font-medium text-[23px] leading-[40px] flex items-center gap-2 shadow-[inset_0px_10px_10px_0px_#1A7793]"
                                >
                                    Explore{" "}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none">
                                        <path d="M1.13637 8.32709H21.1207L15.1058 2.04165C14.9973 1.93211 14.9107 1.80108 14.8512 1.6562C14.7916 1.51132 14.7603 1.35549 14.7589 1.19782C14.7576 1.04014 14.7864 0.883774 14.8435 0.737834C14.9007 0.591895 14.985 0.459308 15.0917 0.34781C15.1984 0.236313 15.3253 0.148137 15.465 0.0884288C15.6046 0.0287202 15.7543 -0.00132532 15.9052 4.48365e-05C16.056 0.00141499 16.2052 0.0341737 16.3438 0.0964094C16.4824 0.158645 16.6078 0.249112 16.7127 0.36253L24.6673 8.67503C24.8803 8.89772 25 9.19971 25 9.51459C25 9.82947 24.8803 10.1315 24.6673 10.3542L16.7127 18.6667C16.4983 18.883 16.2113 19.0027 15.9133 19C15.6154 18.9972 15.3304 18.8724 15.1197 18.6522C14.909 18.432 14.7895 18.1342 14.7869 17.8228C14.7843 17.5115 14.8988 17.2115 15.1058 16.9875L21.1207 10.7021H1.13637C0.834988 10.7021 0.545946 10.577 0.332834 10.3543C0.119722 10.1316 0 9.82954 0 9.51459C0 9.19965 0.119722 8.8976 0.332834 8.6749C0.545946 8.4522 0.834988 8.32709 1.13637 8.32709Z" fill="white" />
                                    </svg>
                                </button>
                            </div>

                        </div>
                    </div>




                </div>
            </div>
        </section>
    );
};
