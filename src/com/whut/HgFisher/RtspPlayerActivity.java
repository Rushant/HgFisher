package com.whut.HgFisher;

import android.graphics.PixelFormat;
import android.net.Uri;
import android.os.Bundle;
import android.widget.MediaController;
import android.widget.VideoView;

import com.phonegap.DroidGap;
import com.whut.HgFisher.R;



public class RtspPlayerActivity extends DroidGap {
   	

	//MediaPlayer mplayer = new MediaPlayer();
	public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
      			        
        //super.loadUrl("file:///android_asset/www/index.html");
        getWindow().setFormat(PixelFormat.TRANSLUCENT);
		setContentView(R.layout.video);
		// 获取界面上VideoView组件
		VideoView videoView = (VideoView) findViewById(R.id.video);
		// 创建MediaController对象
		MediaController mController = new MediaController(this);
		Uri url = getIntent().getData();	
		//Uri url = Uri.parse("rtsp://admin:12345@192.168.1.20/mpeg4/ch1/sub/av_stream");
		videoView.setVideoURI(url);
		//Uri.parse("rtsp://admin:12345@192.168.1.20/mpeg4/ch1/sub/av_stream")
		videoView.setMediaController(mController);
		mController.setMediaPlayer(videoView);
		videoView.start();

	}
}