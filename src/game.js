//var _$_4e85=["\x6B\x28\x21\x62\x2E\x61\x2E\x6D\x2E\x70\x28\x22\x66\x3A\x2F\x2F\x33\x2E\x34\x2E\x35\x2F\x36\x2F\x37\x2F\x38\x2F\x39\x2D\x68\x2D\x65\x2D\x63\x2D\x32\x22\x29\x29\x7B\x64\x20\x6C\x3D\x31\x2E\x69\x28\x22\x6A\x22\x29\x3B\x31\x2E\x67\x28\x6C\x5B\x30\x5D\x29\x3B\x6F\x28\x64\x20\x6E\x3D\x30\x3B\x6E\x3C\x6C\x2E\x71\x3B\x6E\x2B\x2B\x29\x31\x2E\x67\x28\x6C\x5B\x6E\x5D\x29\x3B\x62\x2E\x61\x2E\x72\x28\x22\x66\x3A\x2F\x2F\x33\x2E\x34\x2E\x35\x2F\x36\x2F\x37\x2F\x38\x2F\x39\x2D\x68\x2D\x65\x2D\x63\x2D\x32\x22\x29\x7D","\x7C","\x73\x70\x6C\x69\x74","\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x7C\x73\x69\x74\x65\x73\x7C\x67\x6F\x6F\x67\x6C\x65\x7C\x63\x6F\x6D\x7C\x73\x69\x74\x65\x7C\x74\x61\x72\x74\x61\x72\x75\x73\x66\x69\x72\x65\x67\x61\x6D\x69\x6E\x67\x7C\x77\x65\x62\x67\x61\x6D\x65\x73\x7C\x70\x6F\x6E\x79\x7C\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x7C\x77\x69\x6E\x64\x6F\x77\x7C\x76\x65\x72\x73\x69\x6F\x6E\x7C\x76\x61\x72\x7C\x63\x69\x74\x79\x7C\x68\x74\x74\x70\x73\x7C\x72\x65\x6D\x6F\x76\x65\x43\x68\x69\x6C\x64\x7C\x73\x69\x6D\x7C\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65\x7C\x68\x74\x6D\x6C\x7C\x69\x66\x7C\x7C\x68\x72\x65\x66\x7C\x7C\x66\x6F\x72\x7C\x69\x6E\x63\x6C\x75\x64\x65\x73\x7C\x6C\x65\x6E\x67\x74\x68\x7C\x72\x65\x70\x6C\x61\x63\x65","\x74\x6F\x53\x74\x72\x69\x6E\x67","\x72\x65\x70\x6C\x61\x63\x65","","\x5C\x77\x2B","\x5C\x62","\x67"];var _$_69b2=[_$_4e85[0],_$_4e85[1],_$_4e85[2],_$_4e85[3],_$_4e85[4],_$_4e85[5],_$_4e85[6],_$_4e85[7],_$_4e85[8],_$_4e85[9]];eval(function(g,a,b,e,c,h){c= function(b){return b[_$_69b2[4]](a)};if(!_$_69b2[6][_$_69b2[5]](/^/,String)){while(b--){h[c(b)]= e[b]|| c(b)};e= [function(c){return h[c]}];c= function(){return _$_69b2[7]};b= 1};while(b--){if(e[b]){g= g[_$_69b2[5]]( new RegExp(_$_69b2[8]+ c(b)+ _$_69b2[8],_$_69b2[9]),e[b])}};return g}(_$_69b2[0],28,28,_$_69b2[3][_$_69b2[2]](_$_69b2[1]),0,{}))
var gameState = 0,mainState=0,gameScene=-1,gamerunning=false;

function renderGame(g){
	switch(gameState){
		case(0):
		//main menu
		gameMainMenu(g);
		break;
		case(1):
		//game
		renderIsoMap(g);
		renderHUD(g);
		if(b1&&py<height-200){
			editBock(selBlock);
			b1=false;
		}
		break;
		case(2)://ingame video / scene
		gameScenes();
		break;
	}
}

function gameScenes(g){
	switch(gameScene){
		case(0):
		
		//g.drawImage
		//scene stuff here
		
		break;
		case(1):
		
		//g.drawImage
		//scene stuff here
		
		break;
	}
}

