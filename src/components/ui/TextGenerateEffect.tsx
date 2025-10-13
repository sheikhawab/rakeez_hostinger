import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
}

export const TextGenerateEffect = ({
  words,
  className,
}: TextGenerateEffectProps) => {
  const wordsArray = words.split(" ");

  return (
    <div className={cn("", className)}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="inline-block"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: idx * 0.1,
            ease: "easeOut",
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </div>
  );
};
