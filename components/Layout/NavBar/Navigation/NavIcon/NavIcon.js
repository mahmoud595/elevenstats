import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  svg: {
    width: "100%",
    height: "100%",
  },
}));

const NavIcon = () => {
  const classes = useStyles();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={classes.svg}
      viewBox="0 -2 32 32.667"
    >
      <defs>
        <filter
          id="Exclusion_1"
          x="0"
          y="0"
          width="32"
          height="32"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="2" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="2" result="blur" />

          <feFlood floodColor="inherit" floodOpacity="0.416" />

          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_45"
          x="1.667"
          y="2"
          width="20.333"
          height="30.667"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="3" result="blur-2" />
          <feFlood floodOpacity="0.161" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_46"
          x="6.333"
          y="4.667"
          width="20.333"
          height="28"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="3" result="blur-3" />
          <feFlood floodOpacity="0.161" />
          <feComposite operator="in" in2="blur-3" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_47"
          x="11"
          y="7.667"
          width="20.333"
          height="25"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="3" result="blur-4" />
          <feFlood floodOpacity="0.161" />
          <feComposite operator="in" in2="blur-4" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g
        id="Group_754"
        dataname="Group 754"
        transform="translate(-466.033 -66)"
      >
        <g id="Group_120" dataname="Group 120">
          <g
            transform="matrix(1, 0, 0, 1, 466.03, 66)"
            filter="url(#Exclusion_1)"
          >
            <path
              id="Exclusion_1-2"
              dataname="Exclusion 1"
              d="M4,0H16a4,4,0,0,1,4,4V16a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0Z"
              transform="translate(6 4)"
              fill="inherit"
            />
          </g>
          <g
            id="Group_119"
            dataname="Group 119"
            transform="translate(476.7 74)"
          >
            <g
              transform="matrix(1, 0, 0, 1, -10.67, -8)"
              filter="url(#Rectangle_45)"
            >
              <rect
                id="Rectangle_45-2"
                dataname="Rectangle 45"
                width="2.333"
                height="12.667"
                rx="1.167"
                transform="translate(10.67 8)"
                fill="#fff"
              />
            </g>
            <g
              transform="matrix(1, 0, 0, 1, -10.67, -8)"
              filter="url(#Rectangle_46)"
            >
              <rect
                id="Rectangle_46-2"
                dataname="Rectangle 46"
                width="2.333"
                height="10"
                rx="1.167"
                transform="translate(15.33 10.67)"
                fill="#fff"
              />
            </g>
            <g
              transform="matrix(1, 0, 0, 1, -10.67, -8)"
              filter="url(#Rectangle_47)"
            >
              <rect
                id="Rectangle_47-2"
                dataname="Rectangle 47"
                width="2.333"
                height="7"
                rx="1.167"
                transform="translate(20 13.67)"
                fill="#fff"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default NavIcon;
