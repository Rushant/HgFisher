package com.whut.HgFisher;

import java.io.File;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import org.apache.http.client.HttpClient;
import com.android.DownLoadManager;
import com.android.UpdataInfo;
import com.android.UpdataInfoParser;
import com.phonegap.DroidGap;
import com.whut.HgFisher.HgFisherActivity;
import com.whut.HgFisher.R;
import android.app.AlertDialog;
import android.app.ProgressDialog;
import android.app.AlertDialog.Builder;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.os.Handler;
import android.os.Message;
import android.telephony.TelephonyManager;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.TextView;
import android.widget.Toast;

public class HgFisherActivity extends DroidGap {
    /** Called when the activity is first created. */
    TextView text=null;
    HttpClient httpClient;
	/** Called when the activity is first created. */
	private final int UPDATA_NONEED = 0;
	private final int UPDATA_CLIENT = 1;
	private final int GET_UNDATAINFO_ERROR = 2;
	private final int SDCARD_NOMOUNTED = 3;
	private final int DOWN_ERROR = 4;
	private boolean firstCheckUpdate = true;
   // private String imsi;
  //private String serverurl="http://zhny.0713.me:8080";
	private UpdataInfo info;
	private String localVersion;
	@Override
	
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        text = (TextView) findViewById(R.id.text);
        TelephonyManager tm = (TelephonyManager) this.getSystemService(Context.TELEPHONY_SERVICE);	
        String imsi = tm.getSubscriberId();  
       
