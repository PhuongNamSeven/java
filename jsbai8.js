	/*
	Noi dung 
	1/ nhap day du cac truong 
	2/ tendangnhap <30 
	3/ kiem tra email hop le 
	4/ tuoi deu la so trong khoang tu 10 den 20
	*/
	
	
	function NhanDangKi(){
		var biendk = document.getElementById("divdangky");
		var biendn = document.getElementById("divdangnhap"); /*id cua form*/
		
		biendk.style.display="block";
		biendn.style.display="none";
	}
	function NhanDangNhap(){
		var biendk = document.getElementById("divdangky");
		var biendn = document.getElementById("divdangnhap");
		
		biendn.style.display="block";
		biendk.style.display="none";
	}
	/*thong bao phai nhap tat ca cac truong*/
	function ktraBatBuocDangKi(){
		var pthongbao = document.getElementById ("pthongbao");
		var nghenghiep = document.getElementById ("nghenghiep");
		var nam = document.getElementById("nam");
		var nu = document.getElementById("nu");
		if(frmDangKi.tendangnhap.value == "" || frmDangKi.matkhau.value == "" 
			|| frmDangKi.email.value == "" || frmDangKi.tuoi.value ==""  ){
	
			pthongbao.style.display ="block";
			
			pthongbao.innerHTML = "Bạn cần nhập dữ liệu cho các trường đầy đủ !!!" +"<br/>";
			return false;
		} else if(nghenghiep.selectedIndex== 0) {
			pthongbao.style.display ="block";
			pthongbao.innerHTML = "Bạn phải chọn Nghề Nghiêp <br/>";
			return false;
		} else if(!nam.checked && !nu.checked){
			pthongbao.style.display ="block";
			pthongbao.innerHTML = "Bạn phải chọn Giới Tính <br/>";
			return false;
		} else {
			pthongbao.style.display ="none";
			return true;
		}
		
	}
	function kiemtraEmail(idTag) {
		var inputTag = document.getElementById(idTag);
		var pthongbao = document.getElementById ("pthongbao");	

		var email = /^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
		//var theP = document.getElementById("thongbao1");
		if(inputTag.value.match(email))
		{
			pthongbao.style.display ="none";
			return true; 
		} else{
			pthongbao.style.display = "block";
			pthongbao.innerHTML ="HÃY NHẬP EMAIL HỢP LỆ ";
			//theP.style.color = "red";
			return false;
		}
			
	}
	function kiemtrachieudaichuoi(idText, minlength, maxlength)
	{ 
		var inputText = document.getElementById(idText);
		var field = inputText.value; 
		var pthongbao = document.getElementById ("pthongbao");	
		if(field.length<minlength || field.length> maxlength){
			pthongbao.style.display = "block";
			pthongbao.innerHTML ="HÃY NHẬP vào giá trị từ  " + minlength +" đến " + maxlength;
			//theP.style.color = "red";
			return false;
		} else { 
			//alert('Your userid have accepted.');
			pthongbao.style.display ="none";
			return true;
		}

	}
	function kiemtraTuoi(minTuoi, maxTuoi, idTagThongBao){
		var pthongbao = document.getElementById (idTagThongBao);	
		var tuoi = document.getElementById("tuoi");
		//var inputTag = document.getElementById(idTag);
		var numbers = /^[0-9]+$/;
		//var theP = document.getElementById("thongbao1");
		if(tuoi.value.match(numbers))
		{
			//pthongbao.style.display ="none";
			var intTuoi = parseInt(tuoi.value);
			if(intTuoi> maxTuoi || intTuoi < minTuoi){
				pthongbao.style.display = "block";
				pthongbao.innerHTML ="HÃY NHẬP TUỔI TỪ "+ minTuoi + "ĐẾN "+ maxTuoi;
				return false;
			}else {
				pthongbao.style.display = "none";
				return true; 
			} 
			
		} else{
			pthongbao.style.display = "block";
			pthongbao.innerHTML ="HÃY NHẬP TẤT CẢ ĐỀU LÀ SỐ ";
			//theP.style.color = "red";
			return false;
		}
	}
	function KiemTraHopLe(){tuoi
		return ktraBatBuocDangKi() && kiemtrachieudaichuoi("tendangnhap",1,30) && kiemtraEmail("email") &&kiemtraTuoi(10,20,"pthongbao");
	}                                      /* tat ca kiem tra sai name.value 
											tru : select , dodai , tuoi  */