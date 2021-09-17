let s = 10;

//return funct
arrfunc = () => {
    return 60;
}

for(let i=1; i<3; i++){//1,2
    s+= arrfunc();//10+ (60+60)
    console.log(s);
}