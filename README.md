# Profile Webpage with Dark Mode
![Screenshot 2025-03-31 122154](https://github.com/user-attachments/assets/6d26814c-7335-4378-be8d-e8d3bca5c838)

## Overview
This project is a simple profile webpage that includes a dark mode toggle feature. Users can switch between light and dark mode by clicking a button, enhancing the user experience and accessibility.

## Features
- Responsive profile page
- Dark mode toggle functionality
- Styled using CSS and JavaScript
- Interactive UI elements

## Technologies Used
- **HTML**: Structure of the webpage
- **CSS**: Styling and layout
- **JavaScript**: Interactivity (dark mode toggle)

## Installation & Usage
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/profile-webpage.git
   ```
2. Navigate to the project directory:
   ```bash
   cd profile-webpage
   ```
3. Open `index.html` in your preferred web browser.

## File Structure
```
profile-webpage/
│── index.html        # Main HTML file
│── style.css         # Stylesheet for the page
│── script.js         # JavaScript for interactivity
│── images/           # Folder for profile images
```

## How It Works
- Clicking the dark mode button toggles the `.dark-mode` class on the profile container.
- The `.dark-mode` class changes background and text colors to create a dark mode experience.

## Code Example
**JavaScript Implementation:**
```js
function toggleMode() {
    document.querySelector(".profile").classList.toggle("dark-mode");
}
```

## Future Improvements
- Add smooth transitions for dark mode switching
- Save user preferences using local storage
- Enhance UI with animations

## License
This project is open-source and available under the MIT License.

