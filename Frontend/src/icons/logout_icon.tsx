import { type IconProps, iconSizeVariants } from './icon_props'
export function LogoutIcon(props:IconProps){

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${iconSizeVariants[props.size]} `} width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9.75 21H3C2.58579 21 2.25 20.6642 2.25 20.25V3.75C2.25 3.33579 2.58579 3 3 3H9.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.5 12H6M16.5 12L14.25 9M16.5 12L14.25 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )

}