import { type InputStylesType } from "@material-tailwind/react";

const inputTheme: InputStylesType = {
  styles: {
    variants: {
      outlined: {
        colors: {
          input: {
            blue: {
              borderColor: "border-primary",
              borderColorFocused: "focus:border-primary",
            },
          },
          label: {
            blue: {
              color: "text-primary peer-focus:text-primary",
              before: "before:border-primary peer-focus:before:!border-primary",
              after: "after:border-primary peer-focus:after:!border-primary",
            },
          },
        },
        sizes: {
          lg: {
            container: {
              height: "h-[52px]",
            },
            label: {
              lineHeight: "peer-placeholder-shown:leading-[4.5]",
            },
          },
        },
      },
      standard: {},
      static: {},
    },
  },
};

const theme = {
  input: inputTheme,
};

export default theme;
