# typeform-embed-tab

![Typeform embed tab](https://i.imgur.com/pCybjvb.gif)

Just include the following script at the bottom of the body tag in your page to embed it:

```
<script src="https://cdn.jsdelivr.net/gh/scabfos/typeform-embed-tab@master/src/typeform-tab.min.js"></script>
<script type="text/javascript">
  TYPEFORM_FEEDBACK.init({
    url: {URL_TO_YOUR_FORM_HERE},
    title: {YOUR_DESIRED_TAB_TEXT},
  })
</script>
```

All collaboration appreciated!

# Some ideas to implement:
- Automatic minify
- Support themes?
- Support custom icon?
- Improve responsive
- Use Typeform Hooks to auto close the form on submit?
- ANYTHING YOU COME UP WITH!
