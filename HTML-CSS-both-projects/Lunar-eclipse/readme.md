# 🌑 Lunar Eclipse Animation

## 📖 About The Project

**Lunar Eclipse Animation** is a simple web development project created using **HTML and CSS**.

The project visually represents a lunar eclipse using animated CSS shapes. A circular object represents the Sun, while a black circular pseudo-element moves across it to create the eclipse effect.

The background also changes between light and dark colors to represent the transition from day to night.

## ✨ Features

* 🌞 Animated Sun
* 🌑 Eclipse effect
* 🌌 Animated sky/background
* 🔄 Continuous animation
* ✨ Simple visual design
* 📐 Responsive sizing using `vw`
* ⚡ Pure HTML & CSS
* 🎨 CSS-based animation without JavaScript

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* CSS `@keyframes`
* CSS pseudo-element `::after`
* CSS `translate`
* CSS `scale`
* CSS `box-shadow`
* CSS `border-radius`
* CSS Flexbox
* CSS `aspect-ratio`

## 📂 Project Structure

```text id="e4jv8p"
Lunar-Eclipse/
│
├── index.html
└── README.md
```

## ⚙️ How It Works

The main `.universe` container acts as the sky/background.

Inside it, the `.sun` element represents the Sun:

```css id="x7b3qk"
.sun {
  background-color: #e25e3e;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}
```

A black circular `::after` pseudo-element is placed over the Sun. It moves across the Sun using CSS animation.

### 🌑 Eclipse Animation

The `moonwalk` animation changes the position and size of the black circle:

```css id="r9s2mx"
@keyframes moonwalk {
  0% {
    translate: 100%;
    scale: 1;
  }

  50% {
    translate: 0%;
    scale: 0.95;
  }

  100% {
    translate: -100%;
    scale: 0.9;
  }
}
```

When the black circle passes over the Sun, it creates the visual appearance of an eclipse.

### 🌌 Sky Animation

The `.universe` background changes colors using the `skychange` animation.

The background becomes dark at the middle of the animation and then returns to its original color.

## 🎨 Design

The project uses:

* Light peach page background
* Orange-colored sky
* Red/orange Sun
* Black eclipse element
* Flexbox for center alignment
* Rounded corners
* Glow effect during the eclipse

## ▶️ How To Run

1. Clone or download the repository.
2. Open the project folder in **VS Code**.
3. Open `index.html`.
4. Run the file in any modern web browser.
5. The lunar eclipse animation will start automatically.

## 🎯 Learning Objectives

This project helps in understanding:

* HTML basic structure
* CSS Flexbox
* CSS positioning
* CSS pseudo-elements
* `::after`
* CSS animations
* `@keyframes`
* `translate`
* `scale`
* `box-shadow`
* `border-radius`
* `aspect-ratio`
* Creating visual effects using CSS

## 🚀 Future Improvements

* Add stars to the night sky
* Add realistic Moon design
* Add eclipse phases
* Add animation controls
* Add text showing eclipse stages
* Add JavaScript interaction
* Improve the animation for mobile devices

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
