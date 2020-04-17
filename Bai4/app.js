//console.log("hello word");
//console.error("this is an error")
//console.warn("this is a warning")
//var num = 10;
//console.log(num);

//let str = "a string";
//console.log(str)

//str="a nother text"
//console.log(str)

//const PI="3.14"
//console.log(PI)

//PI=3.1415
//console.log(PI)

function run () {
    var foo = "Foo";
    let bar = "Bar";

    console.log(foo, bar);

    {
        var fiz = 20;
        console.log("inner:", fiz)
        let biz = "Bizz";
        console.log("biz");
    }
    console.log("ourter: ", fiz)
    console.log(biz);
}
run();
