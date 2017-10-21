This is just a starting point for Ionic with an Auth against firebase.

You will need to create a file:

app.firebase.config.ts

That will be used for your firebase authentiaction

You need to install the following globally.
```bash
$ sudo npm install -g ionic cordova
$ ionic start myTabs tabs
```

Easiest way to run this:
```bash
$ ionic lab
```

Then, to run it, cd into the project and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.
