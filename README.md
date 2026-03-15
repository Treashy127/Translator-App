Translator-App
An interactive Translation Web Application that allows users to translate text between languages using an external API.
Multilingual Translation Web Application

Overview

This project is a **web-based multilingual translation application** that allows users to translate text between different languages in real time. The application provides a simple and intuitive interface where users can enter text, choose source and target languages, and instantly receive translated results.

The translation functionality is powered by the **MyMemory Translation API**, which retrieves translated text from an external translation service.

The application demonstrates core **full-stack web development concepts**, including API integration, event-driven JavaScript, and modern browser features such as speech synthesis and clipboard access.



Features

1. Translation Interface

The application displays a clean and user-friendly translation interface where users can:

Enter text to translate
Select the source language
Select the target language
View translated output instantly



2. Default Translation on Page Load

When the application loads, it automatically translates the sentence:

"Hello, how are you"

from English to French.



3. User Input

Users can input their own text into the input field.

Maximum input length: **500 characters**
A live **character counter** shows the number of characters used.

Example:

```
18 / 500
```



4. Translate Button

Users can manually trigger the translation process by clicking the 'Translate' button.



5. Real-Time Translation (Debounce)

The application implements 'debounced real-time translation'.

This means:

Translation automatically occurs when the user types
The system waits **500 milliseconds after typing stops** before making an API request
This prevents excessive API calls and improves performance


6. Language Selection

Users can select the source language from the following options:

Detect Language
English
French
Spanish
German
Italian

Users can select the 'arget language' from:

English
French
Spanish
German
Italian



7. Language Switch

The application includes a 'swap language button (⇄)' that instantly switches:

Source language
Target language

This allows quick reverse translations.



8. Text-to-Speech

The application uses the 'Web Speech API' to allow users to listen to the text.

Users can:

Listen to the 'original input text'
Listen to the **translated output text**



9. Copy to Clipboard

Users can easily copy text using the 'copy buttons'.

Available options:

Copy the 'input text'
Copy the 'translated output'

The application uses the 'Clipboard API' for this functionality.



 Technologies Used

HTML5
CSS3
JavaScript (ES6)
Fetch API
MyMemory Translation API
Web Speech API
Clipboard API



 Translation API

The application uses the following API:

https://api.mymemory.translated.net/get

Example request:

```javascript

fetch("https://api.mymemory.translated.net/get?q=Hello&langpair=en|fr")
```

Example response:

```json
{
  "responseData": {
    "translatedText": "Bonjour"
  }
}
```

---

Project Structure

```
translator-app
│
├── index.html
├── style.css
├── script.js
└── README.md
```

File descriptions:

| File       | Purpose                                       |
| ---------- | --------------------------------------------- |
| index.html | Application structure and layout              |
| style.css  | Application styling and interface design      |
| script.js  | Application functionality and API integration |
| README.md  | Project documentation                         |

---

How to Run the Application

1. Download or clone the project.

2. Open the project folder.

3. Open the file:

```
index.html
```

in any modern web browser.

No additional installation or setup is required.

---

Example Usage

1. Enter text into the input box.

Example:

```
Good morning
```

2. Select the languages.

Example:

Source: 'English'
Target: 'French'

3. Click 'Translate' or wait for automatic translation.

Output:

```
Bonjour
```

---

Error Handling

The application includes basic error handling to manage situations where:

The translation API fails
Network issues occur
The user attempts to translate empty text

In these cases, the system displays a fallback message:

```
Translation failed.
```

---

Possible Future Improvements

The application can be further enhanced by adding:

Loading spinner animation
Dark mode support
More language options
Mobile-responsive layout improvements
Translation history
Saving favorite translations

---

Author

Developed as part of a **Full Stack Development Assignment** focusing on API integration, interactive interfaces, and modern web development practices.

---

License

This project is created for educational purposes.
