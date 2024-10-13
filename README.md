# GitHub Actions in Action

## Intro
This is just a repo for me to learn how to use GitHub Actions properly

## Section Notes
### Section 3: GitHub Actions - Basics
* All GitHub Actions are broken down into `workflow`, `job` and `step`.
* If you need to run multiple shell commands, you can use `|`.
* You can use `workflow_call` to make it so it's called by another workflow
* While it may seem like they have direct access to your repo, they are essentially unrelated servers owned by GitHub
which is why you must download the artifact.
* Commands vs Actions
  * Differences
    * `Action` - "A (custom) application performs a (typically complex) frequently repeated task"
      * You can also write your own Actions
      * Use the `uses` field when defining your `step`
    * `Command` - "A (typically simple) shell command that's defined by you"
      * Use the `run` field when defining your `step`
  * You can use the Marketplace to find verified Actions (`checkout` for example is maintained by GitHub)
* You can check which software is installed by default
* If you define separate jobs, it will run in parallel (So creating a separate job that is `setup` doesn't work unless 
you modify your workflows)
  * You can use `needs` (You can use array notation to mean multiple)
