import Image from "next/image";

import theme from "../../../src/theme";
import { Btn } from "../..";

const SignOutBtn = () => {
  return (
    <Btn
      backgroundColor="#9CA3B0"
      padding="1.8em 4em 1.8em 5em"
      color={theme.palette.background.default}
      text="Sign Out"
    >
      <Image src="/BackArrow.svg" width={13} height={12} />
    </Btn>
  );
};

export default SignOutBtn;
