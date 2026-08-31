# ✨ CSS Text Reveal Animation

## 📖 About The Project

**CSS Text Reveal Animation** is a simple web development project created using **HTML and CSS**.

The project displays the text **"PRASHANT..."** in the center of the webpage. A colored text layer moves from left to right and then disappears, creating a **text reveal animation effect**.

This project demonstrates the use of **CSS pseudo-elements, keyframe animations, positioning, overflow, and border effects**.

## ✨ Features

* 🔤 Text reveal animation
* 🔄 Continuous animation
* 🎨 Attractive color effect
* ✨ Text shadow
* 🌑 Dark background
* 🖋️ Google Font integration
* ⚡ Pure HTML & CSS
* 📱 Responsive viewport setup

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* Google Fonts
* CSS `::before` pseudo-element
* CSS `@keyframes`
* CSS `position`
* CSS `overflow`
* CSS `text-shadow`
* CSS `border-right`

## 📂 Project Structure

```text id="5z9m8v"
CSS-Text-Reveal/
│
├── index.html
└── README.md
```

## ⚙️ How It Works

The main text is created using an `<h1>` element:

```html id="0pq8t2"
<h1>PRASHANT...</h1>
```

A `::before` pseudo-element creates another text layer over the original text:

```css id="k1s4hy"
h1::before {
  content: "PRASHANT...";
  position: absolute;
  overflow: hidden;
  border-right: 2px solid #e9b824;
  animation: textreveal 2.9s linear infinite;
}
```

The animation changes the width of the pseudo-element:

```css id="v8p3jn"
@keyframes textreveal {
  0% {
    width: 0;
  }

  50% {
    width: 100%;
  }

  100% {
    width: 0;
  }
}
```

This creates the effect of the text being **revealed and hidden repeatedly**.

## 🎨 Design

The webpage uses:

* Dark background
* White main text
* Golden animated text
* Large typography
* Text shadow
* Centered layout

## ▶️ How To Run

1. Clone or download the repository.
2. Open the project folder in **VS Code**.
3. Open `index.html`.
4. Run the file in a web browser.
5. The text reveal animation will start automatically.

## 🎯 Learning Objectives

This project helps in understanding:

* HTML headings
* CSS positioning
* Pseudo-elements
* `::before`
* CSS animations
* `@keyframes`
* Width animation
* `overflow: hidden`
* `text-shadow`
* Border effects
* Google Fonts

## 🚀 Future Improvements

* Add multiple text animations
* Add typing effect
* Add different colors
* Add hover interaction
* Add JavaScript controls
* Add animation speed controls
* Add multiple words or sentences

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
