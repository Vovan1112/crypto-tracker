import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/services/**/*.{js,ts,jsx,tsx,mdx}',


  ],
  theme: {
    extend: {
      animation: {
        'fly-out': 'fly-out 0.5s ease-out forwards',
      },
      keyframes: {
        'fly-out': {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        custom: {
          main: '#020415'
        },
      },
      
    },
  },
  plugins: [],
}
export default config
