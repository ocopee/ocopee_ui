Chào mừng tới OcopJS!

Đây là hướng dẫn sử dụng.--todo

## Yêu cầu

Trước khi bắt đầu, hãy đảm bảo bạn có ký năng cơ bản về sử dụng và thiết lập môi
trường NodeJS, và phải có các công cụ sau:

- NodeJS (>= 10.x) --todo
- yarn hoặc npm --todo

```bash
$ node --version
v16.x
$ npm --version
6.9.0
$ yarn --version
1.22.x
```

## Cơ sở dữ liệu

OcopJS sử dụng cơ sở dữ liệu `MongoDB` hoặc `PostgreSQL`, vì vậy bạn cần cài đặt
`MongoDB` hoặc `PostgreSQL` trước khi bắt đầu.

- [MongoDB >= 4.x](https://www.mongodb.com/): MongoDB là một hệ thống NoSQL,
  hướng tới việc lưu trữ dữ liệu dưới dạng JSON.
- [PostgreSQL >= 10.x](https://www.postgresql.org/): PostgreSQL là một hệ thống
  quản lý cơ sở dữ liệu quan hệ mạnh mẽ, có thể chứa hàng trăm ngàn hàng tỷ dòng
  dữ liệu.

> Lưu ý: Hãy đảm bảo `connection string` hoạt động trước khi bắt đầu cài đặt
> OcopJS.

## Cài đặt OcopJS

Sử dụng `npm` hoặc `yarn` để cài đặt OcopJS.

```bash
npm i @ocopjs/ocop
# hoặc
yarn add @ocopjs/ocop
```
