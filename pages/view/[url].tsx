import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { KEY_OPTIONS, OPTIONS, optionInterface } from "../../config/data";

import { GeneralView } from "../../view";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: OPTIONS.map((option) => {
      return { params: { url: option.url } };
    }),
    fallback: true, // false or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const indexOption = KEY_OPTIONS[params?.url as string];
  const foundIndex = OPTIONS[indexOption] ? indexOption : 0;
  const data = OPTIONS[foundIndex];
  return {
    props: {
      ...data,
      backPage: OPTIONS[foundIndex - 1] ? OPTIONS[foundIndex - 1].url : false,
      nextPage: OPTIONS[foundIndex + 1] ? OPTIONS[foundIndex + 1].url : false,
    }, // will be passed to the page component as props
  };
};

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const url = params?.url ?? "";
//   const dataIndex = KEY_OPTIONS[url as string];
//   const data = OPTIONS[dataIndex] ?? OPTIONS[0];

//   console.log(data);
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// };

export default function DynamicView(props: {
  data: optionInterface;
  nextPage: string | false;
  backPage: string | false;
}) {
  return <GeneralView {...props} />;
}
