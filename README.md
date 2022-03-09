# vue-app-tabs

This is a POC that has in-application tabs. Each tab is it's own isolated Vue app that is created and destroyed as the tab is created and distroyed. Each tab has it's own in-memory router to enable seperate navigation stacks.

## Use Cases

This might be useful if you're developing an internal system or dashboard. It could allow users to open another instance of the app and navigate to another place. It could also be used to open a detail screen in another tab, preserving the state of the master view and any state associated with that.
