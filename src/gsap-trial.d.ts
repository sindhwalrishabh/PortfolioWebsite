declare module "gsap-trial/ScrollSmoother" {
  const ScrollSmoother: any;
  export { ScrollSmoother };
}

declare module "gsap-trial/SplitText" {
  type SplitTextTarget =
    | string
    | Element
    | NodeListOf<Element>
    | ArrayLike<Element>
    | string[]
    | ArrayLike<string>
    | (string | Element)[];

  type SplitTextOptions = {
    type?: string;
    linesClass?: string;
    [key: string]: any;
  };

  class SplitText {
    chars: any[];
    words: any[];
    lines: any[];

    constructor(target: SplitTextTarget, vars?: SplitTextOptions);

    revert(): void;
  }

  export { SplitText };
}
