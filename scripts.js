"use strict";

//business 2017 start

var loan_234x240_b_2017 = '<iframe src="banners/2017/business/234x240/234X240 Business.html" class="loan_234x240"></iframe>';
var loan_300x240_b_2017 = '<iframe src="banners/2017/business/300x240/300X240 Business.html" class="loan_300x240"></iframe>';
var loan_320x240_b_2017 = '<iframe src="banners/2017/business/320x240/320x240 Business.html" class="loan_320x240"></iframe>';
var loan_728x90_b_2017 = '<iframe src="banners/2017/business/728x90/728x90 Business.html" class="loan_728x90"></iframe>';
var loan_1183x113_b_2017 = '<iframe src="banners/2017/business/1183x113/1183x113 Business.html" class="loan_1183x113"></iframe>';

//business 2017 end

//auto 2017 start

var loan_240x350_a_2017 = '<iframe src="banners/2017/auto/240x350/240X350_car.html" class="loan_240x350"></iframe>';
var loan_240x150_a_2017 = '<iframe src="banners/2017/auto/240x150/240X150_car.html" class="loan_240x150"></iframe>';
var loan_285x285_a_2017 = '<iframe src="banners/2017/auto/285x285/285X285_car.html" class="loan_285x285"></iframe>';
var loan_320x240_a_2017 = '<iframe src="banners/2017/auto/320x240/320X240_car.html" class="loan_320x240"></iframe>';
var loan_940x119_a_2017 = '<iframe src="banners/2017/auto/940x119/940X119_car.html" class="loan_940x119"></iframe>';

//auto 2017 end

//house 2017 start

var loan_234x240_h_2017 = '<iframe src="banners/2017/house/234x240/234X240 House.html" class="loan_234x240"></iframe>';
var loan_240x350_h_2017 = '<iframe src="banners/2017/house/240x350/240X350 House.html" class="loan_240x350"></iframe>';
var loan_295x300_h_2017 = '<iframe src="banners/2017/house/295x300/295X300 House.html" class="loan_295x300"></iframe>';
var loan_320x240_h_2017 = '<iframe src="banners/2017/house/320x240/320X240 House.html" class="loan_320x240"></iframe>';
var loan_350x175_h_2017 = '<iframe src="banners/2017/house/350x175/340X175_house.html" class="loan_350x175"></iframe>';
var loan_728x90_h_2017 = '<iframe src="banners/2017/house/728x90/728X90 House.html" class="loan_728x90"></iframe>';
var loan_940x110_h_2017 = '<iframe src="banners/2017/house/940x110/940X110 House.html" class="loan_940x110"></iframe>';

//house 2017 end

//auto 2018 start

var loan_240x400_a_2018 = '<iframe src="banners/2018/auto/240x400/240x400_car.html" class="loan_240x400"></iframe>';
var loan_240x350_a_2018 = '<iframe src="banners/2018/auto/240x350/240x350_car.html" class="loan_240x350"></iframe>';
var loan_240x150_a_2018 = '<iframe src="banners/2018/auto/240x150/240x150_car.html" class="loan_240x150"></iframe>';
var loan_250x500_a_2018 = '<iframe src="banners/2018/auto/250x500/250x500_car.html" class="loan_250x500"></iframe>';
var loan_250x768_a_2018 = '<iframe src="banners/2018/auto/250x768/250x768_car.html" class="loan_250x768"></iframe>';
var loan_320x240_a_2018 = '<iframe src="banners/2018/auto/320x240/320x240_car.html" class="loan_320x240"></iframe>';
var loan_388x500_a_2018 = '<iframe src="banners/2018/auto/388x500/388x500_car.html" class="loan_388x500"></iframe>';
var loan_120x600_a_2018 = '<iframe src="banners/2018/auto/120x600/120x600_car.html" class="loan_120x600"></iframe>';

//auto 2018 end

//house 2018 start

var loan_233x300_h_2018 = '<iframe src="banners/2018/house/233x300/233x300_house.html" class="loan_233x300"></iframe>';
var loan_240x350_h_2018 = '<iframe src="banners/2018/house/240x350/240x350_house.html" class="loan_240x350"></iframe>';
var loan_350x175_h_2018 = '<iframe src="banners/2017/house/350x175/340X175_house.html" class="loan_350x175"></iframe>';

