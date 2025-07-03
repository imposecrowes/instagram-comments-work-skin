## Instagram Comment Work Skin
Adds Instagram comments to your fic

## There's a wiki!
See the wiki for specific examples and further explanations

## Structure of this repo
I wanted this to be super user friendly, but also match Instagram as much as possible, so the templates are a little complex. There is an example file and templates with placeholders, if that's easier for you. If you have any issues, you can email (see github bio) or leave a comment on the posted tutorial on AO3

## Accessibility
This work skin was created with screen readers in mind. If you have any suggestions or something reads wonky, please don't hesitate to share them - I'd love to learn how I can make the work skin better!
- Images are read out. A character's profile picture will read "image character's profile picture". This is done through the `alt` attribute
- Reply and like buttons are skipped. Since they don't *do* anything, I don't feel they add value. This is done through the attribute `aria-hidden` (`aria-hidden="true"`). The amount of likes will still read out, if you've set it

## Using with another work skin
If you choose to use this to render comments for your existing Instagram post and it's work skin, you can update this rule 

```
.instCommentContainer {
    max-width: 335px;
    margin: 0 auto;
    width: fit-content;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```

to this:

```
.instCommentContainer {
    width: 100%;
    max-width: 100%
}
```
and it should take up all available space but not overflow past the width of the content. I've only tested this with one, so no guarentees! You can also just drop this code below it. The style selectors are pretty strict so they shouldn't overlap.
