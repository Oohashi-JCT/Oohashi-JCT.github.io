class Neon {
    neon_text ;
    neonColor = false ;
    constructor(elmname){
        this.neon_text = document.getElementsByClassName(elmname);
    }
    color1 = "rgba(226, 0, 184, 0.5)" ;
    color2 = "rgba(0,0,0,0.5)" ;
    changeColor_onNeon(){
            if(this.neonColor){
                for(let i = 0 ; i < this.neon_text.length; i ++){
                    this.neon_text[i].style.color = this.color1;
                }
                setTimeout(() => this.changeColor_onNeon(), Math.random()*400);
            }else{
                for(let i = 0 ; i < this.neon_text.length; i ++){
                    this.neon_text[i].style.color = this.color2;
                }
                setTimeout(() => this.changeColor_onNeon(), Math.random()*2000);
            }
            this.neonColor = !this.neonColor ;
    }
    start(){
            setTimeout(() => this.changeColor_onNeon(), Math.random()*200);
    }
    
}

const n1 = new Neon("neon_text");
n1.start();