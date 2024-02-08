import { useEffect, useState } from "react";
import { Progress } from "../ui/progress";
import { AnimatePresence, motion } from "framer-motion";

interface IPageLoading {
  isLoading: boolean;
}

export const PageLoading = (props: IPageLoading) => {
  const minimalDuration = 1000;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const increaseProgress = () => {
      setProgress(
        (prevProgress) =>
          prevProgress + (prevProgress === 90 && props.isLoading ? 0 : 10), // waits to loading end to finish the progress
      );
    };

    const interval = setInterval(increaseProgress, minimalDuration);

    return () => {
      setProgress(100);
      clearInterval(interval);
    };
  }, [minimalDuration, props.isLoading]);

  return (
    <>
      <AnimatePresence>
        {props.isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="align-center flex h-screen w-full flex-col justify-center"
          >
            <h1 className="text-background text-midnight mb-1 text-center text-3xl font-bold dark:text-white">
              NoteKeeper
            </h1>
            <Progress value={progress} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
