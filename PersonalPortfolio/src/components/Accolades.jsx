import medalsImg from '../assets/Medals.jpg'
import { ExternalLink, Award, CheckCircle2 } from 'lucide-react'

export default function Accolades() {
  return (
    <section className="p-8 md:p-12 bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl glow-hover theme-transition">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 border-b border-slate-200 dark:border-slate-800 pb-4 text-left">
        Accolades
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Achievements Column */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          <div className="text-left">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-purple-500" /> My Achievements
            </h3>

            <div className="space-y-6">
              {/* Achievement 1 */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h4 className="text-base font-bold text-slate-800 dark:text-slate-200 leading-snug">
                    Pre Finalist of "Hackathon 24~2025 by SCERT Uttarakhand"
                  </h4>
                  <a
                    href="https://drive.google.com/file/d/1Zp7f4P-PJ1SV-wXvc935R7yNwKNT9aB0/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/40 dark:hover:bg-purple-900/60 text-purple-600 dark:text-purple-400 transition-colors cursor-pointer"
                    aria-label="View Hackathon certificate"
                  >
                    <ExternalLink className="w-4.5 h-4.5" />
                  </a>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Recognized for innovative problem-solving and software development skills in the state-level hackathon.
                </p>
              </div>

              {/* Achievement 2 */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/50 hover:border-blue-500/30 transition-all duration-300">
                <h4 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-2 leading-snug">
                  Zonal Ranker (3, 2, 6) in the National Cyber Olympiad (NCO)
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-2">
                  Achieved exceptional zonal rankings across consecutive years:
                </p>
                <div className="flex gap-2 flex-wrap text-xs font-semibold">
                  <span className="px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-350">
                    2022: Rank 3
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-350">
                    2023: Rank 2
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-350">
                    2024: Rank 6
                  </span>
                </div>
              </div>

              {/* Achievement 3 */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/50 hover:border-pink-500/30 transition-all duration-300">
                <h4 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-2 leading-snug">
                  Competitive Olympiads Recognition
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                  Participated and won awards, medals, and certifications at different levels in various competitive exams:
                </p>
                <ul className="grid grid-cols-3 gap-2">
                  {['SOF', 'Silverzone', 'Unified Council'].map((org, i) => (
                    <li 
                      key={i} 
                      className="flex items-center gap-1.5 text-xs font-bold text-slate-650 dark:text-slate-300 py-1.5 px-3 bg-white dark:bg-slate-905 border border-slate-250/20 rounded-xl"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> {org}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Media Column */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="relative group overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md">
            <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors duration-300 z-10" />
            <img
              src={medalsImg}
              alt="Olympiad Medals and Certification Trophy Display"
              className="w-full h-full object-cover max-h-[350px] lg:max-h-full group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-3 left-3 z-20 bg-slate-900/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg backdrop-blur-sm border border-slate-800">
              Awards and Honors Portfolio
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
