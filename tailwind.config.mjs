/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
        },
      },
      typography: (theme) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.slate[300]'),
            '--tw-prose-headings': theme('colors.slate[200]'),
            '--tw-prose-links': theme('colors.teal[400]'),
            '--tw-prose-bold': theme('colors.slate[200]'),
            '--tw-prose-code': theme('colors.teal[300]'),
            '--tw-prose-pre-bg': theme('colors.slate[800]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
