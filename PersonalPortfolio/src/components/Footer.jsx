import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'

// Custom GitHub icon to bypass missing lucide-react exports in some package builds
const GithubIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="w-full bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-10 px-6 mt-16 theme-transition">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand Sign-off */}
        <div className="text-center md:text-left">
          <Link 
            to="/" 
            className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            AS<span className="text-purple-600 dark:text-purple-400">.</span>Developer
          </Link>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 font-medium">
            Engineering high-performance applications and mathematical algorithms.
          </p>
        </div>

        {/* Center: Tech Stack Badges */}
        <div className="flex flex-wrap justify-center items-center gap-2">
          {['React', 'Tailwind CSS', 'Vite', 'Lucide'].map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-250 dark:bg-slate-900 border border-slate-350/10 dark:border-slate-800 text-slate-600 dark:text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Right Side: Social links & Copyright */}
        <div className="text-center md:text-right flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4">
            <a 
              href="https://github.com/AS-Developer-17" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-550 hover:text-slate-950 dark:text-slate-450 dark:hover:text-slate-100 transition-colors"
              aria-label="GitHub link"
            >
              <GithubIcon className="w-4.5 h-4.5" />
            </a>
            <a 
              href="mailto:AS.Developer1512@gmail.com" 
              className="text-slate-550 hover:text-slate-950 dark:text-slate-450 dark:hover:text-slate-100 transition-colors"
              aria-label="Email link"
            >
              <Mail className="w-4.5 h-4.5" />
            </a>
          </div>
          <p className="text-[11px] font-semibold text-slate-450 dark:text-slate-500">
            &copy; {new Date().getFullYear()} Aradhya Sharma. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
