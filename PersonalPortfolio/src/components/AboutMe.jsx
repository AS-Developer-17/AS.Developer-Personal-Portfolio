import { Calendar, Award, School, MapPin, Globe, BookOpen, Cpu, Gamepad2 } from 'lucide-react'

export default function AboutMe() {
  const stats = [
    { label: 'Date of Birth', value: '15/05/2009', icon: <Calendar className="w-5 h-5 text-purple-500" /> },
    { label: 'Grade', value: '12th Grade', icon: <Award className="w-5 h-5 text-purple-500" /> },
    { label: 'School', value: 'The Heritage Senior Secondary School', icon: <School className="w-5 h-5 text-purple-500" /> },
    { label: 'State', value: 'Uttarakhand', icon: <MapPin className="w-5 h-5 text-purple-500" /> },
    { label: 'Nationality', value: 'Indian', icon: <Globe className="w-5 h-5 text-purple-500" /> }
  ]

  const hobbies = [
    {
      title: 'Playing Chess',
      description: 'Engaging in tactical chess matchups, which sharpens spatial reasoning, forward-planning capabilities, and complex decision-making strategies.',
      icon: <Gamepad2 className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Coding',
      description: 'Building modern user interfaces, automation scripts, and exploring full-stack engineering to design solutions that make an impact.',
      icon: <Cpu className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Learning How Things Work',
      description: 'Curious about mechanical systems, advanced physics concepts, and decoding systems inside algorithms to understand modern technologies.',
      icon: <BookOpen className="w-6 h-6 text-pink-500" />
    }
  ]

  return (
    <section className="p-8 md:p-12 bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl glow-hover theme-transition">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 border-b border-slate-200 dark:border-slate-800 pb-4 text-left">
        About Me
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Stats Grid */}
        <div className="lg:col-span-5 flex flex-col gap-4 w-full">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 text-left">
            Aradhya Sharma
          </h3>
          
          <div className="flex flex-col gap-3">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/50 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:scale-[1.01] transition-all duration-300"
              >
                <div className="p-2 bg-purple-100 dark:bg-purple-950/50 rounded-xl">
                  {stat.icon}
                </div>
                <div className="text-left">
                  <span className="block text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {stat.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Hobbies Section */}
        <div className="lg:col-span-7 flex flex-col gap-4 w-full">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 text-left">
            Hobbies
          </h3>
          
          <div className="flex flex-col gap-4">
            {hobbies.map((hobby, idx) => (
              <div 
                key={idx} 
                className="p-4 bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/50 rounded-2xl text-left hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  {hobby.icon}
                  <h4 className="text-base font-bold text-slate-850 dark:text-slate-200">
                    {hobby.title}
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
