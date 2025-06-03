


class Footer extends HTMLElement {
  constructor() {
    super();
    this.html = `
    <footer>
    	<div id="logo-wrapper">
    		<img class="logo" src="images/logo1.png" alt="Foursquare Jebako Logo"/>
    		<p class="name">Foursquare Jebako</p>
    	</div>

    	<section>
    		<div class="li-group">
    			<h3>About</h3>
    			<ul>
    				<li><a href="/about">About us</a></li>
    				<li><a href="#">The leadership</a></li>
    			</ul>
    		</div>

    		<div class="li-group">
    			<h3>Media</h3>
    			<ul>
    				<li><a href ="/media">Listen live</a></li>
    				<li><a href="https://anchor.fm/foursquare-jebako">Sermons</a></li>
    				<li><a href="https://medium.com/@foursquarejeb">Blog</a></li>
    				<li><a href ="/testimony">Testimony</a></li>
    			</ul>
    		</div>

    		<div class="li-group">
    			<h3>Give</h3>
    			<ul>
    				<li><a href="/give">Tithes and Offering</a></li>
    			</ul>
    		</div>

    		<div class="li-group">
    			<h3>Ministries</h3>
    			<ul>
    			<li><a href="/home">House Fellowship</a></li>
    				<li><a href="/children">Children</a></li>
    				<li><a href="#">Teenagers</a></li>
    				<li><a href="#">Youth</a></li>
    				<li><a href="#">FWI/CFM</a></li>
    		</ul>
    		</div>

    	</section>

    	<p id="copyright">Copyright © 2021, Foursquare Jebako | Media Team</p>
    </footer>
    `;

    this.css = `
    <style>
    footer {
     	width: 100%;
      background: #2D2F3D;
      margin-top: auto;
      padding: 10px;
      padding-bottom: 5px;
      color: white;
    }
    footer #logo-wrapper {
      display: flex;
      align-items: center;
      overflow: hidden;
    }
    footer #logo-wrapper .logo {
      width: 40px;
      height: 40px;
      transform: translate(0,10px);
    }
    footer #logo-wrapper .name {
      font-family: "Poppins", sans-serif;
      font-size: 1.8rem;
      text-align: right;
      margin-top: 10px;
      margin-left: 5px;
      padding: 5px;
    }
    footer #logo-wrapper .name:after {
      content: "A city on the Hill";
      position: absolute;
      transform: translate(0,-12px);
      display: block;
      font-family: cursive;
      font-size: 2.7rem;
      color: #cccccc;
    }
    footer section {
      margin-top: 50px;
    }
    footer section .li-group {
      margin-top: 35px;
    }
    footer section .li-group h3 {
      font-family: "Rubik", sans-serif;
      font-weight: 500;
      font-size: 2.1rem;
      margin-top: 20px;
      color: #b3b3b3;
    }
    footer section ul {
      padding: 0;
    }
    footer section li {
      list-style-type: none;
      font-family: "Noto Sans", sans-serif;
      font-size: 1.6rem;
    }
    footer section a {
      color: white;
    }
    footer section a:hover {
      color: white;
    }
    footer #copyright {
      margin-top: 30px;
      font-size: 1.2rem;
      text-align: center;
      color: #cccccc;
    }
    @media screen and (min-width: 768px) {
      footer section {
        margin: 0 auto;
        margin-top: auto
        min-height: 180px;
        width: 80%;
        display: flex;
        justify-content: space-around;
      }
    }
    </style>
    `
  }

  connectedCallback() {
   this.innerHTML = `${this.css} ${this.html}`;
  }
}

customElements.define('footer-component', Footer);