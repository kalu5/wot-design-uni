/*
 * @Author: weisheng
 * @Date: 2022-12-02 14:34:18
 * @LastEditTime: 2023-07-22 15:27:13
 * @LastEditors: weisheng
 * @Description: .d.ts移动到制品
 * @FilePath: \wot-design-uni\build\demoCopy.js
 * 记得注释
 */
const fs = require('fs')
const path = require('path')
const srcRoot = path.join(__dirname, '../dist/build/h5')
const targetSrcRoot = path.join(__dirname, '../docs/dist/demo')

function copyFolder(sourceDir, targetDir) {
  // 创建目标文件夹
  fs.mkdirSync(targetDir, { recursive: true })

  // 读取源文件夹中的文件和子文件夹列表
  const fileNames = fs.readdirSync(sourceDir)

  fileNames.forEach((fileName) => {
    const sourcePath = path.join(sourceDir, fileName)
    const targetPath = path.join(targetDir, fileName)

    // 判断文件是文件夹还是文件
    if (fs.statSync(sourcePath).isDirectory()) {
      // 如果是文件夹，则递归调用 copyFolder 函数
      copyFolder(sourcePath, targetPath)
    } else {
      // 如果是文件，则直接复制文件
      fs.copyFileSync(sourcePath, targetPath)
    }
  })
}

copyFolder(srcRoot, targetSrcRoot)
