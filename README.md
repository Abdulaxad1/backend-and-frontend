<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/255843e3-de62-49ba-9f8e-eecdc2770d05

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Backend tuzilmasi

So'rov yo'li: `route -> validation -> controller -> model -> db`

```
server/
  routes/        marshrutlar (index.js hammasini /api ga ulaydi)
  validations/   kiruvchi ma'lumotni tekshirish (400 xatolar)
  controllers/   biznes mantiq va javob shakllantirish
  models/        ma'lumotga murojaat (faqat model db.js bilan gaplashadi)
  middleware/    requireAuth / requireStaff / requireAdmin
  services/      sessiya boshqaruvi
  utils/         yagona javob formati (ok, created, notFound, handle)
  db.js          klinika ma'lumotlari ombori
  persistence.js Postgres'ga saqlash (DATABASE_URL bo'lsa)
```

Yangi modul qo'shish: `models/x.model.js`, `validations/x.validation.js`,
`controllers/x.controller.js`, `routes/x.routes.js` yarating va `routes/index.js` ga ulang.

Rollar: `admin` (hammasi), `staff` (xodim, /staff va /seed dan tashqari), `patient` (faqat /portal).
