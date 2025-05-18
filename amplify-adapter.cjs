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

// Read redirects.json if it exists
let redirects = [];
const redirectsPath = path.join(process.cwd(), 'redirects.json');
if (fs.existsSync(redirectsPath)) {
  try {
    redirects = JSON.parse(fs.readFileSync(redirectsPath, 'utf8')).redirects || [];
  } catch (err) {
    console.warn('Warning: Could not parse redirects.json', err);
  }
}

// Read rewrites.json if it exists
let rewrites = [];
const rewritesPath = path.join(process.cwd(), 'rewrites.json');
if (fs.existsSync(rewritesPath)) {
  try {
    rewrites = JSON.parse(fs.readFileSync(rewritesPath, 'utf8')).rewrites || [];
  } catch (err) {
    console.warn('Warning: Could not parse rewrites.json', err);
  }
}

// Create properly formatted manifest file that Amplify requires
const manifest = {
  version: 1,
  appId: 'd3rifuij50lweh', // This is just a placeholder, Amplify will replace it
  framework: 'nuxtjs',
  buildpath: '.output/public',
  plugins: [],
  routes: [
    // Format redirects for Amplify
    ...redirects.map(({ source, destination, type }) => ({
      path: source,
      target: destination,
      status: type === 'permanent' ? '301' : '302',
      condition: ''
    })),
    // Format rewrites for Amplify
    ...rewrites.map(({ source, destination }) => ({
      path: source,
      target: destination,
      status: '200',
      condition: ''
    })),
    // Default fallback route
    {
      path: '/*',
      target: '/index.html',
      status: '200',
      condition: ''
    }
  ],
  providers: [
    {
      name: 'amplify',
      profile: 'production'
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