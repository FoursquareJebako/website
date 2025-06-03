
class Header extends HTMLElement {
  constructor() {
    super();
    this.html = `
     <header>
       	<div class="wrapper">
       		<div id="logo-wrapper">
    						<img class="logo" src="images/logo1.png" alt="Foursquare Jebako Logo"/>
    						<p id='header-name'><a href='/'>Foursquare Jebako</a></p>
    					</div>

    					<div id="menu-wrapper">
    						<p id="menu-icon" class="fas fa-bars"></p>
    						<ul>
    							<li><a href="/about">About</a></li>
    							<li><a href="/audio">Listen</a></li>
    							<li><a href="/video">Watch</a></li>
    							<li><a href="https://drive.google.com/drive/folders/1KA8ec6mJNPZoTkPCVOjtbBDd6ECVk8IC?usp=sharing">Gallery</a></li>
    							<li><a href="/give">Give</a></li>
    						</ul>
    					</div>
    				</div>

    				<div id="menu-mobile" class="">
    					<ul>
    					<li><a href="/about">About</a></li>
    					<li><a href="/audio">Listen live</a><span class="live"></span></li>
    					<li><a href="/video">Watch live</a><span class="live"></span></li>
    					<li><a href="https://drive.google.com/drive/folders/1KA8ec6mJNPZoTkPCVOjtbBDd6ECVk8IC?usp=sharing">Gallery</a></li>
    					<li><a href="/give">Give</a></li>
    				</ul>
    			</div>
    		</header>
    `;

    this.css = `
    <style>
header {
	position: fixed;
	top: 0;
	background: white;
	font-family: "Poppins", sans-serif;
	font-size: 1.8rem;
	z-index: 5;
	margin: 0;
	width: 100%;
	padding: 0 10px;
	color: #2D2F3D; /*2D2F3D*/
	color: #1f262a;
}

header .wrapper {
	display: flex;
	justify-content: space-between;
	height: 75px;
}

header #logo-wrapper {
	display: flex;
	align-items: center;
	overflow: hidden;
}

header #logo-wrapper .logo {
	width: 35px;
	height: 35px;
}

#header-name {
	font-family: "Poppins", sans-serif;
	font-size: 2rem;
	font-weight: 500;
	text-align: right;
	margin-top: 12px;
	padding: 5px;
	padding-left: 12px;
}

#header-name a {
	color: inherit;
	text-decoration: none;
}

header #menu-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
}

header #menu-wrapper ul {
	display: none;
	padding-right: 30px;
	gap: 0 20px;
	justify-content: center;
	align-items: center;
	list-style: none;
	margin-top: 10px;
}

header #menu-wrapper ul li {
	padding: 0 10px;
}

header #menu-wrapper ul a {
	color: inherit;
	text-decoration: none;
}

header #menu-wrapper ul a:hover {
	color: #F1CA41;
}

header #menu-wrapper ul a .live {
	display: inline-block;
	width: 8px;
	height: 8px;
	background: #D8232A;
	border-radius: 100%;
	margin-left: 3px;
}

header #menu-wrapper #menu-icon {
	margin-right: 10px;
	font-size: 2.5rem;
	text-align: center;
	margin-top: 15px;
}

header #menu-mobile {
	width: 100%;
	height: 0;
	position: fixed;
	left: 0;
	background: white;
	overflow: hidden;
	color: #2D2F3D;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: 700;
}

header #menu-mobile.open {
	height: 100%;
	overflow: auto;
}

header #menu-mobile ul {
	width: 100%;
	padding: 0;
	margin-top: 90px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	list-style-type: none;
}

header #menu-mobile li {
	font-size: 2.7rem;
	margin-bottom: 25px;
}

header #menu-mobile li a {
	color: inherit;
}

header #menu-mobile li a:hover {
	text-decoration: none;
	color: #F1CA41;
}

header #menu-mobile #member-login {
	margin-top: 15px;
	text-decoration: none;
	background: #F1CA41;
	color: #2D2F3D;
	padding: 10px 30px;
	border-radius: 50px;
	font-size: 1.7rem;
	letter-spacing: 3px;
	font-weight: 500;
	user-select: none;
}

header #menu-mobile #member-login:hover {
	background: #EF5350;
	color: white;
}

header #menu-mobile #member-login a:hover {
	color: white;
}

header.top {
	box-shadow: 0 0.2px 5px 0rem #b3b3b3;
	animation: fadein 0ms forwards;
	background: white;
}

@keyframes fadein {
	100% {
		background: white;
		color: #2D2F3D;
    /*background: #262626;
				color: white;*/;
	}
}

@media screen and (min-width: 800px) {
	header {
		padding: 0 30px;
	}
	header #menu-wrapper > ul {
		display: flex;
	}

	header #menu-icon {
		display: none;
	}
}
</style>
    `
  }

  connectedCallback() {
  	let headerDefault = this.getAttribute('default');
   this.innerHTML = `${this.css} ${this.html}`;
   const script = document.createElement('script');
   script.innerHTML = `
   let header = document.querySelector('header');
   let menuIcon = document.querySelector('#menu-icon');
   let menuMobile = document.querySelector('#menu-mobile');
   let scrolling = false;

   //set header default
   header.setAttribute('default', '${headerDefault}');

   //set header to transparent if 'default=transparent' is on <header-component>
   if (header.getAttribute('default') == 'transparent') {
   	header.style.background = 'transparent';
   	header.style.color = 'white';
   }

   window.onscroll = () => {
   	scrolling = true;
   }

   if (header != null ) {
   setInterval(() => {
   	//throttle scroll event
   	if (scrolling) {
   		scrolling = false;
   		toggleHeader();
   	}
   }, 300)
   }

   let toggleHeader = () => {
   	if (window.scrollY == 0) {
   		if (!menuMobile.classList.contains('open')) {
   			header.classList.remove('top')
   		}
   	} else {
   		header.classList.add('top');
   	}
   }

   menuIcon.onclick = () => {
   	if (menuMobile.classList.contains('open')) {
   		menuMobile.classList.remove('open');
   		toggleHeader()
   	} else {
   		menuMobile.classList.add('open');
   		if (!header.classList.contains('top')) {
   			header.classList.add('top');
   		}
   	}
   }

   if (header != null) {
    toggleHeader()
   }
   `;
   document.head.appendChild(script);
  }
}

customElements.define('header-component', Header);