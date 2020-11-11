module.exports = {
    branches: ['stable', 'next', {name: 'develop', prerelease: "dev"}, {name: 'staging', prerelease: "rc"}],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        ['@semantic-release/npm', {
            "npmPublish": false,
        }],
        ["@semantic-release/git", {
            "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }]
    ]
}
