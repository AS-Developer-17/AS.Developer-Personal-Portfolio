import { Phone, Mail, Send } from 'lucide-react'

// Custom GitHub icon to bypass missing lucide-react exports in some package builds
const GithubIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
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

export default function Contact() {
  const contactOptions = [
    {
      label: 'Call Me',
      value: '+91 9870822759',
      href: 'tel:+919870822759',
      icon: <Phone className="w-5 h-5 text-emerald-500" />,
      actionText: 'Dial Number',
      bgColor: 'hover:border-emerald-500/30'
    },
    {
      label: 'Email Me',
      value: 'AS.Developer1512@gmail.com',
      href: 'mailto:AS.Developer1512@gmail.com',
      icon: <Mail className="w-5 h-5 text-indigo-500" />,
      actionText: 'Send Email',
      bgColor: 'hover:border-indigo-500/30'
    },
    {
      label: 'GitHub Profile',
      value: 'github.com/AS-Developer-17',
      href: 'https://github.com/AS-Developer-17',
      icon: <GithubIcon className="w-5 h-5 text-slate-800 dark:text-slate-200" />,
      actionText: 'Follow Developer',
      bgColor: 'hover:border-slate-500/30'
    }
  ]

  return (
    <section className="p-8 md:p-12 bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl glow-hover theme-transition">
      <div className="text-left mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          Contact Me
        </h2>
        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium">
          Let’s build something together. Get in touch via any of the platforms listed below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactOptions.map((option, idx) => (
          <a
            key={idx}
            href={option.href}
            target={option.href.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className={`flex flex-col items-center justify-between p-6 bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/50 rounded-2xl glow-hover transition-all duration-300 cursor-pointer ${option.bgColor}`}
          >
            <div className="flex flex-col items-center">
              <div className="p-3.5 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200/20 dark:border-slate-850 shadow-sm mb-4">
                {option.icon}
              </div>
              <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-200 mb-1">
                {option.label}
              </h3>
              <p className="text-xs text-slate-450 dark:text-slate-500 font-medium break-all text-center px-2">
                {option.value}
              </p>
            </div>

            <div className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-purple-600 dark:text-purple-400">
              {option.actionText} <Send className="w-3 h-3 ml-0.5" />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
