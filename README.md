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

## How to add a new speaker

1. Create a new markdown file in the `event-page/content/speakers` directory.
2. Add the speaker to the `name` parameter.
3. Add the speaker to the `avatarResource` parameter.
    - put image data in `event-page/static/images/speakers` directory.
    - if you want to use default avatar, put `default-avatar.svg` in the directory.
4. Add the speaker to the `description` parameter.
5. Add the speaker to the `linkedinUrl` parameter.
6. Add the speaker to the `xUrl` parameter.
7. Add the speaker to the `companyUrl` parameter.

```markdown
---
title: "Speaker 1"
name: "Speaker 1 NAME"
avatarResource: "images/speakers/default-avatar.svg"
description: "Speaker 1 is a keynote speaker on the latest trends in technology and innovation."
linkedinUrl: "https://www.linkedin.com/in/speaker1"
xUrl: "https://x.com/speaker1"
companyUrl: "https://www.company1.com"
---

speaker content
```
