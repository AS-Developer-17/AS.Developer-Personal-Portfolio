import pfpImg from '../assets/Welcome PFP.jpg'

export default function Welcome() {
  return (
    <section className="flex flex-col items-center justify-center text-center p-8 md:p-12 bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl glow-hover theme-transition">
      <div className="relative group mb-6">
        {/* Glow backdrop effect on profile image hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
        <img
          src={pfpImg}
          alt="Aradhya Sharma Profile"
          className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-slate-100 dark:border-slate-800 shadow-xl group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-2">
        <span className="shimmer-text">AS.Developer</span>
      </h1>
      
      <h2 className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
        Aradhya Sharma
      </h2>
      
      <p className="max-w-md text-base md:text-lg text-slate-500 dark:text-slate-400 font-medium">
        An Enthusiastic Techie
      </p>
    </section>
  )
}
