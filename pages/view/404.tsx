import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: "/eduardo-landa",
      permanent: true,
    },
  };
};

export default getStaticProps;
