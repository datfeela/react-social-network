export const SvgSelector = (props) => {
    switch (props.id) {
        case "warning":
            return (
                <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                    <g fillRule="evenodd">
                        <path d="M0 0h28v28H0z" fill="none"></path>
                        <path d="M3 14C3 7.928 7.928 3 14 3s11 4.928 11 11-4.928 11-11 11S3 20.072 3 14zm11-9.2c-5.078 0-9.2 4.122-9.2 9.2 0 5.078 4.122 9.2 9.2 9.2 5.078 0 9.2-4.122 9.2-9.2 0-5.078-4.122-9.2-9.2-9.2zm-1 9.7v-5a1 1 0 012 0v5a1 1 0 01-2 0zm-.25 3.75A1.25 1.25 0 1114 19.5c-.69 0-1.25-.56-1.25-1.25z"></path>
                    </g>
                </svg>
            );
        case "search":
            return (
                <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <g>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.75002 2.23335C4.25553 2.23335 2.23335 4.25553 2.23335 6.75002C2.23335 9.2445 4.25553 11.2667 6.75002 11.2667C7.99751 11.2667 9.12544 10.7621 9.94378 9.94378C10.7621 9.12544 11.2667 7.99751 11.2667 6.75002C11.2667 4.25553 9.2445 2.23335 6.75002 2.23335ZM0.43335 6.75002C0.43335 3.26142 3.26142 0.43335 6.75002 0.43335C10.2386 0.43335 13.0667 3.26142 13.0667 6.75002C13.0667 8.16934 12.5978 9.48028 11.8076 10.5348L15.3031 14.0303C15.6545 14.3818 15.6545 14.9516 15.3031 15.3031C14.9516 15.6545 14.3818 15.6545 14.0303 15.3031L10.5348 11.8076C9.48028 12.5978 8.16934 13.0667 6.75002 13.0667C3.26142 13.0667 0.43335 10.2386 0.43335 6.75002Z"
                        />
                    </g>
                </svg>
            );
        case "user":
            return (
                <svg className={props.className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
                        />
                    </g>
                </svg>
            );
        case "users":
            return (
                <svg
                    className={props.className}
                    viewBox="0 0 459.864 459.864"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    style={{ enableBackground: "new 0 0 459.864 459.864" }}
                >
                    <g>
                        <path
                            d="M395.988,193.978c-6.215,8.338-13.329,15.721-21.13,21.941c33.044,21.079,55.005,58.06,55.005,100.077
				c0,13.638-20.011,23.042-31.938,27.434c-9.301,3.425-20.237,6.229-32.19,8.347c0.387,5.05,0.586,10.153,0.586,15.3
				c0,4.455-0.389,9.647-1.518,15.299c16.064-2.497,30.815-6.128,43.488-10.794c42.626-15.694,51.573-38.891,51.573-55.586
				C459.863,265.52,434.565,220.85,395.988,193.978z"
                        />
                        <path
                            d="M311.244,15.147c-18.734,0-36.411,7.436-50.724,21.145c5.632,7.212,10.553,15.004,14.733,23.246
				c9.592-10.94,22.195-17.602,35.991-17.602c29.955,0,54.325,31.352,54.325,69.888s-24.37,69.888-54.325,69.888
				c-9.01,0-17.507-2.853-24.995-7.868c-2.432,8.863-5.627,17.42-9.53,25.565c10.642,5.952,22.36,9.093,34.525,9.093
				c45.83,0,81.115-44.3,81.115-96.678C392.359,59.441,357.069,15.147,311.244,15.147z"
                        />
                        <path
                            d="M259.999,226.28c-6.487,8.205-13.385,15.089-20.57,20.892c40.84,24.367,68.257,68.991,68.257,119.904
				c0,17.196-24.104,28.639-38.472,33.929c-26.025,9.583-62.857,15.078-101.053,15.078c-38.196,0-75.029-5.495-101.054-15.078
				c-14.368-5.29-38.472-16.732-38.472-33.929c0-50.914,27.417-95.538,68.257-119.904c-7.184-5.802-14.083-12.687-20.57-20.892
				C30.403,256.335,0,308.218,0,367.077c0,18.127,9.926,43.389,57.213,60.8c29.496,10.861,68.898,16.841,110.947,16.841
				c42.049,0,81.451-5.98,110.947-16.841c47.287-17.411,57.213-42.673,57.213-60.8C336.32,308.218,305.918,256.335,259.999,226.28z"
                        />
                        <path
                            d="M168.16,242.764c53.003,0,93.806-51.234,93.806-111.804c0-60.571-40.808-111.804-93.806-111.804
				c-52.995,0-93.806,51.223-93.806,111.804C74.354,191.542,115.169,242.764,168.16,242.764z M168.16,47.79
				c35.936,0,65.171,37.31,65.171,83.169s-29.236,83.169-65.171,83.169s-65.171-37.31-65.171-83.169S132.225,47.79,168.16,47.79z"
                        />
                    </g>
                </svg>
            );
        case "messenger":
            return (
                <svg
                    className={props.className}
                    viewBox="0 0 24 24"
                    id="_24x24_On_Light_Messages"
                    data-name="24x24/On Light/Messages"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect id="view-box" fill="none" />
                    <path
                        id="Shape"
                        d="M6.485,18.519a9.891,9.891,0,0,1-4.876.981c-.285,0-.584-.006-.887-.018a.739.739,0,0,1-.65-.432.738.738,0,0,1,.085-.775,11.192,11.192,0,0,0,2.072-3.787A9.751,9.751,0,1,1,10.751,19.5,9.661,9.661,0,0,1,6.485,18.519ZM6.808,17a8.247,8.247,0,1,0-3.139-3.015.75.75,0,0,1,.092.535A10.189,10.189,0,0,1,2.2,17.99a7.2,7.2,0,0,0,3.816-.947.745.745,0,0,1,.431-.136A.756.756,0,0,1,6.808,17Zm-.057-4.5a.75.75,0,0,1,0-1.5h7a.75.75,0,0,1,0,1.5Zm0-4a.75.75,0,0,1,0-1.5h5a.75.75,0,1,1,0,1.5Z"
                        transform="translate(1.249 2.25)"
                    />
                </svg>
            );
        case "settings":
            return (
                <svg
                    className={props.className}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 478.703 478.703"
                    style={{ enableBackground: "new 0 0 478.703 478.703" }}
                >
                    <g>
                        <path
                            d="M454.2,189.101l-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8,7.1-27.9-3.2-38.1l-29.8-29.8
			                    c-5.6-5.6-13-8.7-20.9-8.7c-6.2,0-12.1,1.9-17.1,5.5l-27.8,19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2
			                    c-2.4-14.3-14.7-24.7-29.2-24.7h-42.1c-14.5,0-26.8,10.4-29.2,24.7l-5.8,34c-11.2,3.5-22.1,8.1-32.5,13.7l-27.5-19.8
			                    c-5-3.6-11-5.5-17.2-5.5c-7.9,0-15.4,3.1-20.9,8.7l-29.9,29.8c-10.2,10.2-11.6,26.3-3.2,38.1l20,28.1
			                    c-5.5,10.5-9.9,21.4-13.3,32.7l-33.2,5.6c-14.3,2.4-24.7,14.7-24.7,29.2v42.1c0,14.5,10.4,26.8,24.7,29.2l34,5.8
			                    c3.5,11.2,8.1,22.1,13.7,32.5l-19.7,27.4c-8.4,11.8-7.1,27.9,3.2,38.1l29.8,29.8c5.6,5.6,13,8.7,20.9,8.7c6.2,0,12.1-1.9,17.1-5.5
			                    l28.1-20c10.1,5.3,20.7,9.6,31.6,13l5.6,33.6c2.4,14.3,14.7,24.7,29.2,24.7h42.2c14.5,0,26.8-10.4,29.2-24.7l5.7-33.6
			                    c11.3-3.5,22.2-8,32.6-13.5l27.7,19.8c5,3.6,11,5.5,17.2,5.5l0,0c7.9,0,15.3-3.1,20.9-8.7l29.8-29.8c10.2-10.2,11.6-26.3,3.2-38.1
			                    l-19.8-27.8c5.5-10.5,10.1-21.4,13.5-32.6l33.6-5.6c14.3-2.4,24.7-14.7,24.7-29.2v-42.1
			                    C478.9,203.801,468.5,191.501,454.2,189.101z M451.9,260.401c0,1.3-0.9,2.4-2.2,2.6l-42,7c-5.3,0.9-9.5,4.8-10.8,9.9
			                    c-3.8,14.7-9.6,28.8-17.4,41.9c-2.7,4.6-2.5,10.3,0.6,14.7l24.7,34.8c0.7,1,0.6,2.5-0.3,3.4l-29.8,29.8c-0.7,0.7-1.4,0.8-1.9,0.8
			                    c-0.6,0-1.1-0.2-1.5-0.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-0.6c-13.1,7.8-27.2,13.6-41.9,17.4c-5.2,1.3-9.1,5.6-9.9,10.8l-7.1,42
			                    c-0.2,1.3-1.3,2.2-2.6,2.2h-42.1c-1.3,0-2.4-0.9-2.6-2.2l-7-42c-0.9-5.3-4.8-9.5-9.9-10.8c-14.3-3.7-28.1-9.4-41-16.8
			                    c-2.1-1.2-4.5-1.8-6.8-1.8c-2.7,0-5.5,0.8-7.8,2.5l-35,24.9c-0.5,0.3-1,0.5-1.5,0.5c-0.4,0-1.2-0.1-1.9-0.8l-29.8-29.8
			                    c-0.9-0.9-1-2.3-0.3-3.4l24.6-34.5c3.1-4.4,3.3-10.2,0.6-14.8c-7.8-13-13.8-27.1-17.6-41.8c-1.4-5.1-5.6-9-10.8-9.9l-42.3-7.2
			                    c-1.3-0.2-2.2-1.3-2.2-2.6v-42.1c0-1.3,0.9-2.4,2.2-2.6l41.7-7c5.3-0.9,9.6-4.8,10.9-10c3.7-14.7,9.4-28.9,17.1-42
			                    c2.7-4.6,2.4-10.3-0.7-14.6l-24.9-35c-0.7-1-0.6-2.5,0.3-3.4l29.8-29.8c0.7-0.7,1.4-0.8,1.9-0.8c0.6,0,1.1,0.2,1.5,0.5l34.5,24.6
			                    c4.4,3.1,10.2,3.3,14.8,0.6c13-7.8,27.1-13.8,41.8-17.6c5.1-1.4,9-5.6,9.9-10.8l7.2-42.3c0.2-1.3,1.3-2.2,2.6-2.2h42.1
			                    c1.3,0,2.4,0.9,2.6,2.2l7,41.7c0.9,5.3,4.8,9.6,10,10.9c15.1,3.8,29.5,9.7,42.9,17.6c4.6,2.7,10.3,2.5,14.7-0.6l34.5-24.8
			                    c0.5-0.3,1-0.5,1.5-0.5c0.4,0,1.2,0.1,1.9,0.8l29.8,29.8c0.9,0.9,1,2.3,0.3,3.4l-24.7,34.7c-3.1,4.3-3.3,10.1-0.6,14.7
			                    c7.8,13.1,13.6,27.2,17.4,41.9c1.3,5.2,5.6,9.1,10.8,9.9l42,7.1c1.3,0.2,2.2,1.3,2.2,2.6v42.1H451.9z"
                        />
                        <path
                            d="M239.4,136.001c-57,0-103.3,46.3-103.3,103.3s46.3,103.3,103.3,103.3s103.3-46.3,103.3-103.3S296.4,136.001,239.4,136.001
            			z M239.4,315.601c-42.1,0-76.3-34.2-76.3-76.3s34.2-76.3,76.3-76.3s76.3,34.2,76.3,76.3S281.5,315.601,239.4,315.601z"
                        />
                    </g>
                </svg>
            );
        case "arrowBack":
            return (
                <svg
                    className={props.className}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 477.175 477.175"
                    style={{ enableBackground: "new 0 0 477.175 477.175" }}
                >
                    <g>
                        <path
                            d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
                        />
                    </g>
                </svg>
            );
        case "close":
            return (
                <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g data-name="Layer 2">
                        <g data-name="close">
                            <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
                            <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
                        </g>
                    </g>
                </svg>
            );
        case "upload":
            return (
                <svg
                    className={props.className}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 211.293 211.293"
                    style={{ enableBackground: "new 0 0 211.293 211.293" }}
                >
                    <g>
                        <path
                            d="M176.777,54.027H133.43c-4.142,0-7.5,3.357-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h35.847v127.266H42.016V69.027H77.86
		c4.142,0,7.5-3.357,7.5-7.5c0-4.143-3.358-7.5-7.5-7.5H34.516c-4.142,0-7.5,3.357-7.5,7.5v142.266c0,4.143,3.358,7.5,7.5,7.5
		h142.261c4.142,0,7.5-3.357,7.5-7.5V61.527C184.277,57.385,180.919,54.027,176.777,54.027z"
                        />
                        <path
                            d="M82.058,41.693l16.087-16.087V135.66c0,4.143,3.358,7.5,7.5,7.5c4.143,0,7.5-3.357,7.5-7.5V25.607l16.086,16.086
		c1.464,1.465,3.384,2.197,5.303,2.197c1.919,0,3.838-0.733,5.303-2.196c2.929-2.93,2.929-7.678,0-10.607l-28.889-28.89
		C109.542,0.79,107.634,0,105.645,0c-1.988,0-3.896,0.79-5.303,2.196l-28.891,28.89c-2.929,2.929-2.929,7.678,0,10.606
		C74.38,44.622,79.129,44.621,82.058,41.693z"
                        />
                    </g>
                </svg>
            );
        case "success":
            return (
                <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" style={{ enableBackground: "new 0 0 52 52" }}>
                    <g>
                        <path
                            d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26
		S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"
                        />
                        <path
                            d="M38.252,15.336l-15.369,17.29l-9.259-7.407c-0.43-0.345-1.061-0.274-1.405,0.156c-0.345,0.432-0.275,1.061,0.156,1.406
		l10,8C22.559,34.928,22.78,35,23,35c0.276,0,0.551-0.114,0.748-0.336l16-18c0.367-0.412,0.33-1.045-0.083-1.411
		C39.251,14.885,38.62,14.922,38.252,15.336z"
                        />
                    </g>
                </svg>
            );
        case "logo":
            return (
                <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                    <g>
                        {/* fill="#3B88C3"  */}
                        <path d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"></path>
                        <path
                            fill="#FFF"
                            d="M12.513 9.342c0-1.271.868-2.418 2.419-2.418h7.937c1.365 0 2.078 1.054 2.078 2.14c0 1.054-.683 2.139-2.078 2.139h-5.705v4.527h4.806c1.488 0 2.232 1.054 2.232 2.108c0 1.085-.744 2.17-2.232 2.17h-4.806v6.76c0 1.551-.992 2.418-2.326 2.418s-2.326-.867-2.326-2.418V9.342z"
                        ></path>
                    </g>
                </svg>
            );
        case "logout":
            return (
                <svg
                    className={props.className}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 491.213 491.213"
                    style={{ enableBackground: "0 0 491.213 491.213" }}
                >
                    <g>
                        <polygon
                            points="146.213,3.107 146.213,175.607 176.213,175.607 176.213,33.107 461.213,33.107 461.213,458.107 176.213,458.107 
		176.213,315.607 146.213,315.607 146.213,488.107 491.213,488.107 491.213,3.107 	"
                        />
                        <polygon
                            points="318.713,260.607 318.713,230.607 57.427,230.607 91.82,196.213 70.607,175 0,245.607 70.607,316.213 91.82,295 
		57.426,260.607 	"
                        />
                    </g>
                </svg>
            );
        case "language":
            return (
                <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g>
                        <path
                            d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M13 2.04932C13 2.04932 16 5.99994 16 11.9999C16 17.9999 13 21.9506 13 21.9506"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M11 21.9506C11 21.9506 8 17.9999 8 11.9999C8 5.99994 11 2.04932 11 2.04932"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path d="M2.62964 15.5H21.3704" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.62964 8.5H21.3704" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                </svg>
            );
        case "theme":
            return (
                <svg
                    className={props.className}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 511.997 511.997"
                    style={{ enableBackground: "0 0 511.997 511.997" }}
                >
                    <g>
                        <g>
                            <path
                                d="M57.318,166.155H12.746c-6.841,0-12.386,5.545-12.386,12.386s5.545,12.386,12.386,12.386h44.571
			c6.842,0,12.387-5.545,12.387-12.386S64.159,166.155,57.318,166.155z"
                            />
                        </g>
                    </g>
                    <g>
                        <g>
                            <path
                                d="M499.251,166.155h-44.572c-6.84,0-12.386,5.545-12.386,12.386s5.546,12.386,12.386,12.386h44.572
			c6.84,0,12.386-5.545,12.386-12.386S506.091,166.155,499.251,166.155z"
                            />
                        </g>
                    </g>
                    <g>
                        <g>
                            <path
                                d="M108.347,326.191c-4.837-4.837-12.679-4.837-17.517,0l-32.42,32.42c-4.837,4.837-4.837,12.679,0,17.517
			c2.419,2.419,5.589,3.628,8.758,3.628s6.34-1.209,8.758-3.628l32.421-32.42C113.184,338.872,113.184,331.029,108.347,326.191z"
                            />
                        </g>
                    </g>
                    <g>
                        <g>
                            <path
                                d="M430.912,3.628c-4.838-4.837-12.678-4.837-17.517,0L381.863,35.16c-4.837,4.837-4.837,12.68,0,17.516
			c2.42,2.417,5.59,3.627,8.759,3.627c3.171,0,6.339-1.21,8.758-3.628l31.531-31.531C435.748,16.307,435.748,8.464,430.912,3.628z"
                            />
                        </g>
                    </g>
                    <g>
                        <g>
                            <path
                                d="M130.117,35.142L98.602,3.628c-4.837-4.835-12.68-4.835-17.517,0c-4.837,4.837-4.837,12.68,0,17.517L112.6,52.66
			c2.419,2.418,5.589,3.628,8.758,3.628s6.34-1.21,8.758-3.628C134.953,47.823,134.953,39.98,130.117,35.142z"
                            />
                        </g>
                    </g>
                    <g>
                        <g>
                            <path
                                d="M453.585,358.615l-32.3-32.303c-4.838-4.837-12.678-4.837-17.517,0.001c-4.837,4.837-4.837,12.68,0,17.516l32.301,32.301
			c2.419,2.419,5.589,3.628,8.758,3.628c3.171,0,6.339-1.21,8.758-3.628C458.422,371.294,458.422,363.451,453.585,358.615z"
                            />
                        </g>
                    </g>
                    <g>
                        <g>
                            <path
                                d="M255.999,33.636c-85.648,0-155.327,72.885-155.327,162.474c0,41.65,14.919,86.482,40.933,123
			c19.979,28.045,30.538,59.249,30.538,90.24v77.875c0,13.659,11.113,24.772,24.772,24.772h118.169
			c13.659,0,24.772-11.113,24.772-24.772V409.35c0-30.99,10.559-62.195,30.536-90.24c26.014-36.517,40.934-81.35,40.934-123
			C411.324,106.521,341.645,33.636,255.999,33.636z M315.082,487.227H196.913v-16.201h59.085c6.841,0,12.387-5.545,12.387-12.386
			s-5.546-12.386-12.387-12.386h-59.085v-16.2h118.172l0.014,57.171C315.098,487.227,315.093,487.227,315.082,487.227z
			 M238.629,256.141l-16.564-35.387h67.866l-16.562,35.387c-0.652,1.393-1.039,2.896-1.142,4.43l-9.605,144.711h-13.247
			l-9.605-144.711C239.668,259.037,239.28,257.534,238.629,256.141z M350.215,304.738c-22.123,31.056-34.208,65.733-35.082,100.544
			h-27.684l9.341-140.749l23.831-50.915c1.796-3.836,1.507-8.325-0.767-11.899c-2.273-3.573-6.215-5.738-10.451-5.738H202.592
			c-4.236,0-8.177,2.165-10.451,5.738c-2.273,3.573-2.563,8.062-0.767,11.898l23.832,50.915l9.341,140.749h-27.686
			c-0.874-34.812-12.958-69.488-35.082-100.544c-22.754-31.942-36.338-72.551-36.338-108.628
			c0-75.93,58.567-137.702,130.555-137.702s130.555,61.772,130.555,137.702C386.553,232.188,372.969,272.797,350.215,304.738z"
                            />
                        </g>
                    </g>
                </svg>
            );
        default:
            return null;
    }
};
