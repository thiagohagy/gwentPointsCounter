package com.tns.gen.android.media;

public class MediaPlayer_OnInfoListener implements android.media.MediaPlayer.OnInfoListener {
	public MediaPlayer_OnInfoListener() {
		com.tns.Runtime.initInstance(this);
	}

	public boolean onInfo(android.media.MediaPlayer param_0, int param_1, int param_2)  {
		java.lang.Object[] args = new java.lang.Object[3];
		args[0] = param_0;
		args[1] = param_1;
		args[2] = param_2;
		return (boolean)com.tns.Runtime.callJSMethod(this, "onInfo", boolean.class, args);
	}

}
