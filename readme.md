## Instagram Comment Work Skin

Adds Instagram comments to your fic

<img width="395" alt="image" src="https://github.com/user-attachments/assets/8a4307ca-67ad-4ce8-8b7b-4f29b3e96870" />

## Structure of this repo

I wanted this to be super user friendly, but also match Instagram as much as possible, so the templates are a little complex. There is an example file and templates with placeholders, if that's easier for you. If you have any issues, you can email (see github bio) or leave a comment on AO3

-   `styles.css` - This is your styles. Copy this entire file and paste it into your work skin
-   `index.htnl` - This is a real example with lots of comments
-   `singleComment.html` - This is a template of a single comment
-   `commentAndReples.html` - This is a tempalte of a comment with replies
-   `singleReply.html` - This is a templatae of a single reply

## Accessibility

This work skin was created with screen readers in mind. If you have any suggestions or something reads wonky, please don't hesitate to share them - I'd love to learn how I can make the work skin better!

-   Images are read out. A character's profile picture will read "image character's profile picture". This is done through the `alt` attribute
-   Reply and like buttons are skipped. Since they don't _do_ anything, I don't feel they add value. This is done through the attribute `aria-hidden` (`aria-hidden="true"`). The amount of likes will still read out, if you've set it

## Using with another work skin

If you choose to use this to render comments in your fic for your existing Instagram post, you can also just drop this your comment code below it. The style selectors are pretty strict so they shouldn't overlap. If you need to fiddle with the width of your comments, update the max-width in this rule to your desired width

```
/* The comment container */
.instCommentContainer {
    max-width: 335px;
    margin: 0 auto;
    width: fit-content;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```

## Structure of HTML

This is a rundown of the HTML structure, in case you're lost in div soup

-   div id="instCommentContainer"
    -   This is a wrapper for your entire comment section. This sets some styles, but the CSS is also written to target HTML elements inside this wrapper.
    -   THIS MEANS THAT IF YOU PUT A COMMENT OUTSIDE OF THIS WRAPPER IT WILL NOT BE STYLED CORRECTLY.
    -   This is so that my work skin plays nice with any other work skin. You can use this work skin alongside another and it will not mess overwrite the styles of the other work skin
        -   div class="instSingleCommentWrapper"
        -   This is the start of a single comment and it's replies. Put all single comments inside the div with id="instCommentContainer"
            -   div class="instSingleComment"
            -   This div contains the picture, comment, comment info, and like button

## A guide, in case you get lost in div soup

This guide explains the HTML structure and how the CSS styles work for your Instagram comment section. Understanding this will help you customize and use parts of the comments without breaking things

## 1. How the Styles Work

These comment styles are designed to be very specific to avoid interfering with other work skins. This is achieved by using a main container (`<div id="instCommentContainer">`) that all comments sit inside.

### The Main Wrapper: `<div id="instCommentContainer">`

-   All of your Instagram comments **MUST be placed inside** a `div` with the id `instCommentContainer`.
-   **Why?** The CSS rules are written to specifically target elements _only_ when they are inside this `instCommentContainer`. If you place a comment outside of it, its styles will not apply correctly.
-   This ensures that your comments look consistent and don't clash with other work skins you might have in your chapters

---

## 2. HTML Structure Breakdown

This section breaks down the nested levels of your HTML elements, from the main container down to individual parts of a comment.

-   **`<div id="instCommentContainer">`**

    -   This is the **overall wrapper** for your entire comment section.
    -   It defines the general layout and font styles

    -   &nbsp;&nbsp;&nbsp;&nbsp;└── **`<div class="instSingleCommentWrapper">`**

        -   This `div` acts as the **wrapper for a single comment** (including any replies it might have).
        -   **If you want to copy and paste a single comment (and its replies) elsewhere, you should copy this entire `div` and ensure it's still placed within an `instCommentContainer`.**
        -   It handles spacing and overall alignment for each comment block.

        -   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── **`<div class="instSingleComment">`**

            -   This `div` contains the main content of **one individual comment**:
                -   The user's **profile picture** (`<img class="instCommentAvatar">`)
                -   The **comment content** (username, comment text, likes, reply button)
                -   The **like heart/icon** (`<svg class="instCommentLike">`)

        -   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── **`<div class="instCommentReplyToggle instCommentReplyText">`** (Optional)

            -   This `div` will appear **after** a main comment if it has replies that can be toggled (shown/hidden).
            -   It contains a spacer element and text like "View all X replies" or "Hide all X replies".
            -   Update the number of replies but **do not change its classes.**

        -   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── **`<div class="instSingleCommentWrapper instCommentReply">`** (Optional)
            -   This `div` is used for **individual replies** to a parent comment.
            -   **Important when copying and pasting:** Notice it has _both_ `instSingleCommentWrapper` (for general comment structure) AND the additional `instCommentReply` class. This `instCommentReply` class adds specific styling for replies, like indentation so that it's clear they're replies
            -   **Each reply is its own instance of this `div`.** You would nest these inside the `instSingleCommentWrapper` of the comment they are replying to.

---

## 3. Key HTML Elements & What You Can Change

Here's a breakdown of individual elements within a comment and what you can change:

### A. The Comment Avatar (`<img class="instCommentAvatar">`)

-   Displays the user's profile picture.
-   **What to change:**
    -   `src="..."`: Replace the placeholder link with your desired image URL.
    -   `alt="..."`: **Important for accessibility!** Change this to "Character Name's profile picture" (e.g., "Crowley's profile picture") so screen readers can describe the image.
