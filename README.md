# Portfolio — Full-stack Web Developer

Персональный сайт-портфолио Full-stack Web Developer.

Сайт содержит информацию обо мне, навыках, опыте работы и выполненных проектах, а также контактные данные и ссылки на социальные сети.

## 🛠 Стек

* HTML5
* SCSS
* JavaScript
* Gulp
* BEM
* SVG Sprite
* BrowserSync
* Prettier

## 📁 Структура проекта

```text
portfolio/
├── src/
│   ├── html/
│   ├── scss/
│   ├── js/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── dist/
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── fonts/
│   └── *.html
│
├── gulpfile.js
├── package.json
└── README.md
```

## ⚙️ Gulp

Для автоматизации разработки используется **Gulp**.

Gulp отвечает за:

* компиляцию SCSS в CSS;
* подключение HTML-файлов с помощью `gulp-file-include`;
* копирование JavaScript;
* обработку изображений;
* оптимизацию SVG;
* создание SVG Sprite;
* конвертацию шрифтов `.ttf` в `.woff2`;
* автоматическое форматирование кода с помощью Prettier;
* запуск локального сервера;
* автоматическое обновление страницы при изменении файлов.

### Используемые Gulp-плагины

| Плагин              | Назначение                     |
| ------------------- | ------------------------------ |
| `gulp-file-include` | Подключение HTML-фрагментов    |
| `gulp-sass`         | Компиляция SCSS                |
| `gulp-ttf2woff2`    | Конвертация TTF → WOFF2        |
| `gulp-svgmin`       | Оптимизация SVG                |
| `gulp-svg-sprite`   | Создание SVG Sprite            |
| `gulp-prettier`     | Форматирование кода            |
| `browser-sync`      | Локальный сервер и live reload |
| `del`               | Очистка папки `dist`           |

## 📦 Установка

Клонировать репозиторий:

```bash
git clone https://github.com/miron29-web/portfolio.git
```

Перейти в директорию проекта:

```bash
cd portfolio
```

Установить зависимости:

```bash
npm install
```

## 🚀 Запуск

Для запуска проекта в режиме разработки:

```bash
npx gulp
```

Gulp:

1. очищает папку `dist`;
2. собирает проект;
3. запускает BrowserSync;
4. отслеживает изменения в исходных файлах;
5. автоматически обновляет страницу.

## 🏗 Сборка проекта

Для полной сборки проекта:

```bash
npx gulp build
```

После сборки готовые файлы находятся в:

```text
dist/
```

## 🎨 Форматирование кода

Для форматирования HTML, SCSS и JavaScript используется **Prettier**.

Запустить форматирование вручную:

```bash
npx gulp format
```

При сборке проекта форматирование выполняется автоматически перед компиляцией:

```text
clean
  ↓
format
  ↓
HTML / SCSS / JS / Images / SVG / Fonts
  ↓
dist/
```

## 🌐 Локальный сервер

Для разработки используется BrowserSync.

После запуска:

```bash
npx gulp
```

проект доступен по адресу:

```text
http://localhost:3000
```

При изменении HTML, SCSS или JavaScript BrowserSync автоматически обновляет страницу.

## 📱 Адаптивность

Сайт адаптирован под различные размеры экранов:

* Desktop
* Tablet
* Mobile

Для адаптивных размеров используется CSS `clamp()` и собственный SCSS-mixin `fluid()`.

## 📐 Архитектура CSS

Для именования классов используется методология **БЭМ (BEM)**.

Пример:

```html
<section class="hero">
    <div class="hero__inner">
        <h1 class="hero__title">Developer</h1>
    </div>
</section>
```