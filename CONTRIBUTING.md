# Contributing Guidelines

If you'd like to contribute to Hackaguide, here's how you can do so!

1. Check [Github Issues](https://github.com/hackaguide/hackaguide/issues) to see if something similar has been raised.
2. Create an issue and provide the following information:
  3. **Clear and Descriptive title - Segment Name/Topic** for the issue / change. (Where Segment is Preface/Pre-Event etc and Topic is Food/Marketing etc).
  4. **Describe what the issue / change is**
  5. **List the proposed fix / change** that you have.

**Rough Template for Issue Creation**

```
Title: Issue - Segment Name/Topic

Description of issue / change

---

### Proposed Fix
```

---

Once general consensus has been achieved, you can submit a pull request!  

1. Make your proposed changes in a new git branch
```
git checkout -b fix-issue-<issue number> master
```
2. Commit your changes with a message stating "Proposed change as discussed in #```<Issue Number>```
```
git commit -m "Proposed change as discussed in #<issue number>
```
3. Push your branch to GitHub
```
git push origin my-fix-branch
```
4. In GitHub, send a pull request to ```Hackaguide/master```

---

Once your pull request has been merged, you can safely delete your branch and pull any changes.

1. Delete the remote branch on Github via the Web UI or on local shell as follows:
```
git push origin --delete fix-issue-<issue number>
```
2. Checkout the master branch
```
git checkout -f master
```
3. Delete the local branch
```
git branch -D fix-issue-<issue number>
```
4. Update your master with the latest upstream version
```
git pull -ff upstream master
```

Thank you from the Hackaguide Team