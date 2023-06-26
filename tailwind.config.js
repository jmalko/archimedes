module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.antlers.php',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  safelist: [
      {
        pattern: /grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12|third|third-invert|quarter|quarter-invert)/,
        variants: ['sm', 'md', 'lg', 'xl'],
      },
      {
        pattern: /py-(1|2|3|4|5|6|7|8|9|10|11|12|24)/,
      },
  ],
  theme: {
    extend: {
        gridTemplateColumns: {
            'third': '1fr 2fr',
            'third-invert': '2fr 1fr',
            'quarter': '1fr 3fr',
            'quarter-invert': '3fr 1fr',
        }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
