/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	
	container:{
		center:true,
		padding:'15px',
	}, 
	screens:{
		xl:"1200px",
		sm:"640px",
		md:"768px",
		lg:"960px",
	},
	fontFamily:{
		primary:"var(--font-jetbrainsMono)",
	},
  	extend: {
  		colors: {
  			primary: '#1c1c22',
  			accent: {
  				DEFAULT: '#00ff99',
  				foreground: '#00e187', 
			}	
		},

  	}
  },
  plugins: [require("tailwindcss-animate")],
};
