/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e74c3c', // Vibrant coral red
        secondary: '#D6536D', // Warm Pink
        accent: '#FFA2B6', // Light Pink
        gold: '#EFB11D', // Gold/Yellow
        background: '#f0f0f5', // Soft light gray
        card: '#FFFFFF',
        textHeading: '#E43D12',
        textSubheading: '#D6536D',
        text: '#222222', // Deep neutral gray
        glass: 'rgba(235,233,225,0.85)',
        borderGlass: 'rgba(228,61,18,0.15)',
        cherry: '#b0415a', // Muted cherry / red-brown
        white: '#ffffff',
        button: '#e74c3c', // Primary button background
        buttonText: '#ffffff', // Primary button text
        outline: '#e74c3c', // Outline button border & text
        arrow: '#b0415a', // Arrow icon
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'ai-gradient': 'linear-gradient(135deg, #18181B 0%, #1F2937 50%, #00E0FF 100%)',
        'ai-gradient-light': 'linear-gradient(135deg, #F3F4F6 0%, #E0E7FF 50%, #8B5CF6 100%)',
      },
    },
  },
  plugins: [],
} 