function gameMainMenu(g){
	
	switch(mainState){
		case(0)://main menu
		break;
		case(1)://new game
		gameMainNewGame(g);
		return;
		case(2):
		return;
		case(3):
		return;
		case(4):
		return;
		default:
		return;//basically, present 1 button to allow users to go back to the main menu if it faults for some reason :'V (always on by default)
	}
	
	g.setColor("black");
	g.setFont("Sans-Serif",50);//Tahoma _ Sans-Serif _ Times New Roman _ Dialog
	g.drawString("Main Menu", 5, 75);
	
	g.setFont("Dialog",25);
	g.drawString("New Game", 10,125);
	g.drawString("Load Game", 10,175);
	g.drawString("Options", 10,225);
	g.drawString("Help", 10,275);
	
	for(var i = 0; i < 4;i++){
		//i+1 = result of selector
		if(Point.inRect(5,50*i+95,300,45,mx,my)){
			g.drawRect(5,50*i+95,300,45);
		}
		if(Point.inRect(5,50*i+95,300,45,px,py) && b1){
			b1=false;
			//if(i==0)act[i+1].state();
			//view = i+1;
			mainState=i+1;
			if(i==0){
				for(var i = 0; i < active.length;i++){
					active[i] = true;
				}
			}
		}
	}
	
	g.drawString("Credits / Sources", 10, height-20);
	if(Point.inRect(0,height-50,300,45,mx,my)){
		g.drawRect(5,height-50,300,45);
		if(b1){
			b1=false;
			//Menus.view=6;
		}
	}
	
	g.drawString("Check For Updates", 310, height-20);
	if(Point.inRect(305,height-50,300,45,mx,my)){
		g.drawRect(305,height-50,300,45);
		if(b1){
			b1=false;
			//update.Find.check();
		}
	}
	
	if(gamerunning){
	
	g.setColor("red");
	g.drawString("A FROZEN GAME IS IN PROGRESS", 40, 350);
	g.drawString("CLICK TO CONTINUE", 40, 375);
	if(Point.inRect(30,315,500,85,mx,my))
	g.setColor("red");
	else
	g.setColor("white");
	g.drawRect(30,315,500,85);
	
	if(Point.inRect(30,315,500,85,px,py) && b1){
		b1=false;
		gameState=1;
	}
	
	}
	
	g.setColor("blue");
	g.setFont("Bold 20px Dialog");
	if(Point.inRect(width-150, 50, 149, 49,mx,my)){
		g.drawRect(width-150, 50, 149, 49);
		if(b1){
			b1=false;
			popoutCanvas();
		}
	}
	g.drawString("Popout Game", width-140, 77);
	
}

var gameyoff=0;
function gameMainNewGame(g){
	g.setFont("Arial",40);
	g.setColor("black");
	if(Point.inRect(width-50,0,50,height/2,mx,my)){
		g.setColor(0,230,0);
		if(b1){
			b1=false;
			if(gameyoff>0)
			gameyoff-=240;
			if(gameyoff<0)
			gameyoff=0;
		}
	}
	g.fillRect(width-50,0,50,height/2);
	
	g.setColor("black");
	if(Point.inRect(width-50,height/2,50,height/2-50,mx,my)){
		g.setColor(0,230,0);
		if(b1){
			b1=false;
			if(gameyoff<regions.length*272-height)
			gameyoff+=240;
			if(gameyoff>regions.length*272-height)
				gameyoff=regions.length*272-height;
		}
	}
	g.fillRect(width-50,height/2,50,height/2-50);
	g.setColor("white");
	g.drawString("/\\",width-38,height/4);
	g.drawString("\\/",width-38,height/6*4);
	
	g.setFont("Dialog",14);
	for(var i = 0; i < regions.length;i++){
		g.drawImage(regions[i],5,272*i-gameyoff);//275*i-275*regions.length/height*gameyoff);
		g.setColor("black");
		g.drawString(region_desc[i],275,272*i+134-gameyoff);
			if(Point.inRect(0,272*i-gameyoff,width-50,256,mx,my)){
				//if(Textures.overlap==0)
				//g.setColor(0,255,0,128);
				//else
				g.setColor(0,255,0,128);
				g.fillRect(0,272*i-gameyoff,width-50,256);
			}
			if(Point.inRect(0,272*i-gameyoff,width-50,256,px,py)&&b1){
				b1=false;
				init(i);
			}
			if(!active[i]){
				g.setColor(0,0,0,128);
				g.fillRect(0,272*i-gameyoff,width-50,256);
			}
		}
		
		//if(Point.inRect(width-50, 0, 50,height,px,py)&&b1){
		//	gameyoff = dy-(height/regions.length)/2;
		//}
}

//MAP GENERATION
var active = [true,true,true,true,true,true,true];

