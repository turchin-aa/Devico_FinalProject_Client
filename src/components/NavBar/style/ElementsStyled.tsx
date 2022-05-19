import styled from '@emotion/styled'

export const MenuContainer = styled.div`
  position: absolute;
  display: ${(props: { isOpen? }) => (props.isOpen ? 'initial' : 'none')};

  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: 3px 0 10px rgba(0, 0, 0, 0.2), -3px 0 10px rgba(0, 0, 0, 0.2);
  z-index: 2;
`
