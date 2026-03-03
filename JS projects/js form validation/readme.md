# 🚀 JavaScript Form Validation Project

This project demonstrates how to build a complete **client-side form validation system** using HTML, CSS, and Vanilla JavaScript.

The form validates user input in real-time and prevents submission until all fields meet the required validation rules.

---

## 📌 Project Overview

This project includes:

- A sign-up form with four fields:
  - Name
  - Email
  - Password
  - Confirm Password
- Custom validation logic written in JavaScript
- Error messages displayed under each input field
- Prevention of form submission if validation fails

The goal of this project is to understand how form validation works internally without relying on external libraries.

---

## 🎯 Learning Objectives

Through this project, you will learn:

- How to validate form fields using JavaScript
- How to prevent a form from submitting (`event.preventDefault()`)
- How to display dynamic error messages
- How to validate:
  - Minimum character length
  - Email format using Regular Expressions
  - Password confirmation matching
- How to structure validation logic into reusable functions

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6)

No external libraries or frameworks are used.

---

## 🧠 Validation Rules

### ✅ Name
- Must be at least **2 characters**
- Whitespace is trimmed

### ✅ Email
- Must match a valid email pattern
- Uses Regular Expression validation

### ✅ Password
- Must be at least **8 characters**

### ✅ Confirm Password
- Cannot be empty
- Must match the password field

---

## 📂 Project Structure
project-folder/
│
├── index.html
├── readme.md
├── style.css
└── script.js