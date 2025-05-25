
import { type IconProps, iconSizeVariants } from './icon_props'

export default function BackArrowIcon(props:IconProps){
    return (<div><svg xmlns="http://www.w3.org/2000/svg" className={iconSizeVariants[props.size]} width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.29486 12.1875H21.6666C22.1154 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1154 13.8125 21.6666 13.8125H6.29486L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.5761 20.3918 10.2588 20.0745L3.75879 13.5745C3.44149 13.2572 3.44149 12.7428 3.75879 12.4255L10.2588 5.92548C10.5761 5.60817 11.0905 5.60817 11.4078 5.92548Z" fill="#2C2D3A"/>
  </svg></div>)
}