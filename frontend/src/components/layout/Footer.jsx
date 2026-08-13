import { Link } from "react-router-dom";
import logo from "@/assets/Logo-Desktop.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-[#F9FAFB]">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-12">

        {/* Main Footer */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link  className="mb-4">
              <img
                src={logo}
                alt="LinguaLoop"
                className="h-9 w-auto"
              />
            </Link>

            <p className="max-w-sm text-center text-sm leading-relaxed text-gray-500 md:text-left">
              Master your target language through mindful writing
              and meaningful community exchange.
            </p>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
              Connect With Me
            </p>

            <div className="flex items-center gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/zobbygit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-md"
              >
                <GitHubIcon fontSize="small" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/zohaib-aslam-245a40253/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-md"
              >
                <LinkedInIcon fontSize="small" />
              </a>

              {/* GitHub Profile Link */}
              <a
                href="https://github.com/zobbygit"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-1.5 rounded-xl bg-gray-900 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-md"
              >
                GitHub
                <ArrowOutwardIcon className="!text-sm" />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 md:flex-row">
          <p className="text-xs text-gray-400">
            © 2026 LinguaLoop. All rights reserved.
          </p>

          <p className="text-xs text-gray-400">
            Built with ❤️ by{" "}
            <a
              href="https://github.com/zobbygit"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-600 transition hover:text-indigo-600"
            >
              Zohaib Aslam
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}