/**
 * @copyright 2025 Rohit Ray
 * @license Apache-2.0
 */

import { number } from "prop-types";

const aboutItems = [
    {
        label: 'Projects Done',
        number: 10
    },
    {
        label: 'Year of Experience',
        number: '1'
    }
];

const About = () => {
    return (
        <section id="about"
        className="section">
            <div className="container">

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Welcome! I&apos;m Rohit, a data scientist with a passion for uncovering insights and building intelligent solutions. 
                    Combining analytical expertise with cutting-edge technology, 
                    I transform complex data into actionable strategies that drive innovation and success
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                        aboutItems.map(({ label, number }, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))}

                        <img src="/images/logo.svg" 
                        width={30}
                        height={30}
                        alt="Logo"
                        className="ml-auto md:w-[40px] md:h-[40px]" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About;