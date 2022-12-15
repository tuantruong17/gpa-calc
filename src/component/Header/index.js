import "./styles.css";

function Header(prop) {
  return (
    <>
      <div className="header-wrapper">
        <div className="college-name">
          <a href="https://augustana.edu/">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 349 46.7"
              enable-background="new 0 0 349 46.7"
              xmlSpace="preserve"
              role="presentation"
            >
              <title>Augustana College</title>
              <desc>Logo for Augustana College</desc>
              <g>
                <g>
                  <path
                    d="M41.2,33.3v-0.9c-1.1,0.6-2.7,1.2-4.7,1.2c-4.5,0-8.7-2.4-8.7-8.5V11h5.5v13.9c0,5.3,2.6,6.6,4.3,6.6
			c1.3,0,2.7-0.7,3.4-2.6V11h5.7v22.3H41.2z"
                  ></path>
                  <path
                    d="M89,33.3v-0.9c-1.1,0.6-2.7,1.2-4.7,1.2c-4.5,0-8.7-2.4-8.7-8.5l0-14.1h5.5v13.9c0,5.3,2.6,6.6,4.3,6.6
			c1.3,0,2.7-0.7,3.4-2.6V11h5.7v22.3H89z"
                  ></path>
                  <path
                    d="M163,11v0.9c1.1-0.6,2.7-1.2,4.7-1.2c4.5,0,8.7,2.4,8.7,8.5l0,14.1h-5.5V19.4c0-5.3-2.6-6.6-4.3-6.6
			c-1.3,0-2.7,0.7-3.4,2.6v17.9h-5.7V11H163z"
                  ></path>
                  <path
                    d="M70.4,32.8c0,0-0.4,14-15.4,14l-0.7-2.2c1.4,0.4,2.5,0.6,3.4,0.6c5,0,6.9-7.8,7.2-11.6
			c-3.5-0.3-14-2.1-14-13.9c0-6,4.5-8.6,9.7-8.6h9.9L70.4,32.8z M64.9,13.1h-2.9c-2.3,0-5.2,1.5-5.2,6.4c0,4.7,1.7,12.4,7.7,12.4
			h0.5V13.1z"
                  ></path>
                  <path
                    d="M104.9,33.5c-1.4,0-4.2-0.2-5.4-0.8L99,30.1c1.7,0.9,3.8,1.8,5.8,1.8c2.9,0,5.1-1.8,5.1-4.8
			c0-5.8-11.1-5.2-11.1-11.2c0-4.5,5.7-5.1,9.1-5.1c1.9,0,4,0.2,5.9,0.6l0.4,2.5c-1.8-0.8-4.1-1.5-6.1-1.5c-2.1,0-3.6,1-3.6,3.2
			c0,4.5,11.3,4.4,11.3,10.9C115.8,32.2,109.5,33.5,104.9,33.5"
                  ></path>
                  <path
                    d="M152.3,33.3h-5.1c-14.7,0-14.4-8.6-14.4-8.6c0-4.1,4.7-6.2,9.8-6.2h4.2c-0.5-4.2-3.1-5.4-5.2-5.4h-0.8
			c0,0-1.9,0-5.6,0.5v-2.1C139.2,11,141,11,142,11h1c4.9,0,8.8,2.2,9.3,7.5V33.3z M146.7,20.5h-2.8c-2.5,0-5.3,1.4-5.3,4.3
			c0,4.4,2.9,6.8,7.2,6.8c0.4,0,1-0.1,1-0.1V20.5z"
                  ></path>
                  <path
                    d="M199.3,33.3h-5.1c-14.7,0-14.4-8.6-14.4-8.6c0-4.1,4.7-6.2,9.8-6.2h4.2c-0.5-4.2-3.1-5.4-5.2-5.4h-0.8
			c0,0-1.9,0-5.6,0.5v-2.1C186.2,11,188,11,189,11h1c4.9,0,8.8,2.2,9.3,7.5V33.3z M193.8,20.5h-2.8c-2.5,0-5.3,1.4-5.3,4.3
			c0,4.4,2.9,6.8,7.2,6.8c0.4,0,1-0.1,1-0.1V20.5z"
                  ></path>
                  <path
                    d="M12.6,0.3c-0.7-0.5-1.7-0.5-2.4,0C4,4.2,0,6.5,0,14.8v18.4h5.6V20.5h11.5l0,12.7h5.6V14.8
			C22.8,6.4,18.9,4.3,12.6,0.3 M5.6,18.4v-5c0-5.3,1-8.9,5.7-11.4c4.6,2.5,5.8,6.4,5.8,11.4l0,5H5.6z"
                  ></path>
                  <path
                    d="M126.6,13.4v12c0,1.5-0.2,7.3,2.2,7.3h0.5l-0.7,2c-3.4-0.8-7.8-3.9-7.8-10.8v-8.7c0-1.8-0.4-2-3.7-2.5
			v-1.6h3.7V4.6l5.7,0v6.6h5v2.2H126.6z"
                  ></path>
                  <path
                    d="M223.9,2.6c-6.2,0-7.3,6.3-7.3,11.3c0,5.9,3.3,17.6,10.7,17.6c1.4,0,2.8-0.3,4.1-0.7l-1,2.4
			c-0.5,0.1-1,0.1-1.5,0.1c-12.4,0-18.6-7.9-18.6-20.1c0-8.1,4.9-12.7,12.8-12.7h9v2H223.9z"
                  ></path>
                  <path
                    d="M245.4,33.6c-6.6,0-11.2-4-11.2-10.7c0-7.1,4.5-12.2,11.8-12.2c6.6,0,11.2,4.1,11.2,10.8
			C257.2,28.6,252.7,33.6,245.4,33.6 M245.2,12.8c-4.2,0-5.4,5.6-5.4,8.8c0,3.7,1.4,10,6.1,10c4.3,0,5.4-5.6,5.4-8.9
			C251.4,19.1,250,12.8,245.2,12.8"
                  ></path>
                  <path
                    d="M288.3,22.4c0.4,4.1,2.4,9.3,7.2,9.3c1.2,0,2.4-0.4,3.4-1l-0.8,2.7h-1.1c-14.4,0-14.9-13.7-14.9-13.7
			c0-5.9,4.1-8.9,10.1-8.9c6.7,0,10,3,10,11.7H288.3z M292.4,12.8c-3.6,0-4.1,5-4.1,7.5h8.3C296.4,15,294.8,12.8,292.4,12.8"
                  ></path>
                  <path
                    d="M325.2,32.7c0,0-0.4,14-15.4,13.9l-0.7-2.2c1.4,0.4,2.5,0.6,3.3,0.6c5,0,6.9-7.8,7.2-11.6
			c-3.4-0.3-13.9-2.1-13.9-13.9c0-6,4.5-8.6,9.7-8.6h9.8L325.2,32.7z M319.7,13h-2.9c-2.3,0-5.2,1.5-5.2,6.3
			c0,4.7,1.7,12.4,7.7,12.4h0.5V13z"
                  ></path>
                  <path
                    d="M334.9,22.4c0.4,4.1,2.4,9.3,7.2,9.3c1.2,0,2.4-0.4,3.4-1l-0.8,2.7h-1.1c-14.4,0-14.9-13.7-14.9-13.7
			c0-5.9,4.1-8.9,10.1-8.9c6.7,0,10,3,10,11.7H334.9z M339,12.8c-3.6,0-4.1,5-4.1,7.5h8.3C343,15,341.5,12.8,339,12.8"
                  ></path>
                  <path d="M261.1,0.6h5.5v23.9c0,1.4-0.2,7.1,2.1,7.1h0.5l-0.7,1.9c-3.2-0.8-7.5-3.8-7.5-10.4V0.6z"></path>
                  <path d="M272.6,0.6h5.5v23.9c0,1.4-0.2,7.1,2.1,7.1h0.5l-0.7,1.9c-3.2-0.8-7.5-3.8-7.5-10.4V0.6z"></path>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;