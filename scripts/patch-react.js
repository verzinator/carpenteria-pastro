const fs = require('fs')
const path = require('path')

const baseDir = path.join(__dirname, '..', 'node_modules', 'next', 'dist', 'compiled', 'react', 'cjs')

const patch = `
// patch: useEffectEvent polyfill for Sanity compatibility
if (typeof exports.useEffectEvent === 'undefined') {
  exports.useEffectEvent = function useEffectEvent(fn) {
    var ref = exports.useRef(fn);
    exports.useLayoutEffect(function() { ref.current = fn; });
    return exports.useCallback(function() { return ref.current.apply(this, arguments); }, []);
  };
}
`

// Also clean up the broken patch in index.js
const indexPath = path.join(__dirname, '..', 'node_modules', 'next', 'dist', 'compiled', 'react', 'index.js')
let indexContent = fs.readFileSync(indexPath, 'utf8')
const patchMarker = '\n// patch: useEffectEvent polyfill'
if (indexContent.includes(patchMarker)) {
  indexContent = indexContent.slice(0, indexContent.indexOf(patchMarker))
  fs.writeFileSync(indexPath, indexContent)
  console.log('[patch-react] cleaned up index.js')
}

let patched = 0
for (const file of ['react.development.js', 'react.production.js']) {
  const filePath = path.join(baseDir, file)
  if (!fs.existsSync(filePath)) {
    console.log('[patch-react] not found, skipping:', file)
    continue
  }
  let content = fs.readFileSync(filePath, 'utf8')
  if (content.includes('useEffectEvent')) {
    console.log('[patch-react] already patched:', file)
    continue
  }
  fs.writeFileSync(filePath, content + patch)
  console.log('[patch-react] patched:', file)
  patched++
}

if (patched === 0) console.log('[patch-react] nothing to patch')
