/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        h1: {
                            color: 'var(--tw-prose-headings)',
                            fontWeight: '700',
                            fontSize: theme('fontSize.2xl')[0],
                            ...theme('fontSize.2xl')[1],
                            marginBottom: theme('spacing.2'),
                        },
                        h2: {
                            color: 'var(--tw-prose-headings)',
                            fontWeight: '600',
                            fontSize: theme('fontSize.lg')[0],
                            ...theme('fontSize.lg')[1],
                            marginTop: theme('spacing.16'),
                            marginBottom: theme('spacing.2'),
                        },
                        h3: {
                            color: 'var(--tw-prose-headings)',
                            fontSize: theme('fontSize.base')[0],
                            ...theme('fontSize.base')[1],
                            fontWeight: '600',
                            marginTop: theme('spacing.10'),
                            marginBottom: theme('spacing.2'),
                        },
                        a: {
                            color: theme('colors.teal.500'),
                            fontWeight: theme('fontWeight.semibold'),
                            textDecoration: 'underline',
                            textDecorationColor: theme('colors.teal.500 / 0.2'),
                            transitionProperty: 'color, text-decoration-color',
                            transitionDuration: theme('transitionDuration.150'),
                            transitionTimingFunction: theme('transitionTimingFunction.in-out'),
                        },
                        'a:hover': {
                            color: theme('colors.teal.600'),
                            textDecorationColor: theme('colors.teal.500')
                        },
                    }
                },
            }),
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio')
    ],
}
