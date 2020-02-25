import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { injectIntl, FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

import { useTheme } from "../../ThemeContext";

import {
  Container,
  UploadedList,
  UploadedItem,
  Paragraph
} from "./Dropzone.style";

function MyDropzone({ currentImages, setCurrentImages }) {
  const theme = useTheme();

  const onDrop = useCallback(
    acceptedFiles => {
      acceptedFiles.forEach(file => {
        const reader = new FileReader();

        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onload = () => {
          setCurrentImages({
            name: file.name,
            file: file
          });
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

MyDropzone.propTypes = {
  currentImages: PropTypes.object,
  setCurrentImages: PropTypes.func
};

export default injectIntl(MyDropzone);
