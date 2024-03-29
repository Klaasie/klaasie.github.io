const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './*.html',
        './_includes/*.html',
        './_layouts/*.html',
        './posts/*.html'
    ],
    safelist: [
        'dark'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            spacing: {
                '9/16': '56.25%',
            },
            lineHeight: {
                11: '2.75rem',
                12: '3rem',
                13: '3.25rem',
                14: '3.5rem',
            },
            fontFamily: {
                heading: ['Rubik', ...defaultTheme.fontFamily.sans],
                body: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: colors.teal,
                gray: colors.neutral,
                secondary: colors.orange
            },
            backgroundColor: theme => ({
                ...theme('colors'),
                primary: colors.teal,
            }),
            borderColor: theme => ({
                ...theme('colors'),
                primary: colors.teal
            }),
            textColor: theme => ({
                ...theme('colors'),
                primary: colors.teal
            }),
            maxWidth: {
                'half': '50%',
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.700'),
                        a: {
                            color: theme('colors.primary.700'),
                            '&:hover': {
                                color: theme('colors.primary.600'),
                            },
                            textDecoration: 'none',
                            code: { 
                                color: theme('colors.white'),
                                '&:hover': {
                                    color: theme('colors.primary.400'),
                                },
                            },
                        },
                        h1: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.gray.900'),
                        },
                        h2: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.gray.900'),
                        },
                        h3: {
                            fontWeight: '600',
                            color: theme('colors.gray.900'),
                        },
                        'h4,h5,h6': {
                            color: theme('colors.gray.900'),
                        },
                        code: {
                            color: theme('colors.pink.500'),
                            backgroundColor: theme('colors.gray.800'),
                            paddingLeft: '4px',
                            paddingRight: '4px',
                            paddingTop: '2px',
                            paddingBottom: '2px',
                            borderRadius: '0.25rem',
                        },
                        'code::before': {
                            content: '""'
                          },
                          'code::after': {
                            content: '""'
                        },
                        details: {
                            backgroundColor: theme('colors.gray.100'),
                            paddingLeft: '4px',
                            paddingRight: '4px',
                            paddingTop: '2px',
                            paddingBottom: '2px',
                            borderRadius: '0.25rem',
                        },
                        hr: { borderColor: theme('colors.gray.200') },
                        'ol li:before': {
                            fontWeight: '600',
                            color: theme('colors.gray.500'),
                        },
                        'ul li:before': {
                            backgroundColor: theme('colors.gray.500'),
                        },
                        strong: { color: theme('colors.gray.600') },
                        blockquote: {
                            color: theme('colors.gray.900'),
                            borderLeftColor: theme('colors.gray.200'),
                        },
                    },
                },
                dark: {
                    css: {
                        color: theme('colors.gray.300'),
                        a: {
                            color: theme('colors.secondary.400'),
                            '&:hover': {
                                color: theme('colors.secondary.500'),
                            },
                            textDecoration: 'none',
                            code: { 
                                color: theme('colors.white'),
                                '&:hover': {
                                    color: theme('colors.secondary.400'),
                                },
                            },
                        },
                        h1: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.gray.100'),
                        },
                        h2: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.gray.100'),
                        },
                        h3: {
                            fontWeight: '600',
                            color: theme('colors.gray.100'),
                        },
                        'h4,h5,h6': {
                            color: theme('colors.gray.100'),
                        },
                        code: {
                            backgroundColor: theme('colors.gray.800'),
                        },
                        details: {
                            backgroundColor: theme('colors.gray.800'),
                        },
                        hr: { borderColor: theme('colors.gray.700') },
                        'ol li:before': {
                            fontWeight: '600',
                            color: theme('colors.gray.400'),
                        },
                        'ul li:before': {
                            backgroundColor: theme('colors.gray.400'),
                        },
                        strong: { color: theme('colors.gray.100') },
                        thead: {
                            color: theme('colors.gray.100'),
                        },
                        tbody: {
                            tr: {
                                borderBottomColor: theme('colors.gray.700'),
                            },
                        },
                        blockquote: {
                            color: theme('colors.gray.100'),
                            borderLeftColor: theme('colors.gray.700'),
                        },
                    },
                },
            }),
        },
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ]
}