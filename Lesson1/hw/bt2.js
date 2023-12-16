let person = {
    ten: "Nguyễn Văn A",
    tuoi: 30,
    diachi: "Hà Nội"
}
 let country = {
    ten: "VietNam",
    danso: 100000,
    thudo: {
        ten: "Hà Nội",
        danso:50000
    }
 }

 function lienketthuoctinh(obj){
    for(var key of obj){
        console.log(key + " : "+obj[key]);
    }
 }
 lienketthuoctinh(country)