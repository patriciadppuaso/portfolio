function Footer(){
    return(
        <footer className="w-full py-12 flex flex-col items-center justify-center gap-6 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#111111] transition-colors duration-300">
          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-mono text-slate-500 dark:text-white/40 tracking-widest uppercase">
            <a
              href="#"
              className="hover:text-cyan-600 dark:hover:text-[#00F5FF] transition-colors"
            >
              System Status
            </a>
            <a
              href="#"
              className="hover:text-cyan-600 dark:hover:text-[#00F5FF] transition-colors"
            >
              API Docs
            </a>
            <a
              href="#"
              className="hover:text-cyan-600 dark:hover:text-[#00F5FF] transition-colors"
            >
              Privacy
            </a>
          </div>
          <p className="text-[10px] font-mono text-slate-400 dark:text-white/20 tracking-widest uppercase">
            © {new Date().getFullYear()} BUILT WITH PRECISION
          </p>
        </footer>
    )
}

export default Footer;