const { execSync } = require('child_process');

try {
  // Build the Next.js app
  execSync('next build', { stdio: 'inherit' });

  // Export the app to static HTML
  execSync('next export', { stdio: 'inherit' });

  console.log('Successfully exported the Next.js app to static HTML!');
} catch (error) {
  console.error('Failed to export the Next.js app:', error);
  process.exit(1);
}
