# 🔄 CSS Circular Loader

## 📖 About The Project

**CSS Circular Loader** is a simple web development project created using **HTML and CSS**.

The project creates an animated circular loading effect using CSS animations, pseudo-elements, and box-shadow. The loader continuously rotates to give the appearance of a loading indicator.

This project is useful for understanding how **CSS animations and pseudo-elements** can be used to create visual effects without JavaScript.

## ✨ Features

* 🔄 Circular loading animation
* ⚡ Continuous rotation
* ✨ Glowing effect
* 🎨 Simple and attractive design
* 🌑 Dark background
* 🧩 Created using pure HTML & CSS
* 📱 Responsive viewport setup

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* CSS `@keyframes`
* CSS `animation`
* CSS `::before` pseudo-element
* CSS `::after` pseudo-element
* CSS `box-shadow`
* CSS `aspect-ratio`

## 📂 Project Structure

```text id="w3p6sa"
CSS-Circular-Loader/
│
├── index.html
└── README.md
```

## ⚙️ How It Works

The loader is created using a circular `<div>`:

```html
<div class="loader"></div>
```

The `.loader` element is given a circular shape using:

```css id="8o0vqp"
border-radius: 50%;
```

An animation is then applied:

```css id="7r3m1v"
animation: circleloader 2s linear infinite reverse;
```

The `@keyframes` rule rotates the loader:

```css id="2j6h8k"
@keyframes circleloader {
  100% {
    rotate: 360deg;
  }
}
```

### ✨ Pseudo-elements

The project uses `::before` and `::after` to create the inner circle and glowing circular element.

The `::after` element uses `box-shadow` to create the glowing effect around the loader.

## 🎨 Design

The loader includes:

* Dark background
* Purple circular loader
* Circular inner section
* Glowing outer dot
* Continuous rotation animation

## ▶️ How To Run

1. Clone or download the repository.
2. Open the project folder in **VS Code**.
3. Open `index.html`.
4. Run the file in a web browser.
5. The circular loader will start automatically.

## 🎯 Learning Objectives

This project helps in understanding:

* HTML basic structure
* CSS positioning
* CSS animations
* `@keyframes`
* CSS pseudo-elements
* `border-radius`
* `box-shadow`
* CSS rotation
* Responsive units
* Basic UI animation

## 🚀 Future Improvements

The project can be improved by adding:

* Different loader styles
* Loading percentage
* Multiple animation designs
* JavaScript-based loading progress
* Customizable colors
* Text such as "Loading..."
* Responsive size adjustments

## 🎓 Academic Information

**Project Type:** Mini Web Development Project
**Course:** Bachelor of Computer Applications (BCA)
**Semester:** 3rd Semester
**Level:** Beginner

## 👨‍💻 Author

**Prashant Savita**

🐙 GitHub: [Prashant Savita](https://github.com/prashant1-arch)

💼 LinkedIn: [Prashant Savita](https://www.linkedin.com/in/prashant-savita-53821a31b/)

---

⭐ **If you like this project, don't forget to star the repository!**
