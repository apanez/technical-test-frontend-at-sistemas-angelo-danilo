import styled from 'styled-components'

export const LoginContent = styled.div``

export const FieldContent = styled.div`
  margin-bottom: 15px;
`

export const LabelUI = styled.label`
  display: block;
  color: #6a6a6a;
`

export const Field = styled.input`
  border: 1px solid #6a6a6a;
  border-radius: 2px;
  width: 200px;
  height: 20px;
`

export const ButtonUI = styled.button`
  background: #44719f;
  color: #fff;
  border: 1px solid #44719f;
  border-radius: 2px;
  font-size: 14px;
  width: 80px;
  height: 25px;
  opacity: ${(props)=> props.disabled ? '0.5' : '1'}
`

export const ErrorContent = styled.div`
  color: red;
`
