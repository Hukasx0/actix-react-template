# React + Rust project template
A fullstack project template that can be compiled into a single binary. Template uses:
- Rust + Actix-web - backend
- Typescript + React (tsx) - frontend
- Scss - but you can also use regular Css
- Vite - build

## Usage

### Installation
```sh
git clone https://github.com/Hukasx0/actix-react-template
cd actix-react-template/
npm i
```
you also need Rust and Cargo tools, if you don't have them then install them from [here](https://www.rust-lang.org/learn/get-started)

### start project in watch mode

watch for React changes:
```sh
npm run dev
```
watch for Rust changes (React needs to be built first! ```npm run build```):
```sh
npm run dev-rs
```

## build project
build React and Rust code into single binary
```sh
npm run build-full
```
where is this binary after compilation?
```
backend/target/release
```

build only React project
```sh
npm run build
```