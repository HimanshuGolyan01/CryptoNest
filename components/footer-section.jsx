import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-950 absolute z-50 top-[225rem] w-full items-center justify-between">
      <div className="  px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <h3 className="font-bold text-2xl text-white">Company</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="/about" className="text-white hover:text-slate-900">
                About Us
              </Link>
              <Link href="/careers" className="text-white hover:text-slate-900">
                Careers
              </Link>
              <Link href="/blog" className="text-white hover:text-slate-900">
                Blog
              </Link>
              <Link href="/press" className="text-white hover:text-slate-900">
                Press
              </Link>
            </div>
          </div>

         
          <div className="space-y-4">
            <h3 className=" font-bold text-white text-2xl">Products</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="/products/features" className="text-white hover:text-slate-900">
                Features
              </Link>
              <Link href="/products/pricing" className="text-white hover:text-slate-900">
                Pricing
              </Link>
              <Link href="/products/integrations" className="text-white hover:text-slate-900">
                Integrations
              </Link>
              <Link href="/products/enterprise" className="text-white hover:text-slate-900">
                Enterprise
              </Link>
            </div>
          </div>

         
          <div className="space-y-4">
            <h3 className="font-bold text-white text-2xl">Resources</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="/resources/documentation" className="text-white hover:text-slate-900">
                Documentation
              </Link>
              <Link href="/resources/guides" className="text-white hover:text-slate-900">
                Guides
              </Link>
              <Link href="/resources/api" className="text-white hover:text-slate-900">
                API Reference
              </Link>
              <Link href="/resources/community" className="text-white hover:text-slate-900">
                Community
              </Link>
            </div>
          </div>

         
          <div className="space-y-4">
            <h3 className="font-bold text-2xl text-white">Support</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="/support/help" className="text-white hover:text-slate-900">
                Help Center
              </Link>
              <Link href="/support/contact" className="text-white hover:text-slate-900">
                Contact Us
              </Link>
              <Link href="/support/status" className="text-white hover:text-slate-900">
                Status
              </Link>
              <Link href="/support/faq" className="text-white hover:text-slate-900">
                FAQ
              </Link>
            </div>
          </div>
        </div>

        
        <div className="mt-8 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="https://facebook.com" className="text-white hover:text-slate-900">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="text-white hover:text-slate-900">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://instagram.com" className="text-white hover:text-slate-900">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="text-white hover:text-slate-900">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://github.com" className="text-white hover:text-slate-900">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
            <div className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} CryptoNest. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
