## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
stages all your changes; tells Git you have made changes. 

#### branch
list, create, or delete branches. 

#### checkout
checkout a branch or paths to the working tree

#### clone
clone a repository into a new directory. 

#### commit
Tells Git you've made changes. It's the equivalent to typing your message into the "summary" section of the git app and hitting the commit button. 

#### fetch
download objects and refs from another repository. 

#### log
a journal that remembers all the changes you've committed in the order you've committed them. 

#### merge
join tow dev histories together. 

#### pull
fetch from and integrate with another repository. 

#### push
pushes the changes to Github (or another remote branch). 

#### reset
reset current HEAD to the specified state. 

#### rm
"Remove". Allows you to remove files. 

#### status
tells you what's going on in your repository i.e. what changes have been made, have they been committed, etc.


## Release 4: Git Workflow

- Push files to a remote repository
	1. git add (FILENAME)
	2. git commit -m "(WHAT YOU CHANGED)"
	3. git remote add origin https://github.com/cjord01/(REPOSITORY).git
	4. git push origin master
- Fetch changes
	git fetch <remote> - this downloads everything.
	OR you could do - git fetch <remote> <branch> - to just fetch a specified branch. 
- Commit locally
 	1. git add (FILENAME)
	2. git commit -m "(WHAT YOU CHANGED)"

## Release 5: Errors you encountered
1. Error
	CLAYTONs-iMac:phase_0_unit_1 claytonjordan$ git commit -m "3.1 - Release 2"
On branch master
Your branch is up-to-date with 'origin/master'.

Changes not staged for commit:
	modified:   week_3/1_git_started/my_solution.md

no changes added to commit
2. Solution
	I did a 'git status' and that got me back on track. 
		On branch master
Your branch is up-to-date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   week_3/1_git_started/my_solution.md

no changes added to commit (use "git add" and/or "git commit -a")

3. Cause (explain the error)
	I skipped the 'git add... " part so 'status' reminded me. 

## Release 6: Reflection

I feel like I have a much better understanding of git now but it's still not 100% crystal clear. 
I feel like I'm at least competent enough to commit and push my files. 
Definitely feels much more tedious than just dealing with everything through the github app. 
I'm tempted to keep using the app but I'll try my best to save everything through the terminal moving forward. 