//house 2018 end

//startup 2018 start

var loan_320x240_s_2018 = '<iframe src="banners/2018/startup/320x240/320x240_startup.html" class="loan_320x240"></iframe>';
var loan_120x600_s_2018 = '<iframe src="banners/2018/startup/120x600/120x600_startup.html" class="loan_120x600"></iframe>';

//startup 2018 end

//auto 2019 start

var loan_233x300_a_2019 = '<iframe src="banners/2019/auto/233x300/233x300_car.html" class="loan_233x300"></iframe>';
var loan_240x350_a_2019 = '<iframe src="banners/2019/auto/240x350/240x350_car.html" class="loan_240x350"></iframe>';
var loan_250x768_a_2019 = '<iframe src="banners/2019/auto/250x768/250x768_car.html" class="loan_250x768"></iframe>';
var loan_320x240_a_2019 = '<iframe src="banners/2019/auto/320x240/320x240_car.html" class="loan_320x240"></iframe>';
var loan_600x90_a_2019 = '<iframe src="banners/2019/auto/600x90/600x90_car.html" class="loan_600x90"></iframe>';
var loan_700x90_a_2019 = '<iframe src="banners/2019/auto/700x90/700x90_car.html" class="loan_700x90"></iframe>';

//auto 2019 end

$( document ).ready(function() {

	//business 2017 start

	$('#clicker_234x240_b_2017').on('click', function() {
		$('.b_2017 h3').removeClass('active_h3');
		$('#clicker_234x240_b_2017').addClass('active_h3');
		$('div.b_2017 > .iframe_div > iframe').replaceWith(loan_234x240_b_2017);
	});

	$('#clicker_300x240_b_2017').on('click', function() {
		$('.b_2017 h3').removeClass('active_h3');
		$('#clicker_300x240_b_2017').addClass('active_h3');
		$('div.b_2017 > .iframe_div > iframe').replaceWith(loan_300x240_b_2017);
	});

	$('#clicker_320x240_b_2017').on('click', function() {
		$('.b_2017 h3').removeClass('active_h3');
		$('#clicker_320x240_b_2017').addClass('active_h3');
		$('div.b_2017 > .iframe_div > iframe').replaceWith(loan_320x240_b_2017);
	});

	$('#clicker_728x90_b_2017').on('click', function() {
		$('.b_2017 h3').removeClass('active_h3');
		$('#clicker_728x90_b_2017').addClass('active_h3');
		$('div.b_2017 > .iframe_div > iframe').replaceWith(loan_728x90_b_2017);
	});

	$('#clicker_1183x113_b_2017').on('click', function() {
		$('.b_2017 h3').removeClass('active_h3');
		$('#clicker_1183x113_b_2017').addClass('active_h3');
		$('div.b_2017 > .iframe_div > iframe').replaceWith(loan_1183x113_b_2017);
	});

	//business 2017 end

	//auto 2017 start

	$('#clicker_240x350_a_2017').on('click', function() {
		$('.a_2017 h3').removeClass('active_h3');
		$('#clicker_240x350_a_2017').addClass('active_h3');
		$('div.a_2017 > .iframe_div > iframe').replaceWith(loan_240x350_a_2017);
	});

	$('#clicker_240x150_a_2017').on('click', function() {
		$('.a_2017 h3').removeClass('active_h3');
		$('#clicker_240x150_a_2017').addClass('active_h3');
		$('div.a_2017 > .iframe_div > iframe').replaceWith(loan_240x150_a_2017);
	});

	$('#clicker_285x285_a_2017').on('click', function() {
		$('.a_2017 h3').removeClass('active_h3');
		$('#clicker_285x285_a_2017').addClass('active_h3');
		$('div.a_2017 > .iframe_div > iframe').replaceWith(loan_285x285_a_2017);
	});

	$('#clicker_320x240_a_2017').on('click', function() {
		$('.a_2017 h3').removeClass('active_h3');
		$('#clicker_320x240_a_2017').addClass('active_h3');
		$('div.a_2017 > .iframe_div > iframe').replaceWith(loan_320x240_a_2017);
	});

	$('#clicker_940x119_a_2017').on('click', function() {
		$('.a_2017 h3').removeClass('active_h3');
		$('#clicker_940x119_a_2017').addClass('active_h3');
		$('div.a_2017 > .iframe_div > iframe').replaceWith(loan_940x119_a_2017);
	});

	//auto 2017 end

	//house 2017 start

	$('#clicker_234x240_h_2017').on('click', function() {
		$('.h_2017 h3').removeClass('active_h3');
		$('#clicker_234x240_h_2017').addClass('active_h3');
		$('div.h_2017 > .iframe_div > iframe').replaceWith(loan_234x240_h_2017);
	});

	$('#clicker_240x350_h_2017').on('click', function() {
		$('.h_2017 h3').removeClass('active_h3');
		$('#clicker_240x350_h_2017').addClass('active_h3');
		$('div.h_2017 > .iframe_div > iframe').replaceWith(loan_240x350_h_2017);
	});

	$('#clicker_295x300_h_2017').on('click', function() {
		$('.h_2017 h3').removeClass('active_h3');
		$('#clicker_295x300_h_2017').addClass('active_h3');
		$('div.h_2017 > .iframe_div > iframe').replaceWith(loan_295x300_h_2017);
	});

	$('#clicker_320x240_h_2017').on('click', function() {
		$('.h_2017 h3').removeClass('active_h3');
		$('#clicker_320x240_h_2017').addClass('active_h3');
		$('div.h_2017 > .iframe_div > iframe').replaceWith(loan_320x240_h_2017);
	});

	$('#clicker_350x175_h_2017').on('click', function() {
		$('.h_2017 h3').removeClass('active_h3');
		$('#clicker_350x175_h_2017').addClass('active_h3');
		$('div.h_2017 > .iframe_div > iframe').replaceWith(loan_350x175_h_2017);
	});

	$('#clicker_728x90_h_2017').on('click', function() {
		$('.h_2017 h3').removeClass('active_h3');
		$('#clicker_728x90_h_2017').addClass('active_h3');
		$('div.h_2017 > .iframe_div > iframe').replaceWith(loan_728x90_h_2017);
	});

	$('#clicker_940x110_h_2017').on('click', function() {
		$('.h_2017 h3').removeClass('active_h3');
		$('#clicker_940x110_h_2017').addClass('active_h3');
		$('div.h_2017 > .iframe_div > iframe').replaceWith(loan_940x110_h_2017);
	});

	//house 2017 end

	//auto 2018 start

	$('#clicker_240x400_a_2018').on('click', function() {
		$('.a_2018 h3').removeClass('active_h3');
		$('#clicker_240x400_a_2018').addClass('active_h3');
		$('div.a_2018 > .iframe_div > iframe').replaceWith(loan_240x400_a_2018);
	});

	$('#clicker_240x350_a_2018').on('click', function() {
		$('.a_2018 h3').removeClass('active_h3');
		$('#clicker_240x350_a_2018').addClass('active_h3');
		$('div.a_2018 > .iframe_div > iframe').replaceWith(loan_240x350_a_2018);
	});

	$('#clicker_240x150_a_2018').on('click', function() {
		$('.a_2018 h3').removeClass('active_h3');
		$('#clicker_240x150_a_2018').addClass('active_h3');
		$('div.a_2018 > .iframe_div > iframe').replaceWith(loan_240x150_a_2018);
	});

	$('#clicker_250x500_a_2018').on('click', function() {
		$('.a_2018 h3').removeClass('active_h3');
		$('#clicker_250x500_a_2018').addClass('active_h3');
		$('div.a_2018 > .iframe_div > iframe').replaceWith(loan_250x500_a_2018);
	});

	$('#clicker_250x768_a_2018').on('click', function() {
		$('.a_2018 h3').removeClass('active_h3');
		$('#clicker_250x768_a_2018').addClass('active_h3');
		$('div.a_2018 > .iframe_div > iframe').replaceWith(loan_250x768_a_2018);
	});

	$('#clicker_320x240_a_2018').on('click', function() {
		$('.a_2018 h3').removeClass('active_h3');
		$('#clicker_320x240_a_2018').addClass('active_h3');
		$('div.a_2018 > .iframe_div > iframe').replaceWith(loan_320x240_a_2018);
	});

	$('#clicker_388x500_a_2018').on('click', function() {
		$('.a_2018 h3').removeClass('active_h3');
		$('#clicker_388x500_a_2018').addClass('active_h3');
		$('div.a_2018 > .iframe_div > iframe').replaceWith(loan_388x500_a_2018);
	});

	$('#clicker_120x600_a_2018').on('click', function() {
		$('.a_2018 h3').removeClass('active_h3');
		$('#clicker_120x600_a_2018').addClass('active_h3');
		$('div.a_2018 > .iframe_div > iframe').replaceWith(loan_120x600_a_2018);
	});

	//auto 2018 end

	//house 2018 start

	$('#clicker_233x300_h_2018').on('click', function() {
		$('.h_2018 h3').removeClass('active_h3');
		$('#clicker_233x300_h_2018').addClass('active_h3');
		$('div.h_2018 > .iframe_div > iframe').replaceWith(loan_233x300_h_2018);
	});

	$('#clicker_240x350_h_2018').on('click', function() {
		$('.h_2018 h3').removeClass('active_h3');
		$('#clicker_240x350_h_2018').addClass('active_h3');
		$('div.h_2018 > .iframe_div > iframe').replaceWith(loan_240x350_h_2018);
	});

	$('#clicker_350x175_h_2018').on('click', function() {
		$('.h_2018 h3').removeClass('active_h3');
		$('#clicker_350x175_h_2018').addClass('active_h3');
		$('div.h_2018 > .iframe_div > iframe').replaceWith(loan_350x175_h_2018);
	});

	//house 2018 end

	//startup 2018 start

	$('#clicker_320x240_s_2018').on('click', function() {
		$('.s_2018 h3').removeClass('active_h3');
		$('#clicker_320x240_s_2018').addClass('active_h3');
		$('div.s_2018 > .iframe_div > iframe').replaceWith(loan_320x240_s_2018);
	});

	$('#clicker_120x600_s_2018').on('click', function() {
		$('.s_2018 h3').removeClass('active_h3');
		$('#clicker_120x600_s_2018').addClass('active_h3');
		$('div.s_2018 > .iframe_div > iframe').replaceWith(loan_120x600_s_2018);
	});
	//startup 2018 end

	//auto 2019 start

	$('#clicker_233x300_a_2019').on('click', function() {
		$('.a_2019 h3').removeClass('active_h3');
		$('#clicker_233x300_a_2019').addClass('active_h3');
		$('div.a_2019 > .iframe_div > iframe').replaceWith(loan_233x300_a_2019);
	});

	$('#clicker_240x350_a_2019').on('click', function() {
		$('.a_2019 h3').removeClass('active_h3');
		$('#clicker_240x350_a_2019').addClass('active_h3');
		$('div.a_2019 > .iframe_div > iframe').replaceWith(loan_240x350_a_2019);
	});

	$('#clicker_250x768_a_2019').on('click', function() {
		$('.a_2019 h3').removeClass('active_h3');
		$('#clicker_250x768_a_2019').addClass('active_h3');
		$('div.a_2019 > .iframe_div > iframe').replaceWith(loan_250x768_a_2019);
	});

	$('#clicker_320x240_a_2019').on('click', function() {
		$('.a_2019 h3').removeClass('active_h3');
		$('#clicker_320x240_a_2019').addClass('active_h3');
		$('div.a_2019 > .iframe_div > iframe').replaceWith(loan_320x240_a_2019);
	});

	$('#clicker_600x90_a_2019').on('click', function() {
		$('.a_2019 h3').removeClass('active_h3');
		$('#clicker_600x90_a_2019').addClass('active_h3');
		$('div.a_2019 > .iframe_div > iframe').replaceWith(loan_600x90_a_2019);
	});

	$('#clicker_700x90_a_2019').on('click', function() {
		$('.a_2019 h3').removeClass('active_h3');
		$('#clicker_700x90_a_2019').addClass('active_h3');
		$('div.a_2019 > .iframe_div > iframe').replaceWith(loan_700x90_a_2019);
	});

	//auto 2019 end

});
