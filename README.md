<!--
 * @Author: yu li
 * @Date: 2021-11-21 12:53:20
 * @LastEditors: yu li
 * @LastEditTime: 2021-12-11 23:47:44
 * @FilePath: /learn-ts/README.md
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
-->

# 争取做一个自律的人

```package
"ts-node": "^10.4.0",
"typescript": "^4.5.2"
```

```launch
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Current TS File",
      "type": "node",
      "request": "launch",
      "program": "${workspaceRoot}/node_modules/ts-node/dist/bin.js",
      "args": [
        "${relativeFile}"
      ],
      "cwd": "${workspaceRoot}",
      "protocol": "inspector"
    }
  ]
}
```
