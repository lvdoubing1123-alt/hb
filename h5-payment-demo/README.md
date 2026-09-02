# H5 Payment Demo

这是一个可以直接部署到 GitHub Pages 的 H5 收银台 UI 演示。

## 文件

- `index.html`：页面结构
- `style.css`：手机端响应式样式
- `script.js`：支付方式选择、金额参数和模拟支付

## 本地测试

直接双击 `index.html` 即可。

也可以使用本地服务器：

```bash
python -m http.server 8080
```

然后访问 `http://localhost:8080`

## 修改金额

支持 URL 参数：

`index.html?amount=34.20`

例如：

`index.html?amount=99.99`

## 部署 GitHub Pages

1. 新建 GitHub repository。
2. 上传这三个文件和 README。
3. Settings → Pages。
4. Source 选择 GitHub Actions 或 Deploy from a branch。
5. 如果选择 branch，选择 `main` / root。
6. 保存后等待 GitHub Pages 发布。

## 重要

这是**模拟支付页面**，不会真实扣款，也没有连接支付宝、ABA PAY、Pi Pay、eMoney 等支付接口。

要实现真实收款，需要对应支付服务商提供的正规商户/API权限，并在后端完成订单创建、签名校验、支付回调和订单状态更新。