        if(imsi!=null)
        {  
			 if(!imsi.startsWith("46003"))
			 {  
			        super.setIntegerProperty("splashscreen", R.drawable.splash);			        
			        super.loadUrl("file:///android_asset/www/www/index.html");	
			        try{
			   //     	GetPostUtil.sendPost(serverurl+"/WiseAgServer/Server/recordUser.jsp","appid=7&imsi="+imsi);
			        	//System.out.println(response);
			        }
			        catch(Exception e){
			        	e.printStackTrace();
			        }
			        update();			        			      
			 }
			 else
			 {
		    	//text.setText("非中国电信");
		    	new AlertDialog.Builder(this)  
		    	    .setTitle("温馨提示")
		    	    .setMessage("这款软件为电信用户定制，非电信用户无权使用")
		    	    .setPositiveButton("确定", new DialogInterface.OnClickListener(){
				    	public void onClick(DialogInterface dialog, int which) 
				    	{
				    		android.os.Process.killProcess(android.os.Process.myPid()); 
				    	}    		    	         
		    	    })
		    	    .setNegativeButton("取消", new DialogInterface.OnClickListener() 
		    	    {
		    	          public void onClick(DialogInterface dialog, int which) 
		    	          {
		    	            	android.os.Process.killProcess(android.os.Process.myPid());
		    	          }
		    	     })
		    	     .show();		    	  
		    }
		} 
        else
        {
	    	text.setText("无法识别");
	    }         
    }
	
	 private static final int ITEM_1 = Menu.FIRST;  
	 private static final int ITEM_2 = Menu.FIRST+1;  
	 private static final int ITEM_3 = Menu.FIRST+2;  
	 
	  //覆盖onCreateOptionsMenu(Menu menu)来添加菜单项  
	    public boolean onCreateOptionsMenu(Menu menu) {  
	        //android.R使用的是系统自带的图标  
	        menu.add(0, ITEM_1, 0, "升级").setIcon(android.R.drawable.stat_sys_download);  
	        menu.add(0, ITEM_2, 0, "关于").setIcon(android.R.drawable.ic_dialog_info);  
	        menu.add(0, ITEM_3, 0, "退出").setIcon(android.R.drawable.ic_menu_close_clear_cancel);  
	        return true;  
	    }  
	    //覆盖onOptionsItemSelected(MenuItem item)来响应菜单选项被单击事件  
	    public boolean onOptionsItemSelected(MenuItem item) {  
	        switch (item.getItemId()) {  
	        case ITEM_1:  
	        	update();  
	            break;  
	        case ITEM_2:  
	        	showAbout();  
	            break; 
	        case ITEM_3:  
	        	finish();  
	            break;  
	        }  
	        return true;  
	    }  
	    
	    public void update(){  
			try {
				localVersion = getVersionName();
				//textView.setText(localVersion);

				CheckVersionTask cv = new CheckVersionTask();
				new Thread(cv).start();

			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	    }  
	    
	    public void showAbout() {  
			try {
				localVersion = getVersionName();
				/** 创建一个弹出对话框对象设置标题,消息体,按钮事件*/  
		        new AlertDialog.Builder(this).setTitle("关于")
		        	.setMessage("水产e通"+localVersion).setPositiveButton("确定",
		        		new DialogInterface.OnClickListener() 
		        		{  
		        			public void onClick(DialogInterface dialog, int which) {  
		        		}  
		        }).show();  

			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

	    }  
	    
	    /*
		 * 获取当前程序的版本号
		 */
		private String getVersionName() throws Exception {
			// 获取packagemanager的实例
			PackageManager packageManager = getPackageManager();
			// getPackageName()是你当前类的包名，0代表是获取版本信息
			PackageInfo packInfo = packageManager.getPackageInfo(getPackageName(),
					0);
			return packInfo.versionName;
		}
		
		/*
		 * 从服务器获取xml解析并进行比对版本号
		 */
		public class CheckVersionTask implements Runnable {

			public void run() {
				try {
					// 从资源文件获取服务器 地址
					String path = getResources().getString(R.string.url_server);
					// 包装成url的对象
					URL url = new URL(path);
					HttpURLConnection conn = (HttpURLConnection) url
							.openConnection();
					conn.setConnectTimeout(5000);
					InputStream is = conn.getInputStream();
					info = UpdataInfoParser.getUpdataInfo(is);
					if (firstCheckUpdate && (info.getVersion().compareTo(localVersion)<=0) ) {
						firstCheckUpdate = false;
					}
					else if (firstCheckUpdate && (info.getVersion().compareTo(localVersion)>0)) {
						Log.i(TAG, "检测到大版本号 ,提示用户升级 ");
						Message msg = new Message();
						msg.what = UPDATA_CLIENT;
						handler.sendMessage(msg);
					}
					else if (!firstCheckUpdate && (info.getVersion().compareTo(localVersion)<=0) ) {
						Log.i(TAG, "版本号相同无需升级");
						Message msg = new Message();
						msg.what = UPDATA_NONEED;
						handler.sendMessage(msg);
						// LoginMain();
					}
					else {
						Log.i(TAG, "检测到大版本号,提示用户升级 ");
						Message msg = new Message();
						msg.what = UPDATA_CLIENT;
						handler.sendMessage(msg);
					}
					
				} catch (Exception e) {
					// 待处理
					Message msg = new Message();
					msg.what = GET_UNDATAINFO_ERROR;
					handler.sendMessage(msg);
					e.printStackTrace();
				}
			}
		}
		
		Handler handler = new Handler() {

			@Override
			public void handleMessage(Message msg) {
				// TODO Auto-generated method stub
				super.handleMessage(msg);
				switch (msg.what) {
				case UPDATA_NONEED:
					Toast.makeText(getApplicationContext(), "您的软件已经是最新版",
							Toast.LENGTH_SHORT).show();
					break;
				case UPDATA_CLIENT:
					// 对话框通知用户升级程序
					// Toast.makeText(getApplicationContext(), "可以升级程序啦~",
					// 1).show();
					showUpdataDialog();
					break;
				case GET_UNDATAINFO_ERROR:
					// 服务器超时
					Toast.makeText(getApplicationContext(), "获取服务器更新信息失败", 1)
							.show();
					// LoginMain();
					break;
				case SDCARD_NOMOUNTED:
					// sdcard不可用
					Toast.makeText(getApplicationContext(), "SD卡不可用",1).show();
					break;
				case DOWN_ERROR:
					// 下载apk失败
					Toast.makeText(getApplicationContext(), "下载新版本失败", 1).show();
					// LoginMain();
					break;
				}
			}
		};
		
		/*
		 * 
		 * 弹出对话框通知用户更新程序
		 * 
		 * 弹出对话框的步骤： 1.创建alertDialog的builder. 2.要给builder设置属性, 对话框的内容,样式,按钮
		 * 3.通过builder 创建一个对话框 4.对话框show()出来
		 */
		protected void showUpdataDialog() {
			AlertDialog.Builder builer = new Builder(this);
			builer.setTitle("版本升级");
			builer.setMessage(info.getDescription());
			// 当点确定按钮时从服务器上下载 新的apk 然后安装
			builer.setPositiveButton("确定", new DialogInterface.OnClickListener() {
				public void onClick(DialogInterface dialog, int which) {
					Log.i(TAG, "下载apk,更新");
					downLoadApk();
				}
			});
			// 当点取消按钮时进行登录
			builer.setNegativeButton("取消", new DialogInterface.OnClickListener() {
				public void onClick(DialogInterface dialog, int which) {
					// TODO Auto-generated method stub
					// LoginMain();
				}
			});
			AlertDialog dialog = builer.create();
			dialog.show();
		}
		

		/*
		 * 从服务器中下载APK
		 */
		protected void downLoadApk() {
			final ProgressDialog pd; // 进度条对话框
			pd = new ProgressDialog(HgFisherActivity.this);
			pd.setProgressStyle(ProgressDialog.STYLE_HORIZONTAL);
			pd.setMessage("正在下载更新");
			if (!Environment.getExternalStorageState().equals(
					Environment.MEDIA_MOUNTED)) {
				Message msg = new Message();
				msg.what = SDCARD_NOMOUNTED;
				handler.sendMessage(msg);
			} else {
				pd.show();
				new Thread() {
					@Override
					public void run() {
						try {
							File file = DownLoadManager.getFileFromServer(
									info.getUrl(), pd);
							sleep(1000);
							installApk(file);
							pd.dismiss(); // 结束掉进度条对话框

						} catch (Exception e) {
							Message msg = new Message();
							msg.what = DOWN_ERROR;
							handler.sendMessage(msg);
							e.printStackTrace();
						}
					}
				}.start();
			}
		}
		
		// 安装apk
		protected void installApk(File file) {
			Intent intent = new Intent();
			// 执行动作
			intent.setAction(Intent.ACTION_VIEW);
			// 执行的数据类型
			intent.setDataAndType(Uri.fromFile(file),
					"application/vnd.android.package-archive");
			startActivity(intent);
		}
	    	 
}