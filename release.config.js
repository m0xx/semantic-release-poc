module.exports = {
  branches: ['+([0-9])?(.{+([0-9]),x}).x', 'master', 'next', 'next-major', {name: 'beta', prerelease: true}, {name: 'alpha', prerelease: true}],
  plugins: ['@semantic-release/commit-analyzer', '@semantic-release/release-notes-generator']
}
