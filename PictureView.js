var PictureView = Backbone.View.extend({
    //the goal of this app is to append HTML to the appID div.  on button click, fetch a random image from Flickr.
    el: "#app",

    initialize: function() {
        // listen to the sync on the picture collection. this will get called when the data is return from the api call
        this.listenTo(this.collection, 'add', this.render);
        //searchSuccess = render
        //this.render()
    },

    events: {
        //register for the click event on the search button
        'click .button': 'request'
    },
    request: function(event) {
        //prevent the default button behavior.
        event.preventDefault();
        // fetch the data for the collection
        var newPictures = new Pictures();
        //correct the this reference
        var self = this;
        //use new pictures to get a temporary collection of pictures and then set it to the views collection for use and saving
        newPictures.fetch({
            success: function(collection, response) {
                // on success, iterate and update
                collection.each(function(item) {
                    // create a new picture model
                    var picture = new Picture(item);
                    //set it to our view's collection for use later
                    self.collection.add(picture);
                });
            }
        });
    },
    render: function() {
        // clear all existing images
        $('#images').html('');
        // loop over the collection and add them to the DOM.
        this.collection.each(function(item) {
            $('#images').append('<img src="' + item.get('attributes').media.m + '" />');
        })
    }
});
// render: function() {
//         //actually renders on the DOM 
//         //initializing html variable to be appended
//         var appendedHTML;
//         //clearing out html
//         //this.$el.html('');
//         //iterating over fishes collection
//         this.collection.forEach(function(fishy) {
//             //getting name and image for each
//             appendedHTML = this.template({
//                 name: fishy.get('name'),
//                 image: fishy.get('image')
//             });
//             //appending the html to $el
//             this.$el.append($(appendedHTML));
//             //appending that to the body so it can be displayed

//         }, this);
//         $('body').append(this.$el);
//     }

// });
