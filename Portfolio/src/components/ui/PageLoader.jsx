import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#461DA8]"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-medium tracking-[0.08em] text-white"
            >
              Vivek.
            </motion.div>

            <div className="mt-6 h-px w-32 overflow-hidden bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="h-full w-full bg-orange-300"
              />
            </div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30"
            >
              Software Engineer
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PageLoader;