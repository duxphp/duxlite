const developmentConfig = {
  origin: 'http://0.0.0.0:8080',
  devOpen: false,
  devToken: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9oaWdod2F5LnRlc3RcL2FkbWluXC9tZW51IiwiaWF0IjoxNjcwMjA4NjQ1LCJleHAiOjE2NzA5MzU5MTEsIm5iZiI6MTY3MDkyNTExMSwianRpIjoiZ0M5WWM3eG5lMUpiR0s3QiIsInN1YiI6MSwicHJ2IjoiYTNiZDIxOTZkYmMyYWQzNDEyMzljNmQ3MjE0ZGIwODNjNzVhNzM0NiJ9.IAfKWm9ox6XwLMmrvicGPm-VQF4KWnezTuhrRrPCHY8'
}

const productionConfig = {
  origin: ''
}

const config = import.meta.env.MODE === 'development' ? developmentConfig : productionConfig


/**
 * 请求配置
 */
export default config
