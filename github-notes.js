//to initiate a git repository:

// git init
//staging files for a commit:
// git status tells you the status of your repository (the main folder you're tracking)
// git add <file_name> OR git add . to add all of the files inside the folder you're in and stage them for a commit

//how to commit:
// git commit -m "your commit message here"
//to view the commit:
// git log
//shows us commit hash, branch name, commit message, and other metadata

// go to github.com and click Create Repository
// name our repository, leave it public, keep all other options deselected
// click create repository
// copy the provided URL
// go back to VSCode
// link your local repository with remote repository by typing:
// git remote add origin <paste the link>
// to push to remote repository:
// git push origin master


/* Git is a version control system... primarily used for code ...developed in 2004 by the guy that created linnux 

allows you to make changes and then roll back to a previous commit
everyday... push work into github... that way I'll always have my code

version control system designed to keep chronological timeline of all of your code changes

push to git in pillars
*/

// To traverse file system in terminal:
// cd name_of_folder --> moves you down
// cd .. --> moves you up
// ls --> lists items inside existing folder

// to initiate a git repository
// git init
//staging files for a commit
// git status tells you the status of your repository
// git add <file_name> OR git add . to add all of the files inside the folder that you are in and stage them for a commit
// To commit your changes, run the following command: 
//git commit -m "Your commit message here"

//to view the commit:
// git log
// shows us commit hash, branch name, commit message, and other metadata
// when you do git log it will show you your history in chronological order... the top is the most recent

// Go to GitHub.com and click Create Repository
// Name our repository, make sure to leave it public and keep all other options deselected
// Click create repository
// Then copy the https url provide (one that ends with .git)
// Go back to VSCode
// Link your local repository with remote repository by typing:
// git remote add origin <paste the link>
// To push to remote repository
// git push origin main (or master)