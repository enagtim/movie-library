# movie-library 🎬

Movie-library — это React-приложение для поиска и добавления фильмов в избранное. Приложение использует Redux Toolkit для управления состоянием, а данные о фильмах поступают из внешнего API Кинопоиск.

## 🚀 Функции

- **Поиск фильмов**: позволяет находить фильмы по названию и просматривать их детали.
- **Добавление в избранное**: пользователи могут добавлять фильмы в избранное для удобного доступа позже.
- **Управление профилем**: хранение состояния входа пользователя и избранных фильмов, профиль хранится в local storage.
- **Сохранение состояния**: избранные фильмы сохраняются в Local Storage, чтобы восстанавливать их при перезагрузке страницы.

## 🛠️ Установка и запуск

1. **Клонировать репозиторий**:
   ```bash
   git clone https://git@github.com:enagtim/movie-library.git
   cd movie-library
2. **Установка зависимостей**
    ```bach
    npm install
3. **Запуск сервера**
    ```bach
    npm run dev
4. **Создание build**
    ```bach
    npm run build
5. **Запуск сервер-продакшен**
    ```bach
    npm run preview
6. **Структура проекта**

```plaintext
movie-library/
├── public/
├── src/
│   ├── app/
│   │   ├── index.css
│   │   ├── main.tsx
│   ├── helpers/
│   │   ├── RequireAuth.tsx
│   ├── pages/
│   │   ├── Error/
│   │   │   ├── ErrorPage.module.css
│   │   │   ├── ErrorPage.tsx
│   │   ├── Favorites/
│   │   │   ├── Favorites.module.css
│   │   │   ├── Favorites.tsx
│   │   ├── Login/
│   │   │   ├── Login.module.css
│   │   │   ├── Login.tsx
│   │   ├── Movie/
│   │   │   ├── Movie.module.css
│   │   │   ├── Movie.props.ts
│   │   │   ├── Movie.tsx
│   │   ├── SearchFilm/
│   │   │   ├── SearchFilm.module.css
│   │   │   ├── SearchFilm.tsx
│   ├── shared/
│   │   ├── ui/
│   │   │   ├── Button
│   │   │   ├── CardFilm
│   │   │   ├── CardList
│   │   │   ├── Header
│   │   │   ├── Input
│   │   │   ├── Navigation
│   │   │   ├── ReviewCard    
│   ├── store/
│   │   ├── favorite.slice.ts
│   │   ├── user.slice.ts
│   │   ├── store.ts
│   ├── widget/
│   │   ├── HeaderMenu.module.css
│   │   ├── HeaderMenu.tsx
├── .gitignore
├── eslint.config.js
├── README.md
├── package-lock.json
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── types.d.ts
└── vite.config.ts