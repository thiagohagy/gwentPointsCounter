package com.tns.gen.android.media;

public class MediaPlayer_OnPreparedListener implements android.media.MediaPlayer.OnPreparedListener {
	public MediaPlayer_OnPreparedListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onPrepared(android.media.MediaPlayer param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onPrepared", void.class, args);
	}

}
