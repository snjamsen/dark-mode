if (window.matchMedia('(prefers-color-scheme: dark)').matches){
    // User has dark mode preferences in his OS
    // Let's set a dark attribute to true in the html
    document.documentElement.setAttribute("dark", true)
}