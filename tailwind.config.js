/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: 'var(--bg-dark)',
        soft: 'var(--bg-soft)',
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        kamyab: {
          background: '#121212', // main dark background
          primary: '#F5621F', // DULL_ORANGE
          secondary: '#B3B3B3', // used for secondary text
          border: '#494949', // for inputs, cards, etc.
          white: '#FFFFFF',
          black: '#000000',
          grey: {
            light: '#7E7E7E', // GREY
            dark: '#1F1F1F', // custom addition
            secondaryBackground: '#25252D',
          },
          dull: {
            white: '#E5E5E5',
            orange: '#F5621F',
            red: '#FF5050',
          },
          green: '#4EBA57',
          blue: {
            light: '#2c3e50',
            dark: '#09173e',
          },
          orange: {
            primary: '#e65c00',
            disabled: '#FFB877',
          },
          text: {
            primary: '#8b8c92',
            chat: '#D5D5D5',
          },
          chat: {
            inputBg: 'rgba(75, 75, 75, 0.1)',
            border: '#878787',
            secondaryBg: '#4B4B4B40',
          },
          drawer: {
            background: '#161616',
          },
          avatar: '#060606',
          lightGrey: '#141414',
          primaryBackground: '#2e1305',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        kamyab: 'linear-gradient(to bottom, #1F1F1F 30%, #121212 80%)',
        overflow:
          'linear-gradient(to bottom, rgba(255, 255, 255, 0.0) 0%, #121212 100%)',
		  secondary:
		  'linear-gradient(to bottom, #1F1F1F 30%, #121212 80%)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
