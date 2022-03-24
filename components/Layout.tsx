import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { ReactElement, ReactNode } from "react";
import { ImagesInterface } from "../config";

interface LayoutProps {
  images: ImagesInterface;
  children: ReactElement | ReactNode;
}

export const Layout = ({ images, children }: LayoutProps) => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Box
      display="flex"
      height="100vh"
      flexWrap="wrap"
      justifyContent="center"
      // flexDirection={matches ? "column" : "row-reverse"}
      style={{
        borderLeft: "16px solid #F15822",
        borderTop: "16px solid #F15822",
      }}
    >
      <Box
        // flexBasis="50%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Box>
      <Box
        flexBasis="40%"
        p={2}
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        {images.map(({ url, author, author_url }, imageIndex) => (
          <Box
            key={`image-${imageIndex}-${url}`}
            width={`${80 / images.length}%`}
            height="max-content"
          >
            <Image
              layout="responsive"
              objectFit="contain"
              width={500}
              height={500}
              src={url}
              alt={`image-${url}`}
            />
            <Typography
              mt={2}
              variant="caption"
              display="block"
              fontWeight="bold"
              gutterBottom
            >
              {author ? `Author: ${author}` : ""}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              {author_url ? `${author_url}` : ""}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
