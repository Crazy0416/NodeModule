var os = require('os');


console.log("운영체제 이름: ", os.type());         // 운영체제 이름
console.log("운영체제 플랫폼: ", os.platform());     // 운영체제 플랫폼
console.log("운영체제 아키텍처: ", os.arch());         // 운영체제 아키텍처
console.log("운영체제 버전: ", os.release());      // 운영체제 버전
console.log("시스템 총 메모리: ", os.totalmem() / 1024 / 1024 / 1024, "GB");     // 시스템의 총 메모리
console.log("cpu 정보를 담은 객체: ", os.cpus());
console.log("네트워크 인터페이스 정보를 담은 배열: ", os.networkInterfaces()); // 네트워크 인터페이스 정보를 담은 배열