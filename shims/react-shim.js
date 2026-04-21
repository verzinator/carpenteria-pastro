'use strict'
const React = require('next/dist/compiled/react')

if (!React.useEffectEvent) {
  React.useEffectEvent = function useEffectEvent(fn) {
    const ref = React.useRef(fn)
    React.useLayoutEffect(function () { ref.current = fn })
    return React.useCallback(function () {
      return ref.current.apply(this, arguments)
    }, [])
  }
}

module.exports = React
