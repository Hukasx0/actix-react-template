# React + Rust project template
<div>
<a href="https://react.dev/">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="40px" />
</a>
<a href="https://www.typescriptlang.org/">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" width="40px" />
</a>
<a href="https://sass-lang.com/">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" width="40px" />
</a>
<a href="https://www.rust-lang.org/">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg" width="40px" />
</a>
<a href="https://actix.rs/">
  <img src="https://actix.rs/img/logo.png" width="40" height="40" alt="Actix framework logo">
</a>
</div>

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
watch for Rust changes:
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
