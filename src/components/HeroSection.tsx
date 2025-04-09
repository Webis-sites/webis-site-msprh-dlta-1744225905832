"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <section 
      className={clsx(
        "relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center text-right",
        className
      )}
      dir="rtl"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/salon-background.jpg"
          alt="מספרה דלתא - תמונת רקע"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 to-secondary/40 backdrop-blur-sm"></div>
      </div>

      {/* Neumorphic/Glassmorphic Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20 shadow-neumorphic max-w-3xl mr-auto ml-0 md:mr-10"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-display"
          >
            מספרה <span className="text-primary">מוביל</span> בישראל
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/90 mb-8 font-body"
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <button 
              className="
                px-8 py-4 text-lg font-medium rounded-full
                bg-primary text-secondary
                shadow-neumorphic-button
                hover:shadow-neumorphic-button-hover active:shadow-neumorphic-button-active
                transition-all duration-300
                relative overflow-hidden group
              "
            >
              {/* Glassmorphic hover effect */}
              <span className="absolute inset-0 w-full h-full bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              <span className="relative z-10">קבע תור עכשיו</span>
            </button>
          </motion.div>
          
          {/* Decorative element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-primary/20 backdrop-blur-lg border border-white/10 hidden md:block"
          />
        </motion.div>
      </div>
    </section>
  );
}