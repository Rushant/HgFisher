/*
 * PhoneGap is available under *either* the terms of the modified BSD license *or* the
 * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.
 *
 * Copyright (c) 2005-2010, Nitobi Software Inc.
 * Copyright (c) 2011, IBM Corporation
 */

package com.phonegap.plugins;

import org.json.JSONArray;
import org.json.JSONException;

import android.content.Intent;
import android.net.Uri;

import com.phonegap.api.Plugin;
import com.phonegap.api.PluginResult;

public class RtspPlayer extends Plugin {
   //private static final String YOU_TUBE = "youtube.com";

    @Override
    public PluginResult execute(String action, JSONArray args, String callbackId) {
        PluginResult.Status status = PluginResult.Status.OK;
        String result = "";

        try {
            if (action.equals("playVideo")) {
                playVideo(args.getString(0));
            }
            else {
                status = PluginResult.Status.INVALID_ACTION;
            }
            return new PluginResult(status, result);
        } catch (JSONException e) {
            return new PluginResult(PluginResult.Status.JSON_EXCEPTION);
        }
    }

    private void playVideo(String url) {
        // Create URI
        Uri uri = Uri.parse(url);
    	Intent mIntent = new Intent("android.whut.action.RTSP",uri);  
       // mIntent.setAction("android.whut.action.RTSP");  
       // mIntent.setData(uri);
        this.ctx.startActivity(mIntent);
    }
}
