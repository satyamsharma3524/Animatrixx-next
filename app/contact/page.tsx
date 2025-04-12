import { Mail, MapPin, Phone } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Contact Us | NekoAnime",
  description: "Get in touch with the NekoAnime team for support, feedback, or business inquiries",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <MainNav />
      </header>

      <main className="flex-1 pt-24 pb-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Have questions, feedback, or need support? We're here to help! Reach out to us using any of the methods
                below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-zinc-900 p-6 rounded-lg text-center">
                <div className="bg-pink-600/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-pink-400" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-400 text-sm mb-3">For general inquiries and support</p>
                <a href="mailto:support@nekoanime.com" className="text-pink-400 hover:underline">
                  support@nekoanime.com
                </a>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg text-center">
                <div className="bg-pink-600/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-pink-400" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-400 text-sm mb-3">Mon-Fri from 9am to 5pm</p>
                <a href="tel:+1234567890" className="text-pink-400 hover:underline">
                  +1 (234) 567-890
                </a>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg text-center">
                <div className="bg-pink-600/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-pink-400" />
                </div>
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-400 text-sm mb-3">Our headquarters</p>
                <address className="text-pink-400 not-italic">123 Anime Street, Tokyo, Japan</address>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">How do I report a technical issue?</h3>
                  <p className="text-gray-400">
                    If you're experiencing technical issues, please email us at support@nekoanime.com with details about
                    the problem, including your device, browser, and steps to reproduce the issue.
                  </p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">How can I request a new anime or manga to be added?</h3>
                  <p className="text-gray-400">
                    You can request new content by filling out the form above or by emailing us at content@nekoanime.com
                    with the title and any additional information.
                  </p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Do you offer business partnerships or advertising?</h3>
                  <p className="text-gray-400">
                    Yes, we're open to partnerships and advertising opportunities. Please contact our business team at
                    business@nekoanime.com for more information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
