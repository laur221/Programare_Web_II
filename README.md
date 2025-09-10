<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="150" alt="Nest Logo" /></a>
</p>

<h1 align="center">🚀 NestJS CRUD API</h1>

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/REST_API-009688?style=flat-square&logo=fastapi&logoColor=white" alt="REST API" />
  <img src="https://img.shields.io/badge/Programare_Web_II-4B32C3?style=flat-square" alt="Programare Web II" />
</p>

<p align="center">
  Un proiect demonstrativ pentru API-uri RESTful folosind NestJS, dezvoltat pentru cursul de Programare Web II.
</p>

---

## 📋 Descriere

Acest proiect prezintă o implementare completă a unui API RESTful construit cu NestJS și TypeScript. API-ul oferă operațiuni CRUD (Create, Read, Update, Delete) pentru entitatea:

- **Posts**: Gestiune simplă de postări cu titluri și conținut

Proiectul demonstrează concepte moderne de dezvoltare back-end, inclusiv:

- Arhitectură modulară cu NestJS
- Design bazat pe DTO (Data Transfer Objects)
- Validare prin decoratori
- Gestionarea excepțiilor
- Structură organizată în Repository Pattern
- Rutare RESTful

## 🏗️ Structură Proiect

```
src/
│   ├── app.controller.ts       # Controller principal
│   ├── app.module.ts           # Modulul principal
│   ├── app.service.ts          # Service principal
│   ├── main.ts                 # Punct de intrare
│   ├── modules/
│   │   └── posts/              # Modul Posts
│   │       ├── post.entity.ts  # Entitate Post
│   │       ├── posts.controller.ts
│   │       ├── posts.module.ts
│   │       ├── posts.repository.ts
│   │       ├── posts.service.ts
│   │       └── dto/
│   │           ├── create-post.dto.ts
│   │           ├── update-post-title.dto.ts
│   │           └── update-post.dto.ts
```

## 🌟 Caracteristici

- ✅ API RESTful complet pentru entitățile Posts și Students
- ✅ Endpoint-uri pentru operațiuni CRUD (Create, Read, Update, Delete)
- ✅ Actualizări parțiale de resurse (PATCH)
- ✅ Validare de date și tratarea erorilor
- ✅ Arhitectură modularizată pentru scalabilitate
- ✅ Hot-reloading în modul dezvoltare

## 🚦 Endpoint-uri API

### Posts

- `GET /posts` - Listează toate postările
- `GET /posts/:id` - Obține o postare după ID
- `POST /posts` - Creează o postare nouă
- `PUT /posts/:id` - Actualizează o postare existentă
- `PATCH /posts/:id` - Actualizează parțial o postare
- `PATCH /posts/:id/update-title` - Actualizează doar titlul postării
- `DELETE /posts/:id` - Șterge o postare

## 💻 Instalare

```bash
# Clonează repository-ul
git clone https://github.com/laur221/Programare_Web_II.git

# Navighează în directorul proiectului
cd Programare_Web_II/nestjs-app

# Instalează dependențele
npm install
```

## 🚀 Rulare

```bash
# Mod development (cu hot-reload)
npm run start:dev

# Mod producție
npm run start:prod
```

Aplicația va rula pe `http://localhost:2910`

## 🧪 Testare

```bash
# Teste unitare
npm run test

# Teste E2E
npm run test:e2e

# Acoperire cod (coverage)
npm run test:cov
```

## 📚 Model de date

### Post

```typescript
{
  id: number;
  title: string;
  content: string;
}
```

## 📝 Exemple de utilizare

### Listare toate postările

```bash
curl -X GET http://localhost:2910/posts
```

### Creare postare nouă

```bash
curl -X POST http://localhost:2910/posts \
  -H "Content-Type: application/json" \
  -d '{"title": "Prima postare", "content": "Acesta este conținutul primei postări."}'
```

### Actualizare titlu postare

```bash
curl -X PATCH http://localhost:2910/posts/1/update-title \
  -H "Content-Type: application/json" \
  -d '{"title": "Titlu actualizat"}'
```

## 🔗 Resurse utile

- [Documentație NestJS](https://docs.nestjs.com/)
- [Ghid TypeScript](https://www.typescriptlang.org/docs/)
- [REST API Best Practices](https://restfulapi.net/)
- [NestJS Swagger Integration](https://docs.nestjs.com/openapi/introduction)
- [Jest Testing Framework](https://jestjs.io/docs/getting-started)

## 📈 Dezvoltare viitoare

- Integrare cu baze de date (MongoDB, PostgreSQL)
- Autentificare și autorizare JWT
- Documentație Swagger automată
- Implementare cache pentru optimizarea performanței
- Containere Docker pentru deployment

## 📄 Licență

Acest proiect este licențiat sub termenii [MIT License](LICENSE).

---

**Dezvoltat pentru cursul de Programare Web II © 2025**
