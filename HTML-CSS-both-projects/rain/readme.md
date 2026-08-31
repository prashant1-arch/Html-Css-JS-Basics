# 🌧️ CSS Rain Animation

## 📖 About The Project

**CSS Rain Animation** is a simple web development project created using **HTML and CSS**.

This project creates a rainy weather effect by placing a rain image over a background image and continuously moving the rain layer using a CSS animation.

The project demonstrates how **CSS background images, gradients, background positioning, and keyframe animations** can be used to create a visual effect without JavaScript.

## ✨ Features

* 🌧️ Animated rain effect
* 🖼️ Background image
* 🌑 Dark overlay using CSS gradient
* 🔄 Continuous rain animation
* ⚡ Pure HTML and CSS
* 📱 Responsive viewport setup
* 🎨 Simple visual design

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* CSS `background-image`
* CSS `linear-gradient`
* CSS `@keyframes`
* CSS `background-position`
* CSS animation

## 📂 Project Structure

```text id="q7c8nd"
CSS-Rain-Animation/
│
├── index.html
├── rain.png
└── README.md
```

## ⚙️ How It Works

The webpage first sets a background image using CSS.

A dark transparent gradient is placed over the background to create a darker atmosphere.

The `.rain` element uses `rain.png` as its background:

```css
.rain {
  background-image: url("rain.png");
  animation: raining 0.4s linear infinite;
}
```

The rain movement is created using `@keyframes`:

```css
@keyframes raining {
  0% {
    background-position: 0% 0%;
  }

  100% {
    background-position: 10% 100%;
  }
}
```

Because the animation uses `infinite`, the rain effect continues continuously.

## 🎨 Main CSS Concepts

### 🌈 Linear Gradient

A transparent black gradient is used over the background image to create a darker effect.

### 🖼️ Background Image

Two background images are used:

* A weather/background image
* `rain.png` for the rain effect

### 🔄 CSS Animation

The `raining` animation changes the background position from top to bottom, creating the appearance of falling rain.

## ▶️ How To Run

1. Clone or download the repository.
2. Open the project folder in **VS Code**.
3. Make sure `rain.png` is present in the same folder as `index.html`.
4. Open `index.html` in a browser.
5. The animated rain effect will start automatically.

## 🎯 Learning Objectives

This project helps in understanding:

* HTML basic structure
* CSS background images
* Linear gradients
* CSS animations
* `@keyframes`
* Background positioning
* Animation duration
* Infinite animations
* Basic webpage styling

## 🚀 Future Improvements

* Add thunder and lightning effects
* Add rain sound
* Add JavaScript controls
* Add different weather conditions
* Add responsive improvements
* Add animated clouds
* Add temperature and weather information

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
