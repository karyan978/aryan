/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core System Colors
        background: 'var(--color-background)', // gray-50
        foreground: 'var(--color-foreground)', // gray-800
        border: 'var(--color-border)', // gray-200
        input: 'var(--color-input)', // white
        ring: 'var(--color-ring)', // indigo-900
        
        // Card & Surface Colors
        card: {
          DEFAULT: 'var(--color-card)', // white
          foreground: 'var(--color-card-foreground)' // gray-800
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)' // gray-800
        },
        
        // Muted Colors
        muted: {
          DEFAULT: 'var(--color-muted)', // gray-100
          foreground: 'var(--color-muted-foreground)' // gray-500
        },
        
        // Brand Primary Colors
        primary: {
          DEFAULT: 'var(--color-primary)', // indigo-900
          foreground: 'var(--color-primary-foreground)' // white
        },
        
        // Brand Secondary Colors
        secondary: {
          DEFAULT: 'var(--color-secondary)', // orange-600
          foreground: 'var(--color-secondary-foreground)' // white
        },
        
        // Accent Colors
        accent: {
          DEFAULT: 'var(--color-accent)', // sky-300
          foreground: 'var(--color-accent-foreground)' // gray-800
        },
        
        // State Colors
        success: {
          DEFAULT: 'var(--color-success)', // green-500
          foreground: 'var(--color-success-foreground)' // white
        },
        
        warning: {
          DEFAULT: 'var(--color-warning)', // orange-500
          foreground: 'var(--color-warning-foreground)' // white
        },
        
        error: {
          DEFAULT: 'var(--color-error)', // red-500
          foreground: 'var(--color-error-foreground)' // white
        },
        
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-500
          foreground: 'var(--color-destructive-foreground)' // white
        },
        
        // Additional Brand Colors
        'trust-builder': {
          DEFAULT: 'var(--color-trust-builder)', // indigo-500
          foreground: 'var(--color-trust-builder-foreground)' // white
        },
        
        'conversion-accent': {
          DEFAULT: 'var(--color-conversion-accent)', // emerald-500
          foreground: 'var(--color-conversion-accent-foreground)' // white
        },
        
        'cta-primary': {
          DEFAULT: 'var(--color-cta-primary)', // red-600
          foreground: 'var(--color-cta-primary-foreground)' // white
        },
        
        // Text Hierarchy
        'text-primary': 'var(--color-text-primary)', // gray-900
        'text-secondary': 'var(--color-text-secondary)', // gray-500
        
        // Surface Variations
        surface: {
          DEFAULT: 'var(--color-surface)', // white
          foreground: 'var(--color-surface-foreground)' // gray-800
        }
      },
      fontFamily: {
        'headline': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'cta': ['Poppins', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
        'display': ['Poppins', 'sans-serif']
      },
      fontSize: {
        'responsive-xl': 'clamp(2rem, 5vw, 4rem)',
        'responsive-lg': 'clamp(1.5rem, 4vw, 2.5rem)',
        'responsive-md': 'clamp(1.125rem, 2.5vw, 1.5rem)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'brand': '8px',
      },
      boxShadow: {
        'brand': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'brand-lg': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'elevation': '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.06)',
        'hover': '0 20px 40px rgba(26, 35, 126, 0.15)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(220, 38, 38, 0.7)'
          },
          '50%': { 
            transform: 'scale(1.05)',
            boxShadow: '0 0 0 10px rgba(220, 38, 38, 0)'
          },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}