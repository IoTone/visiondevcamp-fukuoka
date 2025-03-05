# Event Page

## Theme

[Hugo Event Theme](https://github.com/medialesson/hugo-theme-event)

## Development

1. Run npm install to install the required dependencies.
    ```shell
    npm install
    ```
2. Move to the event-page directory.

    ```shell
    cd event-page
    ```

3. Run Hugo in development mode:
    ```shell
    hugo server
    ```
4. View the event page on http://localhost:1313/.

## Build

```shell
hugo
```

## How to add a new session(schedule)

1. Create a new markdown file in the `event-page/content/sessions` directory.
2. Add the session to the `isScheduled` parameter.
3. Add the session to the `eventDate` parameter.

```markdown
---
title: "session title"
date: 2025-03-04T10:00:00
isScheduled: true
eventDate: "2025-04-10T14:00:00"
---

session content
```
