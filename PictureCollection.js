var Pictures = Backbone.Collection.extend({
    model: Picture,
    //set the URL for the request, Backbone makes the AJAX request for you
    url: function() {
        // get the search term from the text field
        var searchTerm = $('#text').val();
        return 'http://api.flickr.com/services/feeds/photos_public.gne?tags=' + searchTerm + '&tagmode=any&format=json&jsoncallback=?';
    },
    //parse the response from the API call
    parse: function(response) {
        // return the items from the request these are stored in the "collection"
        return response.items
    }
});
