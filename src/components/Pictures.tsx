import * as motion from "motion/react-client";
import type { Variants } from "motion/react";


export default function ScrollTriggered() {
  return (
    <div style={container}>
      <div style={scrollContainer}>
        {food.map(([emoji, hueA, hueB], i) => (
          <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
        ))}
      </div>
    </div>
  );
}

interface CardProps {
  emoji: string;
  hueA: number;
  hueB: number;
  i: number;
}

function Card({ emoji, hueA, hueB, i }: CardProps) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      exit="offscreen"
      viewport={{ amount: 0.6, once: false }}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={cardVariants} className="card">
        {emoji}
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: { y: 100, rotate: 0, opacity: 0 },
  onscreen: {
    y: 0,
    rotate: -8,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.6 },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

const container: React.CSSProperties = {
  margin: "50px auto",
  maxWidth: "100%",
  overflow: "hidden",
};

const scrollContainer: React.CSSProperties = {
  display: "flex",
  gap: "20px",
  overflowX: "auto",
  scrollSnapType: "x mandatory",
  scrollBehavior: "smooth",
  padding: "20px",
};

const cardContainer: React.CSSProperties = {
  scrollSnapAlign: "center",
  flex: "0 0 auto",
  position: "relative",
  width: 180,
  height: 240,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 200 C 0 190 8 182 18 180 L 160 140 C 170 138 180 148 180 158 L 180 230 C 180 240 172 250 160 250 L 20 250 C 8 250 0 242 0 230 Z")`,
};

const card: React.CSSProperties = {
  fontSize: 90,
  width: 160,
  height: 200,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 16,
  background: "#f5f5f5",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.1), 0 0 4px hsl(0deg 0% 0% / 0.1), 0 0 8px hsl(0deg 0% 0% / 0.1)",
  transformOrigin: "10% 60%",
};

const food: [string, number, number][] = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];


// import * as motion from "motion/react-client"
// import type { Variants } from "motion/react"

// export default function ScrollTriggered() {
//     return (
//         <div style={container}>
//             {food.map(([emoji, hueA, hueB], i) => (
//                 <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
//             ))}
//         </div>
//     )
// }

// interface CardProps {
//     emoji: string
//     hueA: number
//     hueB: number
//     i: number
// }

// function Card({ emoji, hueA, hueB, i }: CardProps) {
//     const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

//     return (
//         <motion.div
//             className={`card-container-${i}`}
//             style={cardContainer}
//             initial="offscreen"
//             whileInView="onscreen"
//             viewport={{ amount: 0.8 }}
//         >
//             <div style={{ ...splash, background }} />
//             <motion.div style={card} variants={cardVariants} className="card">
//                 {emoji}
//             </motion.div>
//         </motion.div>
//     )
// }

// const cardVariants: Variants = {
//     offscreen: {
//         y: 300,
//     },
//     onscreen: {
//         y: 50,
//         rotate: -10,
//         transition: {
//             type: "spring",
//             bounce: 0.4,
//             duration: 0.8,
//         },
//     },
// }

// const hue = (h: number) => `hsl(${h}, 100%, 50%)`

// /**
//  * ==============   Styles   ================
//  */

// const container: React.CSSProperties = {
//     margin: "100px auto",
//     maxWidth: 500,
//     paddingBottom: 100,
//     width: "100%",
// }

// const cardContainer: React.CSSProperties = {
//     overflow: "hidden",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     position: "relative",
//     paddingTop: 20,
//     marginBottom: -120,
// }

// const splash: React.CSSProperties = {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
// }

// const card: React.CSSProperties = {
//     fontSize: 164,
//     width: 300,
//     height: 430,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 20,
//     background: "#f5f5f5",
//     boxShadow:
//         "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
//     transformOrigin: "10% 60%",
// }

// /**
//  * ==============   Data   ================
//  */

// const food: [string, number, number][] = [
//     ["🍅", 340, 10],
//     ["🍊", 20, 40],
//     ["🍋", 60, 90],
//     ["🍐", 80, 120],
//     ["🍏", 100, 140],
//     ["🫐", 205, 245],
//     ["🍆", 260, 290],
//     ["🍇", 290, 320],
// ]
