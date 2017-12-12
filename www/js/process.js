let process = {
	menu:function(){
		// let source_vid = 'https://www.youtube.com/watch?v=d-P7YUSKbpQ';
		    // <iframe src={source_vid} width="100%" height='300px'/>
		let content = <div>
			<audio id="audio_bomb">
				<source src="audio/Bomb.mp3" type="audio/mp3" />
			</audio>
			<ul><center><br /> <br /> <br/> <br/> <br/> <br/> <br/><br /> <br/> <br /> <br/>
				<li><a href='calcu.html'>Start solving!</a></li>
				
				</center>
			</ul>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	
	
	loading:function(){
		let content = <div>
					<div className="progressbar-infinite"></div>
					<audio id="audio">
						<source src="audio/" type="audio/ogg" />
					</audio>
					<div align='center'><br /> <br /> <br/> <br/> <br/> <br/> <br/><br /> <br/> <br /> <br/>
						<img src='img/indicator.gif' width='100px' />
						Loading...
					</div>
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio').play();
		process.replayAudio('audio');
	},
	audio:function(audio){
		let _audio = document.getElementById(audio);
		return _audio;
	},
	replayAudio:function(audio){
		process.audio(audio).addEventListener('ended',function(){
			process.audio('audio').pause();
			process.audio(audio).play();
		})
	}
}

let counting = 0;
process.loading();
setTimeout(function(){
	process.audio('audio').pause();
	process.menu();
},1000);