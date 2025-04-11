export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export const slideIn = (direction: "left" | "right" | "up" | "down" = "up", delay: number = 0) => {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  };

  return {
    hidden: { 
      ...directions[direction], 
      opacity: 0 
    },
    visible: { 
      x: 0, 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        delay
      }
    }
  };
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
