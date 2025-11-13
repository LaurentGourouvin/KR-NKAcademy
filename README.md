# 📘 KR-NKAcademy  
**A natural Korean learning app built with the NKA method (Natural Korean Acquisition).**  
Learn Korean through meaningful input, weekly curated content, real-life chunks, dialogues, and intuitive immersion — from absolute beginner to TOPIK II level.

---

## 🎯 What is NKAcademy?

**NKAcademy** is a Korean-learning project designed around a simple idea:

> **“Learn Korean naturally — the way humans acquire languages, not the way school teaches them.”**

The goal is to deliver a **fully guided 52-week learning path**, based on:

- Natural Korean Acquisition (NKA)  
- massive comprehensible input  
- immersion-first learning  
- chunk-based vocabulary  
- simple, progressive dialogues  
- micro-output (1–3 sentences/day)  
- curated weekly content  
- no grammar memorization — only intuitive pattern recognition  

NKAcademy is both a **method** and a **curriculum**.

---

## ✨ Features

### ✔ Available
- Structured repository with double licensing  
- Weekly data structure  
- NKA-optimized content format  

### 🚧 In Progress
- Learning engine  
- Interactive phrase/chunk explorer  

### 🚀 Planned
- Audio for all dialogues  
- Shadowing mode  
- SRS for chunks  
- Immersion video recommendations  
- TOPIK preparation system  
- Offline PWA  
- User progress tracking  

---

## 📦 Repository Structure

```pgsql
KR-NKAcademy/
│
├── LICENSE                ← MIT License (code)
├── README.md
│
├── app/                   ← Frontend / application code
├── components/            ← Reusable UI components
├── public/                ← UI assets (non-protected)
│
└── data/                  ← Protected learning content (CC BY-NC-ND)
    ├── LICENSE            ← CC BY-NC-ND 4.0 license for educational data
    ├── metadata.json
    ├── week01/
    │     ├── sentences.json
    │     ├── chunks.json
    │     ├── dialogue.json
    │     └── audio/
    └── week02/
          ├── sentences.json
          ├── chunks.json
          ├── dialogue.json
          └── audio/
```

---
## 🧩 Chunks vs Sentences

KR-NKAcademy separates learning content into **chunks** and **sentences**, inspired by the NKA method (Natural Korean Acquisition).

### **Chunks (`chunks.json`)**
Small reusable language blocks or patterns used to build natural Korean.
Examples:  
- 감사합니다  
- 저는 …이에요  
- … 하고 싶어요  

Chunks are *building blocks* rather than full sentences.

### **Sentences (`sentences.json`)**
Complete, meaningful sentences used for immersion and comprehension.
Examples:  
- 저는 프랑스 사람이에요.  
- 오늘 바빠요.  

Sentences often *contain several chunks*, helping learners recognize patterns naturally.

This separation allows the app to provide both structured input (sentences) and practical output tools (chunks) for real-life use.
---

## 📚 Weekly Content Format

### `sentence.json`
```json
[
  { "kr": "안녕하세요", "fr": "Bonjour" },
  { "kr": "저는 프랑스 사람이에요", "fr": "Je suis français" },
  { "kr": "잘 지내요?", "fr": "Comment ça va ?" }
]
```
### `chunks.json`
```json
[
  { "kr": "안녕하세요", "fr": "Bonjour" },
  { "kr": "저는 ...이에요/예요", "fr": "Je suis ..." },
  { "kr": "잘 지내요?", "fr": "Tu vas bien ?" }
]

```
### `dialogue.json`
```json
  "scene": [
    { "speaker": "A", "kr": "안녕하세요!", "fr": "Bonjour !" },
    { "speaker": "B", "kr": "안녕하세요. 잘 지내요?", "fr": "Bonjour, ça va ?" },
    { "speaker": "A", "kr": "네, 잘 지내요!", "fr": "Oui, ça va bien !" }
  ]
```

---

## 🔐 Licensing

KR-NKAcademy uses a **dual-license model**:

### ✔ Source Code — MIT License
All code outside the `/data` folder is licensed under MIT.  
You may use, modify, fork, or build upon it freely.  
See: [`LICENSE`](./LICENSE)

### ✔ Educational Content — CC BY-NC-ND 4.0
All learning content inside the `/data` folder is licensed under **CC BY-NC-ND 4.0**, which:

- prohibits **commercial use**,  
- prohibits **modification**,  
- prohibits **redistribution of altered or derived content**.

See: [`data/LICENSE`](./data/LICENSE)

**Summary:**  
- **Code = open and free**  
- **Data = protected and non-commercial**

---

## 🧪 Vision

NKAcademy aims to become a complete, modern Korean-learning journey:

- intuitive and immersive  
- based on real language acquisition  
- structured week-by-week  
- open-source for developers  
- protected for educational content  
- focused on understanding and input rather than grammar memorization  

It is both a personal learning tool and a public experiment in natural language acquisition.

---

## 🧑‍💻 Author

**Laurent Gourouvin**  
2025 — KR-NKAcademy  
Natural Korean Acquisition Project

