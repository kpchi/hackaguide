# Build instructions
You will need Node.js and npm.

Install gulp with

    npm install -g gulp

Then install node modules with `npm install`.

Finally, you can run `gulp` to generate the css and the HTML file from your pages.

Note: You must include the section name and directory inside the `config.json`, otherwise it will not be present in the compiled file.

Also, any file that begins with 'genfile' is temporary, and you can destroy it if you wish.
