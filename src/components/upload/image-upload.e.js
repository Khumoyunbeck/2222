import styled from "styled-components"

export const Wrapper = styled.div`
  .avatar-uploader > .ant-upload {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
  }
`
export const ImageWrapper = styled.div`
  background-color: ${props =>
    props.forEdit ? "rgba(0,0,0,0.9)" : "transparent"};
  z-index: 100;
`

export const WrapperDefault = styled.div`
  background-color: white;
`
export const StyledImg = styled.img`
  width: 50%;
  z-index: 10;
  height: 100%;
  object-position: center !important;
  object-fit: cover !important;
`
