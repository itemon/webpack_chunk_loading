# webpack 3.x 模块和chunk的加载流程

## manifest
```webpack```的引导程序，主要是chunk和module的加载流程代码的定义，以及在闭包内部持有的全局的module集合，已经下载的chunk集合，已经安装的模块集合

* 持有全部的模块集合，包括chunk中追加的模块
```javascript
function (modules) {
  // ...
}
```

* 持有已经下载的chunk集合
```javascript
var installedChunks = {
}
```

* 持有已经安装的模块集合
```javascript
var installedModules = {};
```

## chunk和module

### chunk
```webpack```拆分开的独立文件都叫chunk，包括CommonChunkPlugin插件拆分的独立包，以及```import```异步加载函数调用产生的异步包。
```chunk```通过```webpackJsonp```函数调用注册到webpack内部。调用```webpackJsonp```向已经安装的chunk集合中注册，注册完成写入标记到```installedChunks```.
chunk是一个有序命名的数组，chunk中调用```webpackJsonp```注册chunk的索引值和chunk文件自身的命名索引匹配（默认情况下）

### module
module主要依附于chunk存在，同时部分模块可能作为预注册模块直接打到manifest文件中。module有模块md5标记名和工厂方法。


### 引导module
在主chunk中，调用注册```webpackJsonp```函数注册主chunk时，会传入第三个参数，用于指定立即执行的module列表，一般程序的主执行入口在这里启动。

### 异步module
异步module被拆分为独立chunk存在，import调用被转化为```___webpack_require___.e```异步javascript文件载入调用，调用后，异步chunk是一个处于pending状态的Promise。
一旦异步chunk载入成功，被加载的异步chunk中的```webpackJsonp```在注册异步chunk时，检测chunk自身处于pending状态，会执行Promise的resolve，解除pending状态，同时调用者代码中的
等待状态被解除，代码继续执行。
