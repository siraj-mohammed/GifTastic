# GifTastic

This GIF generator leverages the [Giphy](https://giphy.com/) API to retrieve images - both still and animated - based on the search terms entered by the user.

The project can be accessed [here](https://siraj-mohammed.github.io/GifTastic/)

The landing page allows users to add new search terms which are saved as buttons on top of the page.
If the search field is blank or the term already exists, no action is performed.
When a button is pressed, an API call is made to Giphy to pull back images that match the name of the button.
-- A button can only be pressed once. Pressing a button multiple times does not result in multiple API calls.
Still Images that are tagged "marvel", and are not rated R or PG-13, are then added to the page.
Clicking on the still images animates them; clicking them again stops the animation.

## Technologies/Libraries Used
* HTML
* CSS
* JavaScript/jQuery/AJAX
* Bootstrap