# LinguaLoop

A collaborative language learning web app where learners improve their writing through crowd-sourced corrections and feedback from native and advanced speakers.


## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [User Flow](#user-flow)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Our Team](#our-team)

## Overview

LinguaLoop connects language learners with native and advanced speakers. Users write journal entries, short essays, sentences, in their target language, and the community provides inline corrections and commentary. Think of it as a peer-review system for language learning.

## Features

**Post in your target language** — submit writing for community review
**Community corrections** — native/advanced speakers annotate and correct text
**Skill-level tagging** — posts and users are tagged by proficiency level (Beginner, Intermediate, Advance, Native)
**Language based system** — content is organized by language pairs (e.g., ENG →SPA, JAP → ENG) for more relevant corrections.
**Prompts and Guidance** - daily or suggested prompts to help users start writing
**User profiles** — track languages spoken, corrections given, and posts made

## User Flow

1. User signs up and selects native + learning languages
2. User creates a post in their target language
3. Other users provide corrections and feedback
4. User reviews corrections and improves

## Tech Stack

| **Layer**    | **Technology**                       |
| ------------ | ------------------------------------ |
| **Frontend** | React + Vite                         |
| **Styling**  | Tailwind CSS, ShadCn                 |
| **Backend**  | Node.js + Express                    |
| **Database** | MongoDB                              |
| **Auth**     | JWT                                  |
| **Hosting**  | Netlify (frontend) + Render (backend) |

## Getting Started

#### 1. Clone the repo

```bash
git clone

https://github.com/your-org/lingualoop.git

cd lingualoop
```

#### 2. Install dependencies

**Backend**

```bash
cd backend
npm install
```

**Frontend**

```bash
cd ../frontend
npm install
```

#### 3. Set up environment variables

```bash
cp .env.example .env
```

**Fill in your values (see Environment Variables below)**

**Backend (/backend/.env)**

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=8080
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

**Frontend (/frontend/.env)**

```env
VITE_API_URL=http://localhost:5000/api/v1
```

### 4. Set up the database

- Make sure MongoDB is running locally or use a hosted database like MongoDB Atlas
- Backend must be running before testing authentication
- Ensure all environment variables are correctly set

### 5. Start the development server

```bash
npm run dev
```

## Contributing

Create a feature branch from `dev`

```bash
git checkout -b feature/your-feature-name
```

## Project Structure 

# File Tree: LinguaLoop

**Generated:** 8/14/2026, 12:07:29 AM
**Root Path:** `f:\LinguaLoop`

