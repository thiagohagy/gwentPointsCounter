package com.tns.gen.android.media;

public class MediaPlayer_OnCompletionListener implements android.media.MediaPlayer.OnCompletionListener {
	public MediaPlayer_OnCompletionListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onCompletion(android.media.MediaPlayer param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onCompletion", void.class, args);
	}

}
