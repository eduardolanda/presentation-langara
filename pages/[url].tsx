import { GetStaticPaths, GetStaticProps } from "next";
import { KEY_OPTIONS, OPTIONS, optionInterface } from "../config/data";

import { GeneralView } from "../view";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: OPTIONS.map((option) => {
      return { params: { url: option.url } };
    }),
    fallback: false, // false or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const isHomePage = !!!params?.url;
  const indexOption = isHomePage ? 0 : KEY_OPTIONS[params?.url as string];
  const foundIndex = OPTIONS[indexOption] ? indexOption : 0;
  const data = OPTIONS[foundIndex];
  return {
    props: {
      data,
      backPage: OPTIONS[foundIndex - 1] ? OPTIONS[foundIndex - 1].url : false,
      nextPage: OPTIONS[foundIndex + 1]
        ? `/${OPTIONS[foundIndex + 1].url}`
        : false,
    }, // will be passed to the page component as props
  };
};

export default function DynamicView({
  data,
  nextPage,
  backPage,
}: {
  data: optionInterface;
  nextPage: string | false;
  backPage: string | false;
}) {
  const navigation = {
    nextPage,
    backPage,
  };
  return <GeneralView {...data} {...navigation} />;
}
