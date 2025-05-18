#!/usr/bin/env node

/**
 * Amplify adapter for Nuxt 3 deployment
 * 
 * This script creates the required deploy-manifest.json file for AWS Amplify deployments
 * with Nuxt 3 applications set to SSG mode.
 */

const fs = require('fs');
const path = require('path');

const outputDir = path.join(process.cwd(), '.output/public');
const manifestPath = path.join(outputDir, 'deploy-manifest.json');

// Create simplified manifest file that strictly follows Amplify's requirements
// Based on AWS Amplify's documentation
const manifest = {
  version: 1,
  framework: {
    name: 'nuxtjs',
    version: '3.x'
  },
  routes: [
    {
      path: '/*',
      target: '/index.html',
      status: '200'
    }
  ]
};

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  console.error('Error: .output/public directory does not exist. Make sure to run nuxt generate first.');
  process.exit(1);
}

// Write the manifest file
try {
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`✅ Successfully created deploy-manifest.json at ${manifestPath}`);
} catch (error) {
  console.error('Error creating deploy-manifest.json:', error);
  process.exit(1);
}