import { ExternalLink, Paintbrush, BookOpen, GraduationCap, Gamepad2, FileText } from 'lucide-react'

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

export default function Projects() {
  const projectList = [
    {
      title: 'AS Dark Theme',
      description: 'A visually striking, high-contrast Visual Studio Code editor theme designed to reduce eye strain and provide vibrant syntax highlighting.',
      tag: 'VS Code Extension',
      link: 'https://marketplace.visualstudio.com/items?itemName=ASDeveloper.as-dark-theme',
      type: 'marketplace',
      icon: <Paintbrush className="w-6 h-6 text-pink-500" />
    },
    {
      title: 'Eduhub',
      description: 'A highly functional and responsive analytics dashboard designed for serious JEE Advanced candidates to monitor their study schedule and syllabus completion.',
      tag: 'React Web App',
      link: 'https://github.com/AS-Developer-17/EduHub',
      type: 'github',
      icon: <GraduationCap className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'JEE Advanced Test Series',
      description: 'A free open-source practice exam platform offering Mock Tests, analytical feedback, and solution keys to aid students preparing for JEE Advanced exams.',
      tag: 'Web Platform',
      link: 'https://github.com/AS-Developer-17/JEE-Advanced-Test-Series',
      type: 'github',
      icon: <BookOpen className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Crushed IO',
      description: 'An interactive, fast-paced web arcade game challenging players to navigate descending platforms. Dodge obstacles and try not to get crushed!',
      tag: 'HTML5 Arcade Game',
      link: 'https://as-developer15.github.io/crushed-io/',
      type: 'live',
      icon: <Gamepad2 className="w-6 h-6 text-green-500" />
    },
    {
      title: 'TextEditor',
      description: 'A lightweight and modular note-taking desktop utility application built using Python and the Tkinter library GUI framework.',
      tag: 'Python Desktop App',
      link: 'https://github.com/AS-Developer15/TextEditor',
      type: 'github',
      icon: <FileText className="w-6 h-6 text-cyan-500" />
    }
  ]

  return (
    <section className="p-8 md:p-12 bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl glow-hover theme-transition">
      <div className="text-left mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          Recent Projects
        </h2>
        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium">
          A showcase of my recent work, spanning custom extensions, educational dashboards, exam preparation tools, and interactive applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project, idx) => (
          <div 
            key={idx}
            className="flex flex-col justify-between p-6 bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/50 rounded-2xl glow-hover hover:border-purple-500/20 hover:scale-[1.02] transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200/20 dark:border-slate-850 shadow-sm">
                  {project.icon}
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full">
                  {project.tag}
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-800 dark:text-slate-200 mb-2 text-left">
                {project.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 mb-6 text-left">
                {project.description}
              </p>
            </div>

            <div className="border-t border-slate-200/40 dark:border-slate-850 pt-4 flex justify-end">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors cursor-pointer"
              >
                {project.type === 'github' ? (
                  <>
                    <GithubIcon className="w-4 h-4" /> View Repository
                  </>
                ) : project.type === 'marketplace' ? (
                  <>
                    <ExternalLink className="w-4 h-4" /> Marketplace Link
                  </>
                ) : (
                  <>
                    <ExternalLink className="w-4 h-4" /> Play Game Live
                  </>
                )}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
