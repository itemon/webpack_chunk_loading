webpackJsonp([1],{

/***/ "NHnr":
/***/ (function(module, exports, __webpack_require__) {

/*
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
*/

/*
console.log('really starting webpack dev server')

let createElement = require('virtual-dom/create-element')
let patch = require('virtual-dom/patch')
let diff = require('virtual-dom/diff')
const h = require('virtual-dom/h')

const main = () => {
  // 1 build dom tree
  let rootA = h('div', {
    key: 'root-el-2'
  }, ['world'])

  let root1 = h('div.v-child', {
    key: 'root-el-1'
  }, ['under the child'])

  let rootVNode = h('div#root.v-root',['hello', rootA, root1])

  let rootNode = createElement(rootVNode)

  document.querySelector('#app').appendChild(rootNode).addEventListener('click', () => {
    triggerDiff({
      rootVNode,
      rootNode
    })
  }, false)
}

const triggerDiff = ({rootVNode, rootNode}) => {
  let root1 = h('div.v-child', {
    key: 'root-el-1'
  }, ['under the child'])
  let root2 = h('div.v-child-2', {
    key: 'root-el-2'
  }, ['v child 2'])
  let newRootVNode = h('div#root.v-root-new', ['shimy', root1, root2])
  let p = diff(rootVNode, newRootVNode)
  console.dir(p)
  patch(rootNode, p)
}

main()
*/

__webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "70PR")).then(function (e) {
  console.log('done');
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.95461bf17e0a4a3434f0.js.map