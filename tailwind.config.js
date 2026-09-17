/** Config do Tailwind v3 — extraída da config inline que a página usava com o Play CDN.
 *  Build: npm run build:css  (gera css/tailwind.css, self-hosted, sem CDN) */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'navy': '#0A1838',
        'navy-light': '#1A2950',
        'navy-darker': '#06122B',
        'orange': '#F08020',
        'orange-light': '#FFA85C',
        'orange-dark': '#D9651A',
        'cream': '#FFF7EE',
        'success': '#27AE60',
        'danger': '#E74C3C',
        'soft': '#F5F7FA',
      },
      fontFamily: {
        'display': ['Plus Jakarta Sans', 'sans-serif'],
        'body': ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
