# jQuery.selectText

### Usage

* Any elements with the class "selectText" will be picked up by the plugin automatically. They will select the elements that are matched by the selector in the "href" attribute, if it has one, or the "data-target-selector" attribute otherwise.

* If you want to select the text in an element simply call $(selector).selectText();

### Notes

* Only 705 bytes!

### Limitations

* Not in IE (although it should work)

* Can only select one element at a time (except in Firefox) - this is a limitation of current browsers