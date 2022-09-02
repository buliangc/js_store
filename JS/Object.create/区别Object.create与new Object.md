Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
实现Object.create():
```javascript
function myCreate(proto,propertiesObject) {
    const obj = propertiesObject || {};
    obj.__proto__ = proto;
    obj.
    return obj;
}
```
```javascript
var obj1 = { name: "buliangc" };
var obj2 = Object.create(proto, propertiesObject); 第一个参数是创建的实例的原型，第二个参数是附加的属性
consolee.log(obj2)  // 输出{}空对象，obj2.__proto__指向obj1
```
new 操作符 创建一个实例。创建的实例对象的__proto__是指向 构造函数的原型Object.prototype