-   **What not to change:**
    -   `class="instCommentAvatar"`
    -   `height="30"` and `width="30"` (unless you want to universally resize all avatars)

### B. The Comment Content (`<div class="instCommentContent">`)

-   Contains the username, comment text, like count, and reply button.
-   **What not to change:** `class="instCommentContent"`

    #### i. Comment Meta Info (`<div class="instCommentMeta">`)

    -   Holds the username and time since comment.
    -   **What not to change:** `class="instCommentMeta"`

        -   **Username (`<span class="instCommentUser">...</span>`)**

            -   Displays the user's name.
            -   **What to change:** The text content inside the `<span>` (e.g., `serpent.666`).
            -   **What not to change:** `class="instCommentUser"`

        -   **Spacer (`<span>&nbsp;</span>`)**

            -   Provides a small space between the username and the time.
            -   **Do not remove or change this.**

        -   **Time Since Comment (`<span class="instCommentDetails">...</span>`)**
            -   Shows how long ago the comment was posted (e.g., "4d", "1d", "12hr").
            -   **What to change:** The text content inside the `<span>`.
            -   **What not to change:** `class="instCommentDetails"`

    #### ii. The Comment Text (`<p>...<p>`)

    -   Contains the actual text of the comment.
    -   **What to change:** The text content within the `<p>` tags.
        -   **Mentions (`<span class="instCommentMention">...</span>`)**
            -   Makes text blue like an Instagram mention.
            -   **What to change:** The text content within this `<span>` (e.g., `@easternAngel`).
            -   **Optional:** You can remove the entire `<span class="instCommentMention">...</span>` if the comment doesn't have a mention.
            -   **Important:** If you use a mention, make sure there's a space _after_ the closing `</span>` and before the rest of the comment text (e.g., `<span class="instCommentMention">@easternAngel</span> answer your phone.`).

    #### iii. Reply/Like Info (`<p class="instCommentReplyText">`)

    -   Shows the like count and the "Reply" text.
    -   **What not to change:** `class="instCommentReplyText"`

        -   **Like Count (`<span class="instCommentLikeCount">...</span>`)**

            -   Displays how many likes the comment has.
            -   **What to change:** The text content inside the `<span>` (e.g., `1 like`, `4 likes`). You can omit this `<span>` entirely if there are no likes.
            -   **What not to change:** `class="instCommentLikeCount"`

        -   **Reply Text (`<span aria-hidden="true">Reply</span>`)**
            -   **Purpose:** Visually displays "Reply". `aria-hidden="true"` prevents screen readers from reading "Reply" as it's often redundant after the comment text.
        -   **Accessibility note:**
            -   I don't feel like reding this off adds value, so I told screen readers to skip it with the attribute `aria-hidden="true"`. If you want a screen reader to read the word Reply, remove that attribute

### C. The Like Button (`<svg class="instCommentLike">...</svg>`)

-   The heart icon next to each comment.
-   **What to change:**
    -   **Unfilled Heart:** To show an unfilled heart (not liked), use the SVG provided for the first comment in the main HTML. The `path` element should have `fill="none"` and `stroke="#808080"`.
    -   **Filled Heart:** To show a filled heart (liked), use the SVG provided for the second comment. The `path` element should have `fill="#808080"` and `stroke="#808080"`.
-   **What not to change:**
    -   `class="instCommentLike"`
    -   `width`, `height`, `viewBox`, `fill="none"`, `xmlns`, `role`, `aria-hidden="true"` on the main `<svg>` tag.
    -   The `d` attribute of the `<path>` element (this defines the shape of the heart).
-   **Accessibility note:**
    -   The rule of thumb with announcing images is if they add value. I don't feel this adds value, so I instructed screen readers to skip it with the attribute `aria-hidden="true"`. If you want a screen reader to read it off, swap that with `aria-label="Unfilled/filled like button"` but I don't feel it's necessary since the number of likes is read out at the end of the comment

---

## 4. Troubleshooting & Tips

-   **"My comment isn't styled!"**
    -   Double-check that it's wrapped inside `<div class="instCommentContainer">`.
    -   Ensure all the `class` attributes on your `div`s, `span`s, and `img`s match the examples exactly (e.g., `instSingleCommentWrapper`, `instCommentAvatar`). Typo in a class name will prevent styles from applying.
-   **AO3 Specifics:**
    -   The CSS includes rules to remove `<br />` tags and reset `<p>` margins that AO3 sometimes inserts, helping maintain the intended layout.
    -   If you toggle to preview and then return to your html or come back and edit a posted chapter, you might find AO3 changed some things. They parse your html and then add or change it for a few reasons
-   **Accessibility:**
    -   Remember to update the `alt` attribute on `<img>` tags for screen readers!
    -   `aria-hidden="true"` is used on some elements (like the like SVG and the "Reply" text) to prevent screen readers from reading out redundant information.

---

## 5. Something is broken or doesn't look right

-   If things don't look right and you can't figure it out, reach out. It might be my code, it might be a typo, or it might be your browser. My fandom email is in my github bio

---

## 6. Links!

-   [I made a playground](https://codepen.io/impose-crowes/pen/WbvqPNm) with the example comments. You can edit the HTML and see how things change if you want
-   [Here's a nice HTML 101](https://www.w3schools.com/html/html_intro.asp)
