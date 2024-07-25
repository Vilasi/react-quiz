/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'quiz-gradient': 'linear-gradient(180deg, #3e2a60 0%, #321061 100%)',
        'begin-quiz': 'linear-gradient(90deg, #e781fb 40%, #8e76fa 60%);',
        'quiz-buttons': 'linear-gradient(90deg, #8e76fa 40%, #805bf7 60%);',
      },
    },
  },
  plugins: [],
};
