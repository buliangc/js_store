# webassembly 和 JavaScript

WebAssembly 是万维网联盟（W3C）的标准，是一种用于网络和其他地方的可执行程序的可移植二进制代码格式
将高级语言转换为.wasm，常见的是将 C/C++ 代码或者是 Rust 代码转为 wasm 文件
WebAssembly 最初是作为“浏览器中的 JavaScript 替代品”。其想法是在浏览器中安全地运行编译自 C/C++ 或 Rust 等语言的高性能应用程序。在浏览器中，WebAssembly 和 JavaScript 并列运行。
Wasm 现在是云原生应用程序的通用 runtime。与类似 Docker 的应用程序容器相比，WebAssembly runtime 以更低的资源消耗实现更高的性能。云中 WebAssembly 的常见用例包括以下内容

主要用于物联网中，但是由于 rust 编译成 webassembly 后，无法操作 IO 口，所以最后就放弃了这条路。
测试了使用 Rust 和 wasmedge

Yomo + Wasmedge
WasmEdge 是一个领先的云原生 WebAssembly runtime
未来 10 年，密集型计算和 3D 场景渲染的应用会大大增加，如何让密集型计算算得快就成为了一个难点

WasmEdge 提供了一个 wasmedgec 实用程序来将 wasm 文件编译为原生的 so 共享库。你可以使用 wasmedge 来运行 so 文件而不是 wasm 文件以获得更快的性能。

WasmEdge-go Extensions

- Tensorflow
- Tensorfloe-Lite
- Image
