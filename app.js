new Vue({
    el: '#content',

    data: {
        markdownInput: "# Main Heading Here - Headings use '#'s \n### Sub Heading Here\n\n---\n\nMain info here - Paragraphs are just written as plain text\n\n---\n`code - Code uses '``'`\n\n ---\n\n[This is a link](http://google.com)\n\n Links use '[]' for the text portion and then '()' for the link portion\n\n---\n\n#### Raw html can also be used\n\n<ul><li>List item</li><li>Another list item</li></ul>\n\n---\n\n#### Images can also be used\nImages use '![ALT_TEXT]' at the start to say it's an image, follow with no spaces by '(IMAGE_LINK)'\n\n![](http://pngj.googlecode.com/git-history/2edf695f26ea116e37912a6b2c7f46b3c91e1a37/pngj/src/test/resources/testcomp/04-c2-filtered.png?r=2edf695f26ea116e37912a6b2c7f46b3c91e1a37)"
    },

    filters: { 
        marked: marked
    }
})