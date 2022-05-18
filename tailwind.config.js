module.exports = {
	purge: {
		enabled: true,
		content: ["docs/*.html"],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
					main: ["'PT Sans'"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("daisyui")],
		daisyui: {
    themes: [
      {
        'mytheme': {
          'primary': '#802F26',
          'primary-focus': '#AA8066',
          'primary-content': '#ffffff',
          'secondary': '#CF4E4E',
          'secondary-focus': '#68593C',
          'secondary-content': '#ffffff',
          'accent': '#CC0000',
          'accent-focus': '#EFDBB2',
          'accent-content': '#31261D',
          'neutral': '#191919',
          'neutral-focus': '#31261D',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
  },
};

