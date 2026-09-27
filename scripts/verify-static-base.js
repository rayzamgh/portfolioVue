const fs = require('fs')
const path = require('path')

const expectedBase = process.argv[2]
if (!expectedBase || !expectedBase.startsWith('/') || !expectedBase.endsWith('/')) {
  throw new Error('Usage: node scripts/verify-static-base.js /expected-base/')
}

const dist = path.join(__dirname, '..', 'dist')
const html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const actualBase = html.match(/<base href="([^"]+)"/)?.[1]

if (actualBase !== expectedBase) {
  throw new Error(`Expected base ${expectedBase}, found ${actualBase || 'none'}`)
}

const scripts = [...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)]
  .map((match) => match[1])

if (scripts.length === 0) {
  throw new Error('No JavaScript files found in dist/index.html')
}

for (const url of scripts) {
  if (!url.startsWith(expectedBase)) {
    throw new Error(`Script ${url} does not use base ${expectedBase}`)
  }

  const relativePath = url.slice(expectedBase.length)
  if (!fs.existsSync(path.join(dist, relativePath))) {
    throw new Error(`Script ${url} is missing from dist`)
  }
}

console.log(`Verified ${scripts.length} scripts with base ${expectedBase}`)
