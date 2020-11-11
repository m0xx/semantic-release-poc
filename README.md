# Semantic Release POC

# https://github.com/semantic-release/semantic-release/blob/1405b94296059c0c6878fb8b626e2c5da9317632/docs/recipes/pre-releases.md
- Prod bug fix
- New feature dev
- 
branches: ['+([0-9])?(.{+([0-9]),x}).x', 'master', 'next', 'next-major', {name: 'beta', prerelease: true}, {name: 'alpha', prerelease: true}]
plugins: ['@semantic-release/commit-analyzer', '@semantic-release/release-notes-generator']


# New Breaking change

- add note


# Features
- one