```
├── .github
│   └── ISSUE_TEMPLATE
│       ├── bug-report-template.md
│       ├── epic-template.md
│       ├── task-template.md
│       └── user-story-template.md
├── backend
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   ├── auth.controller.js
│   │   ├── correction.controller.js
│   │   ├── post.controller.js
│   │   ├── prompt.controller.js
│   │   ├── testController.js
│   │   └── user.controller.js
│   ├── helpers
│   │   └── language.js
│   ├── middleware
│   │   ├── auth.middleware.js
│   │   ├── errorMiddleware.js
│   │   ├── optionalAuth.middleware.js
│   │   └── validateRequest.middleware.js
│   ├── models
│   │   ├── post.model.js
│   │   ├── prompt.model.js
│   │   ├── testModel.js
│   │   └── user.model.js
│   ├── routes
│   │   ├── auth.routes.js
│   │   ├── correction.routes.js
│   │   ├── post.routes.js
│   │   ├── prompt.routes.js
│   │   ├── testRoutes.js
│   │   └── user.routes.js
│   ├── seed
│   │   ├── data
│   │   │   ├── posts.json
│   │   │   ├── prompts.json
│   │   │   └── users.json
│   │   └── seed.js
│   ├── validators
│   │   ├── auth.validator.js
│   │   ├── post.validator.js
│   │   └── user.validator.js
│   ├── .gitignore
│   ├── ARCHITECTURE.md
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
├── docs
│   ├── meeting-sprint_planning.pdf
│   ├── meeting-sprint_preview.pdf
│   ├── meeting-sprint_retrospective.pdf
│   ├── meeting-vision_and_feature_planning.pdf
│   ├── meeting-voyage_kickoff.pdf
│   ├── team_decision_log.md
│   └── team_project_ideas.md
├── frontend
│   ├── public
│   │   ├── _redirects
│   │   ├── favicon.svg
│   │   └── icons.svg
│   ├── src
│   │   ├── api
│   │   │   └── axios.js
│   │   ├── app
│   │   │   ├── hooks
│   │   │   │   └── useSubmissionStore.js
│   │   │   ├── hooks.js
│   │   │   └── store.js
│   │   ├── assets
│   │   │   ├── Logo-Desktop.svg
│   │   │   ├── Logo-Mobile.svg
│   │   │   ├── hero.png
│   │   │   ├── logo-text.png
│   │   │   ├── notFoundImg.png
│   │   │   └── philosophy.png
│   │   ├── components
│   │   │   ├── layout
│   │   │   │   ├── nav
│   │   │   │   │   ├── MobileProfileOverlay.jsx
│   │   │   │   │   └── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── NotFound.jsx
│   │   │   │   ├── PageLoader.jsx
│   │   │   │   └── ProtectedRoute.jsx
│   │   │   └── ui
│   │   │       ├── alert-dialog.jsx
│   │   │       ├── avatar.jsx
│   │   │       ├── badge.jsx
│   │   │       ├── button.jsx
│   │   │       ├── card.jsx
│   │   │       ├── dropdown-menu.jsx
│   │   │       ├── field.jsx
│   │   │       ├── input.jsx
│   │   │       ├── label.jsx
│   │   │       ├── radio-group.jsx
│   │   │       ├── select.jsx
│   │   │       ├── separator.jsx
│   │   │       └── sonner.jsx
│   │   ├── features
│   │   │   ├── auth
│   │   │   │   ├── components
│   │   │   │   │   ├── AuthProvider.jsx
│   │   │   │   │   ├── LoginForm.jsx
│   │   │   │   │   └── SignUpForm.jsx
│   │   │   │   ├── hooks
│   │   │   │   │   └── useAuth.js
│   │   │   │   ├── pages
│   │   │   │   │   ├── Login.jsx
│   │   │   │   │   └── SignUp.jsx
│   │   │   │   ├── schema
│   │   │   │   │   ├── loginSchema.js
│   │   │   │   │   └── signUpSchema.js
│   │   │   │   ├── authActions.js
│   │   │   │   ├── authService.js
│   │   │   │   ├── authSlice.js
│   │   │   │   └── index.js
│   │   │   ├── correct
│   │   │   │   ├── components
│   │   │   │   │   ├── CorrectionCard.jsx
│   │   │   │   │   ├── CorrectionList.jsx
│   │   │   │   │   ├── FilterHeader.jsx
│   │   │   │   │   ├── FluentLanguagesCard.jsx
│   │   │   │   │   ├── MyCorrections.jsx
│   │   │   │   │   └── Pagination.jsx
│   │   │   │   ├── pages
│   │   │   │   │   ├── Correct.jsx
│   │   │   │   │   ├── CorrectionQueue.jsx
│   │   │   │   │   └── CorrectionReviewPage.jsx
│   │   │   │   ├── correctionActions.js
│   │   │   │   ├── correctionService.js
│   │   │   │   └── correctionSlice.js
│   │   │   ├── dashboard
│   │   │   │   ├── components
│   │   │   │   │   ├── JourneyCard.jsx
│   │   │   │   │   ├── PromptCard.jsx
│   │   │   │   │   ├── RecentActivityCard.jsx
│   │   │   │   │   └── RecentSubmissionsCard.jsx
│   │   │   │   ├── pages
│   │   │   │   │   └── Dashboard.jsx
│   │   │   │   ├── dashboardActions.js
│   │   │   │   ├── dashboardService.js
│   │   │   │   ├── dashboardSlice.js
│   │   │   │   └── index.js
│   │   │   ├── landing
│   │   │   │   ├── components
│   │   │   │   │   ├── Hero.jsx
│   │   │   │   │   ├── Philosophy.jsx
│   │   │   │   │   └── Process.jsx
│   │   │   │   └── pages
│   │   │   │       └── LandingPage.jsx
│   │   │   ├── profile
│   │   │   │   ├── components
│   │   │   │   │   ├── ProfileSidebar.jsx
│   │   │   │   │   └── UserStatsCard.jsx
│   │   │   │   ├── pages
│   │   │   │   │   └── Profile.jsx
│   │   │   │   ├── index.js
│   │   │   │   ├── profileActions.js
│   │   │   │   ├── profileService.js
│   │   │   │   └── profileSlice.js
│   │   │   ├── submissions
│   │   │   │   ├── pages
│   │   │   │   │   ├── SubmissionDetail.jsx
│   │   │   │   │   └── Submissions.jsx
│   │   │   │   ├── submissionActions.js
│   │   │   │   ├── submissionService.js
│   │   │   │   └── submissionSlice.js
│   │   │   ├── test
│   │   │   │   ├── testActions.js
│   │   │   │   ├── testService.js
│   │   │   │   └── testSlice.js
│   │   │   └── write
│   │   │       ├── components
│   │   │       │   ├── GuidanceCard.jsx
│   │   │       │   ├── PromptDetails.jsx
│   │   │       │   ├── TextArea.jsx
│   │   │       │   └── WritingEditor.jsx
│   │   │       ├── hooks
│   │   │       │   ├── useLanguageDetection.js
│   │   │       │   └── useWordCount.js
│   │   │       ├── pages
│   │   │       │   └── Write.jsx
│   │   │       ├── writeActions.js
│   │   │       ├── writeService.js
│   │   │       └── writeSlice.js
│   │   ├── lib
│   │   │   └── constants
│   │   │       └── languages.js
│   │   ├── mocks
│   │   │   ├── profileMockData.js
│   │   │   └── submissionData.js
│   │   ├── utils
│   │   │   ├── formatSubmissions.js
│   │   │   └── utils.js
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── ARCHITECTURE.md
│   ├── README.md
│   ├── components.json
│   ├── eslint.config.js
│   ├── index.html
│   ├── jsconfig.json
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── .gitignore
├── README.md
├── package-lock.json
└── package.json
```

---
*Generated by FileTree Pro Extension*


Make your changes
Open a Pull Request against `dev`


```

```
