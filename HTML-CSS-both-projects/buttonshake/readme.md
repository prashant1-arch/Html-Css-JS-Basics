# 🔘 CSS Shake Button

A simple **Shake Button Animation** project created using **HTML and CSS**.

This project demonstrates how CSS **hover effects, transitions, colors, and keyframe animations** can be used to create an interactive button.

## ✨ Features

* 🔘 Simple and attractive button
* 🖱️ Shake animation on hover
* 🎨 Hover color change
* 🌑 Dark background
* ⚡ Pure HTML & CSS
* 📱 Responsive viewport setup

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* CSS `:hover`
* CSS `@keyframes`
* CSS `rotate` property

## 📂 Project Structure

```text
Shake-Button/
│
├── index.html
└── README.md
```

## ⚙️ How It Works

When the user moves the mouse over the **"Shake Me"** button:

1. The button border and text color change.
2. The `shaking` animation starts.
3. The button rotates from one side to another.
4. The animation completes in `0.2 seconds`.

## 🎬 Animation

The shaking effect is created using CSS `@keyframes`:

```css
@keyframes shaking {
  0% {
    rotate: 20deg;
  }

  50% {
    rotate: -20deg;
  }

  100% {
    rotate: 20deg;
  }
}
```

## ▶️ How To Run

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in any web browser.
4. Move your mouse over the **Shake Me** button.

## 🎯 Learning Objectives

This project helped me understand:

* HTML button elements
* CSS styling
* CSS hover effects
* CSS animations
* `@keyframes`
* Rotation effects
* Basic UI interaction

## 🚀 Future Improvements

* Add different animation styles
* Add click-based animation
* Add sound effects
* Add more buttons with different animations
* Improve responsive design

## 👨‍💻 Author

**Prashant Savita**

🐙 GitHub: [Prashant Savita](https://github.com/prashant1-arch)

💼 LinkedIn: [Prashant Savita](https://www.linkedin.com/in/prashant-savita-53821a31b/)

---

⭐ **If you like this project, don't forget to star the repository!**
