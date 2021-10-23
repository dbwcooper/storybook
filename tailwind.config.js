module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // 继承默认配置
    extend: {
      colors: {
        primary: {
          v1: '#0076ce',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
