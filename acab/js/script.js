                          ////////////////////////////////////////////////////////////////////////////
                         // Code ci-dessous codé par TocToc de mydkong                             //
                        //                                                                        //
                       //                                                                        //
                      //                             .k        .K.                              //
                     //                          .xXXKo    .xXXXd.                             //
                    //                        .xXXXXXXXo'xXXXXXXXx.                           //
                   //   oXXx.              .xXXXXXXXX'   ,XXXXXXXXk.                         //
                  // oXXXXXXO,          .xXXXXXXXX.       .XXXXXXXXk,                       //
                 // .XXXXXXXX0;      .kXXXXXXXX.            KXXXXXXX0:        dc           //
                //    KXXXXXXXKc  .xXXXXXXXX.     TocToc     0XXXXXXXKc    dXXXKl         //
               //      OXXXXXXXXOXXXXXXXX.                    kXXXXXXXXlxXXXXXXXX.       //
              //        oXXXXXXXXXXXXX.                        dXXXXXXXXXXXXXX.         //
             //          kXXXXXXXXXO  mydkong.github.io/toctoc/  lXXXXXXXXXX.          //
            //        .kXXXXXXXXXXXO;                         '0XXXXXXXXXXk.          //
           //      'OXXXXXXXXXXXXXXX0:                     ;OXXXXXXXXXXXXXXk,        //
          //      .XXXXXXK   0XXXXXXXKl                 ;0XXXXXXXK .KXXXXXXX0:      //
         //         XXK       kXXXXXXXXo             ;0XXXXXXXK      KXXXXXXXKc    //
        //                     oXXXXXXXXx.        :0XXXXXXXK          0XXXXXXXKc  //
       //                       ;XXXXXXXXk'    ;0XXXXXXX0              xXXXXk    //
      //                         .XXXXXXXX0;,0XXXXXXX0                  ox      //
     //                            XXXXXK    kXXXX0                            //
    //                              0K        oO                              //
   //                                                                        //
  // TocToc                                                                 //
 //  Tous droits réservés                                                  //
////////////////////////////////////////////////////////////////////////////

const IMG_URL="img/dp/";
// const diapos=4; (déjà importé par diapositives)
var da=0;
var alert=true;
var fin=true;
const dp=document.querySelector(".dp");
const tidp=document.querySelector(".transition-img");
const aladiapo=(e)=>{
	const DIAPO_NUM=e;
	tidp.style.display="block";
	tidp.src=dp.src;
	tidp.style.transition="0.5s ease";
	dp.src=IMG_URL+String(DIAPO_NUM)+".png";
	tidp.style.display="none";
	setTimeout(()=>{ tidp.style.transition="" }, 600);
}

document.addEventListener("keydown", (e)=>{
	if(e.key="left arrow"){
		if(--da>=0){
			aladiapo(da);
			if(alert){
    	        if (dp.requestFullscreen) {
    	            dp.requestFullscreen();
    	        }
			    alert=!alert;
			}
    	}else if(fin){
    	    aladiapo("fin");
    	    fin=!fin;
    	}else{
    	    document.exitFullscreen();
    		window.location.reload();
    	}
	}else if(e.key="right arrow"){
		if(++da<=diapos-1){
			aladiapo(da);
			if(alert){
    	        if (dp.requestFullscreen) {
    	            dp.requestFullscreen();
    	        }
			    alert=!alert;
			}
	    }else if(fin){
	        aladiapo("fin");
	        fin=!fin;
	    }else{
	        document.exitFullscreen();
	    	window.location.reload();
	    }
	}else if((e.key="r")||(e.key="R")){
		window.location.reload()
	}
})

window.onload=()=>{
    aladiapo("db");
    document.querySelector("body").style.height=String(window.outerHeight-120)+"px";
    dp.style.height="100%"
}

document.addEventListener("click", ()=>{
	if(++da<=diapos-1){
		aladiapo(da);
		if(alert){
            if (dp.requestFullscreen) {
                dp.requestFullscreen();
            }
		    alert=!alert;
		}
    }else if(fin){
        aladiapo("fin");
        fin=!fin;
    }else{
        document.exitFullscreen();
    	window.location.reload();
    }
})

document.addEventListener("keydown", (e)=>{
    if(e.key=="F11"||e.key=="escape"){
        da=0;
        alert=true;
        if(++da<=diapos-1){
		    aladiapo(da);
	    	if(alert){
               if (dp.requestFullscreen) {
                   dp.requestFullscreen();
               }
	    	    alert=!alert;
	    	}
    	}else if(fin){
    	    aladiapo("fin");
    	    fin=!fin;
    	}else{
    	    document.exitFullscreen();
    	    window.location.reload();
    	}
    }
})
