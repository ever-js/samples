#### This is how you can test this

##### This example is about creating a custom hander for ever-js.
##### Promise based HTTP request hander is created.

###### pub.init() is complusory in any handler. It used by the kernel to initialize the handler.

* Make a **HTTP** request as follows.
```http
GET /get-weather?url=http%3A%2F%2Fapi.openweathermap.org%2Fdata%2F2.5%2Fweather%3Fq%3DSri%2520Lanka HTTP/1.1
Host: localhost:8312
Cache-Control: no-cache
```