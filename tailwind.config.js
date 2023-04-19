/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      PoppinsRegular: ['PoppinsRegular'],
      PoppinsMedium: ['PoppinsMedium'],
      PoppinsSemibold: ['PoppinsSemibold'],
      PoppinsBold: ['PoppinsBold'],
    },
    maxWidth: {
      xs: '450px',
      xl: '1240px',
    },
    fontSize: {
      "sm-regular": ['14px', '150%'],
      "base-regular": ['16px', '135%'],
      "lg-regular": ['18px', '140%'],

      "sm-medium": ['14px', '135%'],
      "base-medium": ['16px', '135%'],
      "lg-medium": ['18px', '135%'],
      
      "lg-semibold": ['18px', '135%'],
      "lg-semibold": ['36px', '135%'],

      "base-bold": ['16px', '135%'],
      "2lg-bold": ['24px', '120%'],
      "4xl-bold": ['40px', '135%'],
      "5xl-bold": ['42px', '135%'],
      "6xl-bold": ['48px', '135%'],
      "7xl-bold": ['64px', '135%']
    },
    borderRadius: {
      5: "5px",
      10: "10px",
      15: "15px",
      20: "20px",
      25: "15px",
      30: "30px",
    },
    extend: {
      colors: {
        'primary-0': '#020104',
        'primary-10': '#041C2F',
        'primary-20': '#08385E',
        'primary-30': '#0B548E',
        'primary-40': '#0F70BD',
        'primary-50': '#148CEC',
        'primary-60': '#42A3F0',
        'primary-70': '#71BAF4',
        'primary-80': '#A1D1F7',
        'primary-90': '#D0E8FB',
        'primary-95': '#E7F3FD',
        'secodary-10': '#220925',
        'secodary-20': '#47124E',
        'secodary-30': '#6C1C78',
        'secodary-40': '#9226A1',
        'secodary-50': '#B730CA',
        'secodary-60': '#C756D7',
        'secodary-70': '#D57FE1',
        'secodary-80': '#E3AAEB',
        'secodary-90': '#F0D2F4',
        'secodary-95': '#F7E6F9',
        'tonal-50': '#F9FAFB',
        'tonal-100': '#F1F5F9',
        'tonal-200': '#E5E7EB',
        'tonal-300': '#D1D5DB',
        'tonal-400': '#9CA3AF',
        'tonal-500': '#6B7280',
        'tonal-600': '#4B5563',
        'tonal-700': '#374151',
        'tonal-800': '#1F2937',
        'tonal-900': '#111827',
      },
      boxShadow: {
        'shadow-1': '0px 3.22197px 20.5411px rgba(94, 95, 96, 0.14)',
        'shadow-2': '0px 3.4508px 22px rgba(148, 148, 148, 0.14)',
      }
    },
  },
  plugins: [],
};
