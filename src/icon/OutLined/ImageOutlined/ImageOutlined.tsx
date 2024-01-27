import Icon from '@ant-design/icons'
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'

const IconSvg = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='currentColor' viewBox='0 0 512 512'>
    <path
      d='M448 80c8.8 0 16 7.2 16 16v319.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3l-83 107.4-30.5-42.7c-4.5-6.3-11.7-10-19.5-10s-15 3.7-19.5 10.1l-80 112-4.5 6.2V96c0-8.8 7.2-16 16-16h384zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 100-96 48 48 0 100 96z'></path>
  </svg>
)

const ImageOutlined = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={IconSvg} {...props} />
)
export default ImageOutlined
