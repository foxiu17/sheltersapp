import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  transition: 0.24s ease-in-out;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => props.theme.palette.common.fountain_blue};
  border-style: dashed;
  background-color: ${props => props.theme.palette.common.alabaster};
  font-size: 1rem;
  color: ${props => props.theme.palette.common.black_5};
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #e6f3f5;
  }
`;

export const UploadedList = styled.ul``;

export const UploadedItem = styled.li``;

export const Paragraph = styled.p``;

export const Image = styled.img`
  width: 50px;
  height: 50px;
`;
