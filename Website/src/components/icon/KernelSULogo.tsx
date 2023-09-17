import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";

interface Props extends React.PropsWithChildren {
  width?: string | number;
  height?: string | number;
  sx?: SxProps;
}

export const KernelSULogo = (props: Props) => {
  return (
    <Box
      component="svg"
      sx={props.sx}
      id="svg"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0, 0, 400,400"
    >
      <g id="svgg">
        <path
          id="path0"
          d="M208.880 23.280 C 208.181 23.979,208.181 190.421,208.880 191.120 C 209.579 191.819,376.021 191.819,376.720 191.120 C 377.550 190.290,377.403 24.260,376.571 23.429 C 375.740 22.597,209.710 22.450,208.880 23.280 M23.280 208.880 C 22.450 209.710,22.597 375.740,23.429 376.571 C 24.260 377.403,190.290 377.550,191.120 376.720 C 191.819 376.021,191.819 209.579,191.120 208.880 C 190.421 208.181,23.979 208.181,23.280 208.880 "
          stroke="none"
          fill="#fcfcfc"
          fillRule="evenodd"
        ></path>
        <path
          id="path1"
          d="M0.000 200.000 L 0.000 400.000 200.000 400.000 L 400.000 400.000 400.000 200.000 L 400.000 0.000 200.000 0.000 L 0.000 0.000 0.000 200.000 M376.571 23.429 C 377.403 24.260,377.550 190.290,376.720 191.120 C 376.021 191.819,209.579 191.819,208.880 191.120 C 208.181 190.421,208.181 23.979,208.880 23.280 C 209.710 22.450,375.740 22.597,376.571 23.429 M191.120 208.880 C 191.819 209.579,191.819 376.021,191.120 376.720 C 190.290 377.550,24.260 377.403,23.429 376.571 C 22.597 375.740,22.450 209.710,23.280 208.880 C 23.979 208.181,190.421 208.181,191.120 208.880 "
          stroke="none"
          fill="#1e110d"
          fillRule="evenodd"
        ></path>
      </g>
    </Box>
  );
};