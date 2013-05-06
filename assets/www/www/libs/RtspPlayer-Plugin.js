/*
 * PhoneGap is available under *either* the terms of the modified BSD license *or* the
 * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.
 *
 * Copyright (c) 2005-2010, Nitobi Software Inc.
 * Copyright (c) 2011, IBM Corporation
 */

/**
 * Constructor
 */
function RtspPlayer() {
};

/**
 * Starts the video player intent
 *
 * @param url           The url to play
 */
RtspPlayer.prototype.play = function(url) {
	//alert(url);
    PhoneGap.exec(null, null, "RtspPlayer", "playVideo", [url]);
};

/**
 * Load RtspPlayer
 */
PhoneGap.addConstructor(function() {
    PhoneGap.addPlugin("RtspPlayer", new RtspPlayer());
});
