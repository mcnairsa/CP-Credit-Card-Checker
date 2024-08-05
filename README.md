# CP-Credit-Card-Checker
Codecademy Full-Stack Engineer Career Path Challenge Project
## Credit Card Checker

Note: this is not a 'proper' README in the git best practice sense

### Early Revision History
01. 'first commit'
Initial commit of:
- .gitignore (empty)
- README.md

02. 'Credit card check now working'
Add 
- main.js
- LICENSE (sic)
At this point the Lhun test was still split into its own function and we were still trying to use arrow functions to show how clever we thought we were.

03. 'Save history stage 1'
Add
- main-v.0.1.js
- main-v.0.2.js
Update
- main.js
[but see below for amemded commit]
These were largely experimental versions.
Looks like at this point I introduced the idea that I had to modulo 9 rather than subtract 9. That led to the error that if the original digit was a 9 I was adding 0 (18 % 9 = 0) rather than 9 (18 - 9 = 9).

Note:
So long as we haven't pushed to remote ...
<path> %git add <file|file1, file2 &c>
<path> %git commit --amend --no-edit
or
<path> %git commit --amend [to change commit msg as well]
will allow us to change the last commit
See here:
https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History
and here:
https://stackoverflow.com/questions/14096721/how-to-add-file-to-a-previous-commit#14096741

for how to do more complicated stuff.

we'll [git add] this README.md file then [git commit --amend] but later when it's not the middle of the night.

Also for posting [will... may be removed later]

We'll probably do one commit per version [main-save99.js] but we'll see about that later.

'On the Power of Opposition', something like that. A treatiese [sp? ffs!] on how it came about that I only got started when Lou arrived. But that's a blog entry 'polluting the Codecademy Club-o-sphere with my random thoughts.

Ah! The [self-] Repair Shop idea ->
  * selling new phones [&c] is like give a man (sic) a fish &c - dependence
  * repairing and re-selling is give a person a net - partial independence
  * encouraging/showing how to repair is teach them how to mend their nets - full independence [Schumacher]

  BUT
    * encouraging the mindset of and/or a community of self-net-repairers is better still/yet - interdependence
