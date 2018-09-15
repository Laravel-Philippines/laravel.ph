# Contributing to LaravelPH's website

Looking to contribute something to LaravelPH's website? **Here's how you can help.**

Please take a moment to review this document in order to make the contribution
process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of
the developers managing and developing this open source project. In return,
they should reciprocate that respect in addressing your issue or assessing
patches and features.

## Your First Contribution
Are you new to opensource and the github flow? Take time to peruse the following resources:

* [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
* [How to Make a Pull Request](http://makeapullrequest.com/)
* [Practice for First Timers only](http://www.firsttimersonly.com/)

If you want to make a new contribution please follow our community ground rules and our git workflow described below. You can make a contribution by creating an issue and referencing it when you make your pull request.

# LaravelPH community Ground Rules

## Communications
We have a slack where you can communicate with others. [Join here](https://laravelph-slackinviter.herokuapp.com/).

We also have a [facebook group](https://www.facebook.com/groups/laravelph/s) where we are more active.

LaravelPH expects our members to communicate with respect and professionalism.

## Responsibilities

* Ensure unit tests as necessary are in place 
* Ensure that code that goes into core meets all requirements in this checklist: https://gist.github.com/audreyr/4feef90445b9680475f2
* Create issues for any major changes and enhancements that you wish to make. Discuss things transparently and get community feedback.
* Be welcoming to newcomers and encourage diverse new contributors from all backgrounds. See the Python Community Code of Conduct.



## Feature requests

Feature requests are welcome. But take a moment to find out whether your idea
fits with the scope and aims of the project. It's up to *you* to make a strong
case to convince the project's developers of the merits of this feature. Please
provide as much detail and context as possible.


## Pull requests

Good pull requests—patches, improvements, new features—are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

**Please ask first** before embarking on any significant pull request (e.g.
implementing features, refactoring code),
otherwise you risk spending a lot of time working on something that the
project's developers might not want to merge into the project.


## Our git workflow

Following the steps below is the best way to get your work included in the project:

* [Fork](http://help.github.com/fork-a-repo/) the project in github..
* Create a topic branch from where you want to base your work.
  * This is usually the master branch.
  * Only target other branches if you are certain your fix must be on that
    branch.
  * To quickly create a topic branch based on master; `git checkout -b
    fix/master/my_contribution master`. Please avoid working directly on the
    `master` branch.
  * File an issue and describe what you are trying to solve in the issue. Refer to it when you make a [pull request](https://help.github.com/articles/using-pull-requests/)
* Make commits of logical units.
* Check for unnecessary whitespace with `git diff --check` before committing.
* If possible, add the necessary tests for your changes.
* Run _all_ the tests to assure nothing else was accidentally broken.
* Push your topic branch up to your fork
* [Open a Pull Request](https://help.github.com/articles/using-pull-requests/) with a clear title and description against the `master` branch.
