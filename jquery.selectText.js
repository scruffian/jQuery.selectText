/*global jQuery*/
(function ($) {
	"use strict";
    $.fn.selectText = function () {
		var methods = {
			deselect_all_text_in_document: function () {
				if (document.selection) {
					document.selection.empty();
				} else if (window.getSelection) {
					window.getSelection().removeAllRanges();
				}
			},
			select_text_by_id: function (element) {
				var range;
				if (document.selection) {
					range = document.body.createTextRange();
					range.moveToElementText(element);
					range.select();
				} else if (window.getSelection) {
					range = document.createRange();
					range.selectNode(element);
					window.getSelection().addRange(range);
				}
				return range
			}
		};

		methods.deselect_all_text_in_document();
		this.each(function () {
			return methods.select_text_by_id(this);
		});
		
	};
	$('.selectText').on('click', function (event) {
		event.preventDefault();
		var targetElementSelector = $(this).attr('href');
		if (!targetElementSelector) {
			targetElementSelector = $(this).data('targetSelector');
		}
		$(targetElementSelector).selectText();
	});
}(jQuery));