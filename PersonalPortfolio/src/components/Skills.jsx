import { BrainCircuit, Code2 } from 'lucide-react'

export default function Skills() {
  const programmingBadges = [
    'HTML5', 'CSS3', 'JavaScript', 'React Native', 'React.js', 'Python', 'Node.js', 'Git / GitHub', 'AI Integrations'
  ]

  const mathBadges = [
    'Calculus', 'Applied Mathematics', 'Algorithm Generation', 'Real-world Modelling', 'Discrete Logic', 'Analytical Thinking'
  ]

  return (
    <section className="p-8 md:p-12 bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl glow-hover theme-transition">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 border-b border-slate-200 dark:border-slate-800 pb-4 text-left">
        Skills
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Programming Column */}
        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800/60 hover:border-purple-500/20 transition-all duration-300 flex flex-col justify-between">
          <div className="text-left mb-6">
            <div className="flex items-center gap-2.5 mb-4 text-purple-600 dark:text-purple-400">
              <Code2 className="w-6 h-6" />
              <h3 className="text-xl font-bold text-slate-850 dark:text-slate-250">
                Programming & Software Development
              </h3>
            </div>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              I am a dedicated software developer, focused on engineering high-quality applications and clean, performant systems. My technical proficiency covers core frontend and backend technologies, including HTML5, CSS3, JavaScript (ES6+), React Native, Node.js, Python, and Git. Leveraging hands-on experience in responsive web layouts and mobile application architectures, I actively design and build full-stack solutions. Currently, I am expanding my development scope by building custom AI-powered integrations and applications.
            </p>
          </div>

          <div className="text-left border-t border-slate-200/60 dark:border-slate-800/60 pt-4">
            <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {programmingBadges.map((tech) => (
                <span 
                  key={tech} 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Computational Column */}
        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800/60 hover:border-blue-500/20 transition-all duration-300 flex flex-col justify-between">
          <div className="text-left mb-6">
            <div className="flex items-center gap-2.5 mb-4 text-blue-600 dark:text-blue-400">
              <BrainCircuit className="w-6 h-6" />
              <h3 className="text-xl font-bold text-slate-850 dark:text-slate-250">
                Computational & Applied Mathematics
              </h3>
            </div>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              Outside of software development, I dedicate my focus to advanced computational mathematics and algorithmic thinking. I specialize in solving calculus problems, analytical functions, and applied mathematics designed for real-world modeling. I enjoy reverse-engineering real-world scenarios and physical systems into algorithmic logic, breaking down everyday complex environments into mathematical rules, analytical equations, and structured logic scripts.
            </p>
          </div>

          <div className="text-left border-t border-slate-200/60 dark:border-slate-800/60 pt-4">
            <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
              Mathematical Core
            </h4>
            <div className="flex flex-wrap gap-2">
              {mathBadges.map((math) => (
                <span 
                  key={math} 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {math}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
