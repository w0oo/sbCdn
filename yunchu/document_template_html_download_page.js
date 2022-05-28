console.log(sessionStorage.getItem('is-template-html-edit'));
//showToast(sessionStorage.getItem('is-template-html-edit'));
if (sessionStorage.getItem('is-template-html-edit')) {
	var doc_tle_obj = document.querySelector('.doc_tle');
	var app_desc_obj = document.querySelector('.app_desc');
	var app_ver_obj = document.querySelector('.app_version');
	var app_icon_obj = document.querySelector('.app_icon');
	var screenshot_1_obj = document.querySelector('.screenshot_1');
	var screenshot_2_obj = document.querySelector('.screenshot_2');
	var screenshot_3_obj = document.querySelector('.screenshot_3');
	var screenshot_4_obj = document.querySelector('.screenshot_4');
	var screenshot_5_obj = document.querySelector('.screenshot_5');
	var email_obj = document.querySelector('.email');
	var qq_group_obj = document.querySelector('.qq_group');
	var down_url_obj = document.querySelector('.down_url');
	doc_tle_obj.contentEditable = true;
	document.querySelector('.update_log').contentEditable = true;
	app_desc_obj.contentEditable = true;
	document.querySelector('.package_name').contentEditable = true;
	app_ver_obj.contentEditable = true;
	document.querySelector('.update_time').contentEditable = true;
	document.querySelector('.author').contentEditable = true;
	document.querySelector('.go-top').style.display = 'none';
	app_icon_obj.onclick = function() {
		var value = prompt('设置应用图标', app_icon_obj.src);
		if (value) {
			app_icon_obj.src = value;
			setFavicon(value);
			setHeadMeta('shareimage',value);
		}
	}
	doc_tle_obj.onblur = function() {
		var tle = doc_tle_obj.innerText;
		setHeadTitle(tle);
		setHeadMeta('sharename', tle);
		setChildText('.foot-name',tle);
	}
	app_desc_obj.onblur = function() {
		var desc = app_desc_obj.innerText;
		setHeadMeta('description',desc);
		setHeadMeta('keywords',desc);
	}
	app_ver_obj.onblur = function() {
		setChildText('.app_ver',app_ver_obj.innerText);
	}
	screenshot_1_obj.onclick = function() {
		var value = prompt('设置截图1链接', screenshot_1_obj.src);
		if (value) {
			screenshot_1_obj.src = value;
		}
	}
	screenshot_2_obj.onclick = function() {
		var value = prompt('设置截图2链接', screenshot_2_obj.src);
		if (value) {
			screenshot_2_obj.src = value;
		}
	}
	screenshot_3_obj.onclick = function() {
		var value = prompt('设置截图3链接', screenshot_3_obj.src);
		if (value) {
			screenshot_3_obj.src = value;
		}
	}
	screenshot_4_obj.onclick = function() {
		var value = prompt('设置截图4链接', screenshot_4_obj.src);
		if (value) {
			screenshot_4_obj.src = value;
		}
	}
	screenshot_5_obj.onclick = function() {
		var value = prompt('设置截图5链接', screenshot_5_obj.src);
		if (value) {
			screenshot_5_obj.src = value;
		}
	}
	email_obj.onclick = function() {
		var value = prompt('设置邮箱地址', email_obj.href.replace('mailto:',''));
		if (value) {
			email_obj.href = 'mailto:' + value;
		}
		return false;
	}
	qq_group_obj.onclick = function() {
		var value = prompt('设置加群链接', qq_group_obj.href);
		if (value) {
			qq_group_obj.href = value;
		}
		return false;
	}
	down_url_obj.onclick = function() {
		var value = prompt('设置下载地址', down_url_obj.href);
		if (value) {
			down_url_obj.href = value;
		}
		return false;
	}
} else {
    document.querySelector('.go-top').style.display = '';
}
