function a() {
    b();
}
function b() {
    c();
}
function c() {
    return console.log("c"); //--1
}


function x() {
    y();
}
function y() {
    z();
}
function z() {
    return console.log("z"); //--2
}


setTimeout(x, 0);
a();