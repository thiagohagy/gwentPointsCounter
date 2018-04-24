package com.tns.gen.android.media;

public class AudioManager_OnAudioFocusChangeListener implements android.media.AudioManager.OnAudioFocusChangeListener {
	public AudioManager_OnAudioFocusChangeListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onAudioFocusChange(int param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onAudioFocusChange", void.class, args);
	}

}
