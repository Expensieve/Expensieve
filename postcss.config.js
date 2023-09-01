// require('tailwindcss');
// require('autoprefixer');

// module.exports = {
//   plugins: [
//     require('tailwindcss')('./tailwindcss.config.js'),
//     require('autoprefixer')
//   ]
// }

const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
    ],
};

// export const plugins = [tailwindcss('./tailwind.config.js'), autoprefixer];