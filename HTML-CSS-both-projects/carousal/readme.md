# 🖼️ Automatic Image Carousel

## 📖 About The Project

**Automatic Image Carousel** is a simple web development project created using **HTML and CSS**.

The project displays a large image container in the center of the webpage. The images automatically change after a fixed interval using a **CSS keyframe animation**.

This project is useful for understanding how CSS animations can be used to create an automatic image gallery without JavaScript.

## ✨ Features

* 🖼️ Automatic image changing
* 🔄 Continuous carousel animation
* 🎨 Clean and simple design
* 🌑 Dark background
* 📱 Responsive viewport setup
* ✨ Rounded image container
* 💫 Box-shadow effect
* ⚡ Created using only HTML and CSS

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* CSS `@keyframes`
* CSS `background-image`
* CSS `background-size`
* CSS animations

## 📂 Project Structure

```text id="0l4s5k"
Automatic-Image-Carousel/
│
├── index.html
└── README.md
```

## ⚙️ How It Works

The project uses a `<div>` element as an image container.

A CSS animation named `gallery` is applied to the container:

```css id="8b3b5c"
animation: gallery 20s linear infinite;
```

The `@keyframes` rule changes the `background-image` at different percentages:

```text id="u1h9e0"
0%    → Image 1
20%   → Image 2
40%   → Image 3
60%   → Image 4
80%   → Image 5
100%  → Image 6
```

After reaching 100%, the animation starts again because of:

```css id="q9l1j3"
infinite
```

## 🎨 Design

The webpage uses:

* Black background
* Centered image container
* `60vw` container width
* `50rem` container height
* Rounded corners
* Box shadow
* `background-size: cover`

## ▶️ How To Run

1. Download or clone the repository.
2. Open the project folder in **VS Code**.
3. Open `index.html`.
4. Run it using a browser or **Live Server**.
5. The images will automatically change every few seconds.

## 🎯 Learning Objectives

This project helps in understanding:

* Basic HTML structure
* CSS styling
* CSS background images
* CSS animations
* `@keyframes`
* Animation duration
* Infinite animations
* Responsive units such as `vw` and `rem`
* Basic webpage layout

## 🚀 Future Improvements

The project can be improved by adding:

* Previous and Next buttons
* Image captions
* Navigation dots
* Pause/Play button
* JavaScript controls
* Smooth image transitions
* Mobile-specific improvements

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
