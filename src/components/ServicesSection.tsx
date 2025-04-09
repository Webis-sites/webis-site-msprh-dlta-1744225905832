'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

// Types for our services
interface Service {
  id: number;
  category: string;
  name: string;
  description: string;
  price: number;
  duration: number; // in minutes
  image: string;
}

// Service categories
type ServiceCategory = 'תספורות' | 'עיצוב שיער' | 'צבע' | 'טיפולים';

const ServicesSection: React.FC = () => {
  // All available services
  const services: Service[] = [
    {
      id: 1,
      category: 'תספורות',
      name: 'תספורת גברים',
      description: 'תספורת מקצועית לגברים כולל שטיפה ועיצוב',
      price: 80,
      duration: 30,
      image: '/images/haircut-men.jpg',
    },
    {
      id: 2,
      category: 'תספורות',
      name: 'תספורת נשים',
      description: 'תספורת מעוצבת לנשים כולל שטיפה וייבוש',
      price: 120,
      duration: 45,
      image: '/images/haircut-women.jpg',
    },
    {
      id: 3,
      category: 'תספורות',
      name: 'תספורת ילדים',
      description: 'תספורת מותאמת לילדים בסביבה נעימה וידידותית',
      price: 60,
      duration: 20,
      image: '/images/haircut-kids.jpg',
    },
    {
      id: 4,
      category: 'עיצוב שיער',
      name: 'פן מעוצב',
      description: 'עיצוב שיער מקצועי בעזרת מייבש שיער ומברשות',
      price: 90,
      duration: 40,
      image: '/images/blowdry.jpg',
    },
    {
      id: 5,
      category: 'עיצוב שיער',
      name: 'תסרוקת ערב',
      description: 'תסרוקת מיוחדת לאירועים ומסיבות',
      price: 200,
      duration: 60,
      image: '/images/evening-style.jpg',
    },
    {
      id: 6,
      category: 'צבע',
      name: 'צבע שיער מלא',
      description: 'צביעת שיער מלאה בצבע אחיד לפי בחירה',
      price: 180,
      duration: 90,
      image: '/images/hair-color.jpg',
    },
    {
      id: 7,
      category: 'צבע',
      name: 'הייליטס',
      description: 'הבהרת שיער חלקית ליצירת מראה טבעי ומעניין',
      price: 250,
      duration: 120,
      image: '/images/highlights.jpg',
    },
    {
      id: 8,
      category: 'צבע',
      name: 'בליאז׳',
      description: 'טכניקת צביעה מתקדמת ליצירת מעבר צבעים טבעי',
      price: 350,
      duration: 150,
      image: '/images/balayage.jpg',
    },
    {
      id: 9,
      category: 'טיפולים',
      name: 'טיפול קרטין',
      description: 'טיפול מחליק ומשקם לשיער מתולתל או פגום',
      price: 400,
      duration: 120,
      image: '/images/keratin.jpg',
    },
    {
      id: 10,
      category: 'טיפולים',
      name: 'מסכת שיער',
      description: 'טיפול הזנה אינטנסיבי לשיער יבש או פגום',
      price: 120,
      duration: 40,
      image: '/images/hair-mask.jpg',
    },
    {
      id: 11,
      category: 'טיפולים',
      name: 'טיפול אורגני',
      description: 'טיפול שיער טבעי עם חומרים אורגניים בלבד',
      price: 150,
      duration: 60,
      image: '/images/organic-treatment.jpg',
    },
    {
      id: 12,
      category: 'עיצוב שיער',
      name: 'החלקת שיער',
      description: 'החלקת שיער מקצועית לשיער חלק ומבריק',
      price: 300,
      duration: 120,
      image: '/images/straightening.jpg',
    },
  ];

  // Available categories
  const categories: ServiceCategory[] = ['תספורות', 'עיצוב שיער', 'צבע', 'טיפולים'];
  
  // State for active category
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'הכל'>('הכל');

  // Filter services based on active category
  const filteredServices = activeCategory === 'הכל' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      y: -5,
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen font-heebo" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary dark:text-primary">השירותים שלנו</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            במספרה דלתא אנו מציעים מגוון רחב של שירותי עיצוב שיער וטיפוח ברמה הגבוהה ביותר
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('הכל')}
            className={clsx(
              "px-6 py-2.5 rounded-full text-lg font-medium transition-all duration-300",
              "backdrop-blur-md border border-white/10",
              "neumorphic-button",
              activeCategory === 'הכל' 
                ? "bg-primary/80 text-white shadow-inner" 
                : "bg-white/20 text-gray-700 dark:text-gray-200 hover:bg-white/30"
            )}
          >
            הכל
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={clsx(
                "px-6 py-2.5 rounded-full text-lg font-medium transition-all duration-300",
                "backdrop-blur-md border border-white/10",
                "neumorphic-button",
                activeCategory === category 
                  ? "bg-primary/80 text-white shadow-inner" 
                  : "bg-white/20 text-gray-700 dark:text-gray-200 hover:bg-white/30"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              className="glassmorphism-card rounded-2xl overflow-hidden transition-all duration-300"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-primary/90 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                  {service.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary dark:text-primary mb-2">{service.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-secondary dark:text-primary">₪{service.price}</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{service.duration} דקות</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <motion.button 
            className="glassmorphism-button px-8 py-4 rounded-full text-lg font-medium bg-secondary text-white hover:bg-secondary/90 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            לקביעת תור חייגו 03-1234567
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;