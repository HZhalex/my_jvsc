# 🧮 Counter App – Using Event Listeners

A simple JavaScript counter application built with **Event Listeners** instead of inline `onclick` attributes.

---

## 📌 Project Overview

This project demonstrates modern JavaScript best practices for DOM manipulation and event handling.

Instead of attaching events directly in HTML (e.g., `onclick=""`), this version uses:

* `addEventListener()`
* External JavaScript file (`counter.js`)
* `DOMContentLoaded`
* Clean function-based structure
* Persistent storage using `localStorage`
* UI feedback messages ("Saved!", "Loaded!")

---

## 🚀 Features

### 🔢 Counter Operations

* Increase count
* Decrease count (minimum = 0)
* Reset count

### 💾 Persistent Storage

* Save count to `localStorage`
* Load count from `localStorage`

### 📢 User Feedback

* Displays a short **"Saved!"** message after saving
* Displays a short **"Loaded!"** message after loading

---

## 🛠 Technical Improvements

### 1️⃣ Separation of Concerns

HTML handles structure.
JavaScript logic is placed in a separate file:

```
counter.js
```

This improves:

* Code readability
* Maintainability
* Scalability

---

### 2️⃣ Using addEventListener()

Instead of inline events:

```html
<button onclick="increase()">+</button>
```

We use:

```javascript
element.addEventListener("click", increase);
```

Benefits:

* Keeps JavaScript out of HTML
* Allows multiple events on the same element
* Cleaner architecture
* Easier debugging

---

### 3️⃣ DOMContentLoaded

JavaScript runs only after the DOM is fully loaded:

```javascript
document.addEventListener("DOMContentLoaded", function () {
    // DOM-safe code here
});
```

Prevents:

* Null element errors
* Timing issues

---

### 4️⃣ Modular Function Design

Each action is handled by a focused function:

* `updateCount()`
* `increaseCount()`
* `decreaseCount()`
* `resetCount()`
* `saveCount()`
* `loadCount()`

This improves:

* Code clarity
* Reusability
* Testability

---

## 📂 Project Structure

```
/project-folder
│
├── index.html
├── counter.js
└── README.md
```

---

## 💡 Concepts Covered

* DOM manipulation
* Event handling
* Scope management
* Browser `localStorage`
* State synchronization
* UI feedback patterns

---

## 🎯 Learning Objectives

After completing this project, you should understand:

* Why separating HTML and JavaScript matters
* How `addEventListener()` works
* The difference between inline and programmatic events
* How to persist data with `localStorage`
* Basic state management principles

---

## 🔮 Future Improvements

* Auto-load on page refresh
* Disable "Load" button if nothing saved
* Add simple animations
* Convert to ES Modules
* Add unit tests

---

## 🧠 Why This Project Matters

Although simple, this project introduces core frontend engineering principles:

* Clean event handling
* Separation of concerns
* State management
* Persistent browser storage

These are foundational concepts for frameworks like React, Vue, and Angular.
