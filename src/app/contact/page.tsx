import Link from "next/link";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const ContactPage = () => {
    return (
        <div className="container max-w-7xl mx-auto py-20">
            <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                    <p className="text-secondary md:w-2/3">I'm always open to discussing new projects, creative ideas or opportunties to be part of your visions</p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="w-6 h-6 text-primary" />
                            <div>
                                <h3 className="text-semibold">Email:</h3>
                                <Link href="ashiqurrahmanabir96@gmail.com">ashiqurrahmanabir96@gmail.com</Link>
                            </div>
                        </div>

                           <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <FaPhone className="w-6 h-6 text-primary" />
                            <div>
                                <h3 className="text-semibold">Phone:</h3>
                                <Link href="tel:+8801825806917">+88 01825806917</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ContactPage;