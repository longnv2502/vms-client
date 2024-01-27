import Icon from '@ant-design/icons'
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'

const RefreshOutlinedSvg = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='currentColor'
    viewBox='0 0 512 512'
  >
    <path
      d='M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8 62.5-62.5 163.8-62.5 226.3 0l17.1 17.2H336c-17.7 0-32 14.3-32 32s14.3 32 32 32h127.9c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2l-17.5-17.6c-87.5-87.5-229.3-87.5-316.8 0-24.4 24.4-42 53.1-52.8 83.8-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2-4 4-6.7 8.8-8.1 14-.3 1.2-.6 2.5-.8 3.8-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32v-51.1l17.6 17.5c87.5 87.4 229.3 87.4 316.7 0 24.4-24.4 42.1-53.1 52.9-83.7 5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8-62.5 62.5-163.8 62.5-226.3 0l-.1-.1-17.1-17.1H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2.1-4.8.3s-3.1.5-4.6 1z'></path>
  </svg>
)

const RefreshOutlined = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={RefreshOutlinedSvg} {...props} />
)

export default RefreshOutlined
