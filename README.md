# Semantic Release POC

# https://github.com/semantic-release/semantic-release/blob/1405b94296059c0c6878fb8b626e2c5da9317632/docs/recipes/pre-releases.md
- Prod bug fix
- New feature dev
- 
branches: ['+([0-9])?(.{+([0-9]),x}).x', 'master', 'next', 'next-major', {name: 'beta', prerelease: true}, {name: 'alpha', prerelease: true}]
plugins: ['@semantic-release/commit-analyzer', '@semantic-release/release-notes-generator']


# NEw huge BETA feature !!

```
stable
1.x.x
next
2.x.x


```
v1.0.0
v1.0.1
v1.1.0-beta.1
v2.0.0-beta.1
v2.0.0-beta.2