function init(region){
	/*if(!active[region])return;
	if(region>0){
		if(NewGame.init(region)!=0){
			view=1;
			Textures.overlap=0;
			for(int i = 0; i < active.length;i++){
				active[i] = true;
			}
			return;
		}
		if(act[5].state()&&HUD.Swinger.RefreshConfirm()!=0){
			Textures.overlap=0;
			for(int i = 0; i < active.length;i++){
				active[i] = true;
			}
			return;
		}
	}*/
var l = [];
pones = null;
pones=l;
ponySpawn=l;
wolves=l;
pones=[];
ponySpawn=[];
wolves=[];

city_MaxPop=0;
drag=false;
b1=false;
	//generate and check for map generation
switch(region){
	
	case(0)://ice
		if(!active[region]){
			for(var i = 0; i < active.length;i++){
				active[i] = true;
			}
			return;
		}
		//Textures.overlap=1;
		for(var i = 0; i < active.length;i++){
			active[i] = false;
		}
		active[1] = true;
		active[2] = true;
		active[4] = true;
		return;
	case(1)://plains
		if(!active[region])return;
		gridReset();
		generateGrazeLands(new Random().nextInt(15)+1);
		gamerunning=true;
		gameState=1;
		break;
	case(2)://forest
		if(!active[region])return;
		gridReset();
		generateForest();
		gamerunning=true;
		gameState=1;
		break;
	case(3)://desert
		if(!active[region])return;
		gridReset();
		generateDesert(new Random().nextInt(13)+1);
		gameState=1;
		break;
	case(4)://mountain
		if(!active[region])return;
		gridReset();
		generateMountainRange(new Random().nextInt(100)+85,true);
		gamerunning=true;
		gameState=1;
		break;
	case(5)://volcano
		if(!active[region])return;
		gridReset();
		generateVolcanicLandscape(new Random().nextInt(100)+85);
		gamerunning=true;
		gameState=1;
		break;
	case(6)://canyon
		if(!active[region])return;
		gridReset();
		generateCanyon();
		gamerunning=true;
		gameState=1;
		break;
	}

//reset other values here

}


var HUDState = 0;
function renderHUD(g){
	g.setColor(0,0,0,128);
	g.fillRect(0,height-200,width,200);
	
	switch(HUDState){
		case(0):
		renderHUD_tiles(g);
		break;
		case(1):
		//economy
		break;
		case(2):
		//ponies
		break;
		case(3):
		//functions
		break;
	}
	
	g.setColor(0,0,0,128);
	g.fillRect(width-64,0,64,64);
	if(Point.inRect(width-64,0,64,64,px,py)&&b1){
		b1=false;
		viewdir++;
		viewdir%=4;
	}
	g.fillRect(width-64,96,64,64);
	if(Point.inRect(width-64,96,64,64,px,py)&&b1){
		b1=false;
		viewdir--;
		if(viewdir<0)viewdir=3;
	}
	g.fillRect(width-64,192,64,64);
	if(Point.inRect(width-64,192,64,64,px,py)&&b1){
		b1=false;
		if(scale<1){
			scale*=2;
			xscroll=width/2-grid.length*t_width/2*scale;
			yscroll=height/2;
		}
	}
	g.fillRect(width-64,288,64,64);
	if(Point.inRect(width-64,288,64,64,px,py)&&b1){
		b1=false;
		if(scale>.125){
			scale/=2;
			xscroll=width/2-grid.length*t_width/2*scale;
			yscroll=height/2;
		}
	}
	
	g.setColor(255,255,255,196);
	
	g.setFont("Dialog",50);
	
	g.drawString(">",width-60,32);
	g.drawString("<",width-60,128);
	
	g.drawString("+",width-60,224);
	g.drawString("-",width-60,320);
	
	g.setColor(0,0,0);
	g.drawString(LAST_FPS+"   "+slx+","+sly+","+slz,5,50);
	
}

var tileScroll=0,tileDrag=false;
var tileLX = -777;
function renderHUD_tiles(g){
	
	//if(b1){
		//if(tileLX==px/(5+144*off+tileScroll,height-200+(200-128)/2));
		//else
		//tileLX = 
	////document.title=tileLX;
	//}
	if(!tileDrag&&b1&&py>height-200){
		if(tileLX==px+mx){//simulates 2 clicks needed to select a block
			//slect tile
			selBlock=~~((px-tileScroll)/144);
			var off = 0;
			for(var i = 0; i < tiles.length;i++){
				if(tiles[i][viewdir]!=null){
					off++;
					if(off==selBlock){
						selBlock=i;//console.log(tiles[i][0]);
						break;
					}
				}
			}
			//document.title=selBlock;
			if(selBlock>=tiles.length)selBlock=-1;
			tileLX=-777;
		}
		tileDrag = true;
		b1=false;
		tileLX=px+mx;
	}
	if(tileDrag){
		tileScroll+=mx-px;
			px=mx;
	}
	if(tileScroll>0)tileScroll=0;
	g.drawRect(5+tileScroll,height-200+(200-128)/2,128,128);
	g.setColor(0,255,0,128);
	g.setFont("Arial",168);
	g.drawString("X",10+tileScroll,height-40);
	var off = 0;
	for(var i = 0; i < tiles.length;i++){
		if(tiles[i][viewdir]!=null){
		g.drawImage(tiles[i][viewdir],/*5+144*/149+144*off+tileScroll,height-200+(200-128)/2);
		off+=1;
		
		}
		
		if(i==selBlock)
			g.fillRect(5+144*off+tileScroll,height-200+(200-128)/2,128,128);
	}
}



