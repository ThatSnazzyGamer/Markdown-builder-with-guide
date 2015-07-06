new Vue({
    el: '#content',

    data: {
        markdownInput: "# Main Heading Here - Headings use '#'s \n ### Sub Heading Here \n\n --- \n\n Main info here - Paragraphs are just written as plain text \n\n --- \n `code - Code uses '``'` \n\n --- \n\n [This is a link](http://google.com) \n\n Links use '[]' for the text portion and then '()' for the link portion \n\n --- \n\n #### Raw html can also be used \n\n <ul><li>List item</li><li>Another list item</li></ul>"
    },

    filters: { 
        marked: marked
    }
})