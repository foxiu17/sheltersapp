import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { injectIntl, FormattedMessage } from "react-intl";

import { useTheme } from "../../ThemeContext";

import {
  Container,
  UploadedList,
  UploadedItem,
  Paragraph,
  Image
} from "./Dropzone.style";

function MyDropzone({ intl, currentImages, setCurrentImages }) {
  const theme = useTheme();

  const renderUploadedList = () => {
    return currentImages.map((image, index) => {
      return <UploadedItem key={index}>{image.name}</UploadedItem>;
    });
  };

  const onDrop = useCallback(
    acceptedFiles => {
      acceptedFiles.forEach(file => {
        const reader = new FileReader();

        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onload = () => {
          // Do whatever you want with the file contents
          const binaryStr = reader.result;
          console.log(file);
          setCurrentImages({
            name: file.name,
            file: file
          });
          // setCurrentImages(prevImages => [...prevImages, binaryStr]);
        };
        reader.readAsDataURL(file);
      });
    },
    [setCurrentImages]
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Container theme={theme} {...getRootProps()}>
      <input {...getInputProps()} />
      <Paragraph>
        <FormattedMessage id="APP_DROPZONE.TEXT" />
      </Paragraph>
      {currentImages.length > 0 && (
        <UploadedList>
          <UploadedItem>{currentImages.name}</UploadedItem>
        </UploadedList>
      )}
    </Container>
  );
}

export default injectIntl(MyDropzone);
