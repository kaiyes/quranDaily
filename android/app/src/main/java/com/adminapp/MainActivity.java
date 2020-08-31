package com.adminapp;

import com.facebook.react.ReactActivity;

import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen; // here

public class MainActivity extends ReactActivity {
	  @Override
  	   protected void onCreate(Bundle savedInstanceState) {
          SplashScreen.show(this);  // here
          super.onCreate(savedInstanceState);
     }

  @Override
  protected String getMainComponentName() {
    return "DeenTracker";
  }
}
