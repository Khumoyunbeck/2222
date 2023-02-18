import styled from "styled-components"
import Modal from "antd/lib/modal/Modal"

export const Wrapper = styled.div`
  width: 100%;
  position: relative;

  .ant-modal {
    width: 80% !important;
  }
`
export const StyledModal = styled(Modal)`
  width: 80% !important;

  .ant-modal-footer {
    display: none !important;
  }
`
