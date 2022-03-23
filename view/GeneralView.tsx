import { Layout, CardContent } from "../components";
import type { CardContentProps } from "../components";

// Navigation
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { ImagesInterface } from "../config";

const Navigation = ({
  nextPage,
  backPage,
}: {
  nextPage: string | false;
  backPage: string | false;
}) => {
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
