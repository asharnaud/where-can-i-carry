import mori from 'mori'

function morilog (cljThing) {
  console.log(mori.toJs(cljThing))
}

function uuid () {
  function s4 () {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4()
}

function booleanNot (x) {
  return !x
}

export {booleanNot, morilog, uuid}
