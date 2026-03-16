const fs = require('fs');

// 1. Update tailwind.config.js
let tailwindConfig = fs.readFileSync('tailwind.config.js', 'utf8');

const colorsBlock = `colors: {
        'un-blue': '#1E3250',
        'un-blue-1': '#4C6B8B',
        'un-blue-2': '#699CC6',
        'un-blue-3': '#AECFE6',
        'un-purple': '#6E417A',
        'un-green': '#297D6D',
        'un-gold': '#CCB146',
        'un-red': '#EC3740',
        'un-gray': '#F8F9FA'
      }`;
      
const fontsBlock = `fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
        display: ['Flama', 'Roboto', 'sans-serif']
      }`;

// Regex replace colors block
tailwindConfig = tailwindConfig.replace(/colors:\s*\{[\s\S]*?\},/, colorsBlock + ',');
// Regex replace fontFamily block
tailwindConfig = tailwindConfig.replace(/fontFamily:\s*\{[\s\S]*?\},/, fontsBlock + ',');

fs.writeFileSync('tailwind.config.js', tailwindConfig);

// 2. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Replace Google Fonts links
indexHtml = indexHtml.replace(
  /<link[^>]*href="https:\/\/fonts\.googleapis\.com\/css2\?family=Inter[^>]*>/i,
  '<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Lora:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">'
);

// Replace Tailwind script config colors
indexHtml = indexHtml.replace(/colors:\s*\{[\s\S]*?'#F8F9FA',\s*\},/, colorsBlock + ',');
// Replace Tailwind script config fonts
indexHtml = indexHtml.replace(/fontFamily:\s*\{[\s\S]*?'serif'\],\s*\},/, fontsBlock + ',');

// Replace body font-family
indexHtml = indexHtml.replace(/font-family:\s*'Inter',\s*system-ui,\s*sans-serif;/g, "font-family: 'Roboto', system-ui, sans-serif;");

fs.writeFileSync('index.html', indexHtml);

console.log("Configs updated successfully.");
