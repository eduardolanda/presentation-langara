import { useEffect } from "react";
import { Layout, CardContent } from "../components";
import type { CardContentProps } from "../components";

// Navigation
import { Box, Button } from "@mui/material";
import { ImagesInterface } from "../config";
import { useRouter } from "next/router";
import Link from "next/link";

const Navigation = ({
  nextPage,
  backPage,
}: {
  nextPage: string | false;
  backPage: string | false;
}) => {
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      const key = event.key;
      if (key == "ArrowLeft" && backPage) router.push(backPage);
      if (key == "ArrowRight" && nextPage) router.push(nextPage);
    });
  }, [nextPage, backPage]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      gap={2}
      style={{
        position: "fixed",
        bottom: 16,
        left: 0,
        right: 0,
      }}
    >
      {backPage && (
        <Link href={backPage}>
          <Button>Back</Button>
        </Link>
      )}
      {nextPage && (
        <Link href={nextPage}>
          <Button>Next</Button>
        </Link>
      )}
    </Box>
  );
};

interface GeneralViewProps extends CardContentProps {
  images?: ImagesInterface;
  nextPage: string | false;
  backPage: string | false;
}

export const GeneralView = ({
  title = "Eduardo Landa",
  options = [],
  images = [],
  nextPage,
  backPage,
}: GeneralViewProps) => {
  return (
    <Layout images={images}>
      <CardContent title={title} options={options} />
      <Navigation nextPage={nextPage} backPage={backPage} />
    </Layout>
  );
};
