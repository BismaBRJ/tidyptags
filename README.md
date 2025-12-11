# Tidy `<p>` tags

This is a simple utility to "tidy" HTML text pasted into the given input box, especially `<p>` tags, as a static webpage.

Access it here: <https://bismabrj.github.io/tidyptags>

or download the `main` branch and open `index.html` locally.

The stack here is just vanilla HTML and JavaScript (and perhaps CSS in the future) to make this "web app" as portable as possible. Although I use event listeners rather than `onclick` for the buttons, that is attempting to adhere to modern JavaScript, I still use one script tag per JS file in the HTML rather than the module import system, since the latter seems to be disabled by default when locally opening the downloaded `index.html` file (to be downloaded together with the JS files of course).

