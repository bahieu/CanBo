function CanBo(cName, dOB, gender, address) {
  this.cName = cName;
  this.dOB = dOB;
  this.gender = gender;
  this.address = address;
}
CanBo.prototype.setCName = function (cName) {
  this.cName = cName;
};
CanBo.prototype.getCName = function () {
  return this.cName;
};
CanBo.prototype.setDOB = function (dOB) {
  this.dOB = dOB;
};
CanBo.prototype.getDOB = function () {
  return this.dOB;
};
CanBo.prototype.setGender = function (gender) {
  this.gender = gender;
};
CanBo.prototype.getGender = function () {
  return this.gender;
};
CanBo.prototype.setAddress = function (address) {
  this.address = address;
};
CanBo.prototype.getAddress = function () {
  return this.address;
};

CanBo.prototype.inputInfo =function(){
    this.setCName(prompt('Nhập tên: '));
  this.setDOB(prompt('Nhập ngày sinh: '));
  this.setGender(prompt('Nhập giới tính: '));
  this.setAddress(prompt('Nhập địa chỉ: '));
}

CanBo.prototype.printInfo = function () {
  console.log(`Thông tin:
    - Name: ${this.getCName()}
    - Date Of Birth: ${this.getDOB()}
    - Gender: ${this.getGender()}
    - Address: ${this.getAddress()}`);
};
// Khởi tạo đối tượng nhân viên
function NhanVien(job) {
  this.job = job;
}
NhanVien.prototype = new CanBo();
NhanVien.prototype.setJob = function (job) {
  this.job = job;
};
NhanVien.prototype.getJob = function () {
  return this.job;
};

// Khởi tạo đối tượng kỹ sư
function KySu(major) {
  this.major = major;
}
KySu.prototype = new CanBo();
KySu.prototype.setMajor = function (major) {
  this.major = major;
};
KySu.prototype.getMajor = function () {
  return this.major;
};

//Khởi tạo đối tượng công nhân
function CongNhan(level) {
  this.level = level;
}
CongNhan.prototype = new CanBo();
CongNhan.prototype.setLevel = function (level) {
  this.level = level;
};
CongNhan.prototype.getLevel = function () {
  return this.level;
};

var number = Number(prompt("Nhập số lượng cán bộ: "));
var listOfCB = [number];

for (var i = 0; i < number; i++) {
  var chosse = Number(prompt("Chọn cán bộ (1-Kỹ sư, 2-Nhân viên, 3-Công nhân)"));

  switch (chosse) {
    case 1:
      listOfCB[i] = new KySu();
      listOfCB[i].inputInfo();
      listOfCB[i].setMajor(prompt('Nhập chuyên ngành:'));
      break;
    case 2:
      listOfCB[i] = new NhanVien();
      listOfCB[i].inputInfo();
      listOfCB[i].setJob(prompt('Nhập công việc: '));
      break;
    case 3:
      listOfCB[i] = new CongNhan();
      listOfCB[i].inputInfo();
      listOfCB[i].setLevel(prompt('Nhập bậc: '));
      break;
    default:
      listOfCB[i] = new KySu();
      listOfCB[i].inputInfo();
      listOfCB[i].setMajor(prompt('Nhập chuyên ngành:'));
      break;
  }  
}

for(var i =0;i<number;i++){
    listOfCB[i].printInfo();
}
